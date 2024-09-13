<?php

namespace Xypp\TrustLevels\Api\Controller;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\TrustLevels\Api\Serializer\TrustLevelSerializer;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\Utils\TrustLevelConditionUtils;

class CreateTrustLevel extends AbstractCreateController
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

        $trustLevel = TrustLevel::create($attributes);
        if ($trustLevel->group_id === -1) {
            $trustLevel->group_id = null;
        }
        $level = TrustLevel::max('level');
        if ($level === null)
            $level = 0;
        else
            $level++;
        $trustLevel->level = $level;
        $trustLevel->save();
        TrustLevelConditionUtils::updateTrustLevelCondition($trustLevel);
        return $trustLevel;
    }
}
