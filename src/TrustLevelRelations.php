<?php

namespace Xypp\TrustLevels;
use Flarum\Api\Controller\ShowUserController;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Xypp\TrustLevels\Utils\TrustLevelUtils;

class TrustLevelRelations
{
    public function __invoke(ShowUserController $controller, User &$data)
    {
        $data['trustLevelNext'] = TrustLevelUtils::getNextTrustLevel($data);
    }
}