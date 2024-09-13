<?php

namespace Xypp\TrustLevels\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Foundation\ValidationException;
use Xypp\TrustLevels\TrustLevel;

class TrustLevelSerializer extends AbstractSerializer
{
    protected $type = 'trust-levels';
    public function getDefaultAttributes($trustLevel)
    {
        if (!$trustLevel instanceof TrustLevel) {
            throw new ValidationException(["message" => "\$model is not instance of trustLevel"]);
        }
        return [
            "name" => $trustLevel->name,
            "icon" => $trustLevel->icon,
            "conditions" => $trustLevel->conditions??[],
            "group_id" => $trustLevel->group_id,
            "level" => $trustLevel->level,
        ];
    }
    public function user($trustLevel)
    {
        return $this->hasOne($trustLevel, BasicUserSerializer::class, 'user');
    }
    public function next($trustLevel)
    {
        return $this->hasOne($trustLevel, TrustLevelSerializer::class, 'next');
    }
}