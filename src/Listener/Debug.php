<?php

namespace Xypp\TrustLevels\Listener;
use Flarum\User\User;
use Illuminate\Console\Command;
use Xypp\Collector\Condition;
use Xypp\Collector\Event\DailyUpdate;
use Xypp\Collector\Event\DebugInfo;
use Xypp\Collector\Helper\CommandContextHelper;
use Xypp\Collector\Helper\ConditionHelper;
use Xypp\LocalizeDate\Event\DateChangeEvent;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\TrustLevelCondition;
use Xypp\TrustLevels\Utils\TrustLevelConditionUtils;
use Xypp\TrustLevels\Utils\TrustLevelUtils;

class Debug
{
    protected ConditionHelper $conditionHelper;
    public function __construct(ConditionHelper $conditionHelper)
    {
        $this->conditionHelper = $conditionHelper;
    }
    public function __invoke(DebugInfo $event)
    {
        $user = $event->user;
        $currentLevel = TrustLevelUtils::getTrustLevel($user);
        if ($currentLevel) {
            $this->debugForLevel($currentLevel, $user, $event->command);
        }
        $nextLevel = TrustLevelUtils::getNextTrustLevel($user);
        if ($nextLevel) {
            $this->debugForLevel($nextLevel, $user, $event->command);
        }
    }

    protected function debugForLevel(TrustLevel $currentLevel, User $user, Command $command)
    {
        $command->info("Checking conditions for level $currentLevel->name");
        $conditionNames = TrustLevelCondition::where("trust_level_id", $currentLevel->id)->get(["condition_name"]);
        $conditions = Condition::whereIn("name", $conditionNames)->where("user_id", $user->id)->get();

        $currentTime = $this->conditionHelper->cz->now();

        TrustLevelConditionUtils::eachConditions($currentLevel->conditions, function ($name, $operator, $value, $calculate, $span) use ($conditions, $command, $currentTime) {
            $command->info(" # Checking $name ($span  c->$calculate)");
            $currentCondition = $conditions->where("name", $name)->first();
            $conditionDefine = $this->conditionHelper->getConditionDefinition($name);
            $currentValue = 0;

            if (!$currentCondition) {
                $command->info(" - ? Condition $name not found");
            } else if ($span)
                $currentValue = $currentCondition->getAccumulation()->getSpan($currentTime, $span, intval($calculate));
            else {
                $currentValue = $currentCondition->getAccumulation()->getTotal($calculate);
            }
            $command->info(" - $name $currentValue ( Req $operator $value )");
            if ($conditionDefine->compare($currentValue, $operator, $value)) {
                $command->info(" - + passed");
            } else {
                $command->warn(" - - failed");
            }

        });
    }
}