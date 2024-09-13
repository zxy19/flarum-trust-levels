<?php

namespace Xypp\TrustLevels\Api\Controller;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\TrustLevels\Api\Serializer\TrustLevelSerializer;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\Utils\TrustLevelConditionUtils;

class DeleteTrustLevel extends AbstractDeleteController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = TrustLevelSerializer::class;
    /**
     * {@inheritdoc}
     */
    protected function delete(ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertAdmin();

        $trustLevel = TrustLevel::findOrFail(Arr::get($request->getQueryParams(), 'id'));
        TrustLevelConditionUtils::removeTrustLevelCondition($trustLevel);
        TrustLevel::where("level", ">", $trustLevel->level)
            ->update(["level" => TrustLevel::raw("level - 1")]);
        return $trustLevel->delete();
    }
}
