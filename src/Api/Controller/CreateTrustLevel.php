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

        if (Arr::get($attributes, "group_id") == -1) {
            Arr::set($attributes, "group_id", null);
        }
        $trustLevel = TrustLevel::create($attributes);
        if (!TrustLevel::exists())
            $level = 0;
        else
            $level = TrustLevel::max('level') + 1;
        
        $trustLevel->level = $level;
        $trustLevel->save();
        TrustLevelConditionUtils::updateTrustLevelCondition($trustLevel);
        return $trustLevel;
    }
}
