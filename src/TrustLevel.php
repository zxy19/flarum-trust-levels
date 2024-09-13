<?php

namespace Xypp\TrustLevels;
use Flarum\Database\AbstractModel;
use Flarum\Group\Group;
use Flarum\User\User;

/**
 * @property string $name
 * @property string $icon
 * @property string $type
 * @property int $level
 * @property array $conditions
 * @property int $group_id
 */
class TrustLevel extends AbstractModel
{
    protected $table = 'trust_levels';

    protected $fillable = ['name', 'icon', "conditions", "group_id", "level"];

    protected $casts = [
        'conditions' => 'array'
    ];

    public function users()
    {
        return $this->hasMany(User::class, "level", "trust_level");
    }
    public function group()
    {
        return $this->hasOne(Group::class, "id", 'group_id');
    }

    public function next()
    {
        return $this->hasOne(self::class, 'id', 'conditions')->orWhere("level", "=", $this->level + 1);
    }
    public function previous()
    {
        return $this->hasOne(self::class, 'id', 'conditions')->orWhere("level", "=", $this->level - 1);
    }
}