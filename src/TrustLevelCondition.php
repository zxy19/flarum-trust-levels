<?php

namespace Xypp\TrustLevels;
use Flarum\Database\AbstractModel;
use Flarum\User\User;


/**
 * @property string $condition_name
 * @property int $trust_level_id
 */
class TrustLevelCondition extends AbstractModel
{
    protected $table = 'trust_level_condition';

    protected $fillable = ['trust_level_id',"condition_name"];
}