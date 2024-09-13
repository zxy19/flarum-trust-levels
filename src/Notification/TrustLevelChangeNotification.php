<?php

namespace Xypp\TrustLevels\Notification;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\User\User;
use Xypp\ForumQuests\QuestInfo;
use Xypp\TrustLevels\TrustLevel;

class TrustLevelChangeNotification implements BlueprintInterface
{
    public $user;
    public $trustLevel;
    public $data;

    public function __construct(TrustLevel $trustLevel, User $user, ?TrustLevel $fromLevel)
    {
        $this->user = $user;
        $this->trustLevel = $trustLevel;
        $this->data = [
            "time" => time(),
        ];
        if ($fromLevel) {
            $this->data["from"] = $fromLevel->name;
            $this->data["from_level"] = $fromLevel->level;
        }
    }

    public function getSubject()
    {
        return $this->trustLevel;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getData()
    {
        return $this->data;
    }

    public static function getType()
    {
        return 'trust_level_change';
    }

    public static function getSubjectModel()
    {
        return TrustLevel::class;
    }
}