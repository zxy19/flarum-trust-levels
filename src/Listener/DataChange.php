<?php

namespace Xypp\TrustLevels\Listener;
use Xypp\Collector\Condition;
use Xypp\Collector\Event\ConditionChange;
use Xypp\ForumQuests\Helper\ConditionHelper;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\TrustLevelCondition;
use Xypp\TrustLevels\Utils\TrustLevelConditionUtils;
use Xypp\TrustLevels\Utils\TrustLevelUtils;

class DataChange
{
    protected ConditionHelper $conditionHelper;
    public function __construct(ConditionHelper $conditionHelper)
    {
        $this->conditionHelper = $conditionHelper;
    }

    public function __invoke(ConditionChange $event)
    {
        TrustLevelUtils::checkLevel($event->user, $event);
    }
}