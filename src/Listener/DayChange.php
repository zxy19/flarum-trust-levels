<?php

namespace Xypp\TrustLevels\Listener;
use Flarum\User\User;
use Xypp\LocalizeDate\Event\DateChangeEvent;
use Xypp\TrustLevels\Utils\TrustLevelUtils;

class DayChange
{
    public function __invoke(DateChangeEvent $event)
    {
        User::all()->each(function (User $actor) {
            TrustLevelUtils::checkLevel($actor);
        });
    }
}