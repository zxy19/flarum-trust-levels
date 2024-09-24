<?php

namespace Xypp\TrustLevels\Listener;
use Flarum\Settings\SettingsRepositoryInterface;
use Xypp\Collector\Condition;
use Xypp\Collector\Event\ConditionChange as ConditionChangeEvent;
use Xypp\ForumQuests\Helper\ConditionHelper;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\TrustLevelCondition;
use Xypp\TrustLevels\Utils\TrustLevelConditionUtils;
use Xypp\TrustLevels\Utils\TrustLevelUtils;

class ConditionChange
{
    protected ConditionHelper $conditionHelper;
    protected SettingsRepositoryInterface $settings;
    public function __construct(ConditionHelper $conditionHelper, SettingsRepositoryInterface $settings)
    {
        $this->conditionHelper = $conditionHelper;
        $this->settings = $settings;
    }

    public function __invoke(ConditionChangeEvent $event)
    {
        if ($this->settings->get("xypp-trust-levels.no-auto-update"))
            return;
        TrustLevelUtils::checkLevel($event->user, $event);
    }
}