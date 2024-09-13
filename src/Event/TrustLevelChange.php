<?php

namespace Xypp\TrustLevels\Event;
use Flarum\User\User;
use Xypp\TrustLevels\TrustLevel;

class TrustLevelChange{
    protected User $user;
    protected TrustLevel $trustLevel;
    protected ?TrustLevel $fromLevel;

    public function __construct(User $user, TrustLevel $trustLevel, ?TrustLevel $fromLevel)
    {
        $this->user = $user;
        $this->trustLevel = $trustLevel;
        $this->fromLevel = $fromLevel;
    }
}