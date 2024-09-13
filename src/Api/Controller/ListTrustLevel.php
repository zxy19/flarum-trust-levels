<?php

namespace Xypp\TrustLevels\Api\Controller;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\TrustLevels\Api\Serializer\TrustLevelSerializer;
use Xypp\TrustLevels\TrustLevel;
use Xypp\TrustLevels\Utils\TrustLevelConditionUtils;

class ListTrustLevel extends AbstractListController
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
        return TrustLevel::all();
    }
}
