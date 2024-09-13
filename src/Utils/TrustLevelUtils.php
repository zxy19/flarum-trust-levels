<?php

namespace Xypp\TrustLevels\Utils;
use Flarum\Notification\NotificationSyncer;
use Flarum\User\User;
use Illuminate\Events\Dispatcher;
use Xypp\Collector\Condition;
use Xypp\Collector\Data\ConditionData;
use Xypp\Collector\Event\ConditionChange;
use Xypp\TrustLevels\Event\TrustLevelChange;
use Xypp\TrustLevels\Notification\TrustLevelChangeNotification;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\TrustLevelCondition;

class TrustLevelUtils
{
    public static function getTrustLevel(User $user): ?TrustLevel
    {
        $trustLevel = $user->trustLevel;
        if (!$trustLevel) {
            return TrustLevel::where("level", 0)->first();
        }
        return $trustLevel;
    }

    public static function getNextTrustLevel(User $user): ?TrustLevel
    {
        $trustLevel = self::getTrustLevel($user);

        if (!$trustLevel) {
            return null;
        } else {
            return $trustLevel->next()->first();
        }
    }
    public static function getPreviousTrustLevel(User $user): ?TrustLevel
    {
        $trustLevel = self::getTrustLevel($user);
        if (!$trustLevel) {
            return null;
        } else {
            return $trustLevel->previous()->first();
        }
    }

    public static function setTrustLevel(User $user, TrustLevel $trustLevel)
    {
        $currentLevel = self::getTrustLevel($user);
        if ($currentLevel) {
            if ($currentLevel->group_id !== null)
                if ($user->groups()->where("id", $currentLevel->group_id)->exists())
                    $user->groups()->detach($currentLevel->group_id);
        }

        if ($trustLevel->group_id !== null)
            if (!$user->groups()->where('id', $trustLevel->group_id)->exists())
                $user->groups()->attach($trustLevel->group_id);

        $user->trust_level = $trustLevel->level;
        resolve(Dispatcher::class)->dispatch(new TrustLevelChange($user, $trustLevel, $currentLevel));

        $user->save();

        resolve(NotificationSyncer::class)->sync(new TrustLevelChangeNotification($trustLevel, $user, $currentLevel), [$user]);
    }


    public static function checkLevel(User $user, ?ConditionChange $changeConditionName = null)
    {
        $currentLevel = self::getTrustLevel($user);
        $nextLevel = self::getNextTrustLevel($user);

        if ($nextLevel && self::checkConditionRelated($user, $nextLevel, $changeConditionName)) {
            self::setTrustLevel($user, $nextLevel);
            $user->refresh();
            self::checkLevel($user, $changeConditionName);
        } else if (
            $currentLevel
            && $currentLevel->level > 0
            && self::checkConditionRelated($user, $currentLevel, $changeConditionName) === false
        ) {
            $previousLevel = TrustLevelUtils::getPreviousTrustLevel($user);
            if ($previousLevel) {
                self::setTrustLevel($user, $previousLevel);
                $user->refresh();
                self::checkLevel($user, $changeConditionName);
            }
        }
    }

    public static function checkConditionRelated(User $user, TrustLevel $level, ?ConditionChange $changedCondition): ?bool
    {
        // 快速检查当前条件是否满足
        if ($changedCondition) {
            if (
                !(TrustLevelCondition::where("trust_level_id", $level->id)
                    ->where("condition_name", $changedCondition->data->name)->exists())
            ) {
                return null;
            }
            if (
                !TrustLevelConditionUtils::checkFirstCondition(
                    $level->conditions,
                    $changedCondition->condition
                )
            ) {
                return false;
            }
        }
        $conditionNames = TrustLevelCondition::where("trust_level_id", $level->id)->get(["condition_name"]);
        $conditions = Condition::whereIn("name", $conditionNames)->where("user_id", $user->id)->get();
        $result = TrustLevelConditionUtils::checkConditions($level->conditions, $conditions);

        if ($result) {
            return true;
        }
        return false;
    }
}