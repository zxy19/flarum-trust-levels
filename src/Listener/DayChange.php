<?php

namespace Xypp\TrustLevels\Listener;
use Flarum\User\User;
use Xypp\Collector\Event\DailyUpdate;
use Xypp\Collector\Helper\CommandContextHelper;
use Xypp\LocalizeDate\Event\DateChangeEvent;
use Xypp\TrustLevels\Utils\TrustLevelUtils;

class DayChange
{
    protected CommandContextHelper $helper;
    public function __construct(CommandContextHelper $helper)
    {
        $this->helper = $helper;
    }
    public function __invoke(DailyUpdate $event)
    {
        User::all()->each(function (User $actor) {
            TrustLevelUtils::checkLevel($actor);
        });
    }
}