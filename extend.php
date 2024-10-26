<?php

/*
 * This file is part of xypp/flarum-trust-levels.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\TrustLevels;

use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Xypp\Collector\Event\ConditionChange;
use Xypp\Collector\Event\DailyUpdate;
use Xypp\Collector\Event\DebugInfo;
use Xypp\LocalizeDate\Console\DateChangeCommand;
use Xypp\TrustLevels\Api\Controller\CreateTrustLevel;
use Xypp\TrustLevels\Api\Controller\DeleteTrustLevel;
use Xypp\TrustLevels\Api\Controller\EditTrustLevel;
use Xypp\TrustLevels\Api\Controller\ListTrustLevel;
use Xypp\TrustLevels\Api\Controller\SortTrustLevel;
use Xypp\TrustLevels\Api\Serializer\TrustLevelSerializer;
use Xypp\TrustLevels\Console\UpdateLevel;
use Xypp\TrustLevels\Listener\DayChange;
use Xypp\TrustLevels\Listener\Debug;
use Xypp\TrustLevels\Notification\TrustLevelChangeNotification;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\Model(User::class))
        ->hasOne('trustLevel', TrustLevel::class, "level", "trust_level"),
    (new Extend\ApiSerializer(UserSerializer::class))
        ->hasOne("trustLevel", TrustLevelSerializer::class),
    (new Extend\ApiController(ShowUserController::class))
        ->addOptionalInclude(['trustLevel', 'trustLevel.next']),
    (new Extend\Routes('api'))
        ->get("/trust-levels", "trust-levels.list", ListTrustLevel::class)
        ->post("/trust-levels", "trust-levels.create", CreateTrustLevel::class)
        ->post("/trust-levels/sort", "trust-levels.sort", SortTrustLevel::class)
        ->patch("/trust-levels/{id}", "trust-levels.edit", EditTrustLevel::class)
        ->delete("/trust-levels/{id}", "trust-levels.delete", DeleteTrustLevel::class),
    (new Extend\Event)
        ->listen(ConditionChange::class, \Xypp\TrustLevels\Listener\ConditionChange::class)
        ->listen(DailyUpdate::class, DayChange::class)
        ->listen(DebugInfo::class, Debug::class),
    (new Extend\Console)
        ->command(UpdateLevel::class),
    (new Extend\Notification)
        ->type(TrustLevelChangeNotification::class, TrustLevelSerializer::class, ['alert']),
    (new Extend\Settings)
        ->default("xypp-trust-levels.no-auto-update", false)
];
