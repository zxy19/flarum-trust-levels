<?php

namespace Xypp\TrustLevels\Api\Controller;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\TrustLevels\Api\Serializer\TrustLevelSerializer;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\Utils\TrustLevelConditionUtils;

class EditTrustLevel extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = TrustLevelSerializer::class;
    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertAdmin();

        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);

        $trustLevel = TrustLevel::findOrFail(Arr::get($request->getQueryParams(), 'id'));

        if ($name = Arr::get($attributes, 'name')) {
            $trustLevel->name = $name;
        }
        if ($icon = Arr::get($attributes, 'icon')) {
            $trustLevel->icon = $icon;
        }
        if ($conditions = Arr::get($attributes, 'conditions')) {
            $trustLevel->conditions = $conditions;
        }
        if ($group_id = Arr::get($attributes, 'group_id')) {
            if ($group_id == -1)
                $group_id = null;
            $trustLevel->group_id = $group_id;
        }
        $trustLevel->save();
        TrustLevelConditionUtils::updateTrustLevelCondition($trustLevel);
        return $trustLevel;
    }
}
