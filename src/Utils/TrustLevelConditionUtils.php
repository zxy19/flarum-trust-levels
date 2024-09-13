<?php

namespace Xypp\TrustLevels\Utils;
use Flarum\Database\Eloquent\Collection;
use Illuminate\Support\Arr;
use Xypp\Collector\Condition;
use Xypp\ForumQuests\Helper\ConditionHelper;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\TrustLevelCondition;

class TrustLevelConditionUtils
{

    public static function eachConditions(array $conditions, callable $callback)
    {
        foreach ($conditions as $condition) {
            $callback(
                Arr::get($condition, "name"),
                Arr::get($condition, "operator"),
                Arr::get($condition, "value"),
                intval(Arr::get($condition, "calculate", 1)),
                Arr::get($condition, "span", null)
            );
        }
    }

    public static function updateTrustLevelCondition(TrustLevel $trustLevel)
    {
        TrustLevelCondition::where("trust_level_id", $trustLevel->id)->delete();

        self::eachConditions($trustLevel->conditions, function ($name, $operator, $value, $calculate, $span) use ($trustLevel) {
            $condition = new TrustLevelCondition();
            $condition->trust_level_id = $trustLevel->id;
            $condition->condition_name = $name;
            $condition->save();
        });
    }

    public static function removeTrustLevelCondition(TrustLevel $trustLevel)
    {
        TrustLevelCondition::where("trust_level_id", $trustLevel->id)->delete();
    }

    public static function checkFirstCondition(array $conditions, Condition $condition)
    {
        /**
         * @var ConditionHelper $conditionHelper
         */
        $conditionHelper = resolve(ConditionHelper::class);
        $result = true;
        self::eachConditions($conditions, function ($name, $operator, $value, $calculate, $span) use ($condition, $conditionHelper, &$result) {
            if ($name == $condition->name) {
                $result = $result && $conditionHelper->checkCondition($name, $operator, $value, $span, $calculate, $condition);
            }
        });

        return $result;
    }

    public static function checkConditions(array $conditions, Collection $condition)
    {
        /**
         * @var ConditionHelper $conditionHelper
         */
        $conditionHelper = resolve(ConditionHelper::class);
        $result = true;
        self::eachConditions($conditions, function ($name, $operator, $value, $calculate, $span) use ($condition, $conditionHelper, &$result) {
            $currentCondition = $condition->where("name", $name)->first();
            if ($currentCondition) {
                $result = $result && $conditionHelper->checkCondition($name, $operator, $value, $span, $calculate, $currentCondition);
            } else {
                $result = false;
            }
        });
        return $result;
    }
}