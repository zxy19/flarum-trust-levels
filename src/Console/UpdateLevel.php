<?php

namespace Xypp\TrustLevels\Console;

use Flarum\User\User;
use Illuminate\Console\Command;
use Xypp\TrustLevels\Utils\TrustLevelUtils;

class UpdateLevel extends Command
{
    /**
     * @var string
     */
    protected $signature = 'trust-level:update';

    /**
     * @var string
     */
    protected $description = 'Manually recalculate trust level';
    public function handle()
    {
        $this->setProcessTitle("Re-calc Refresh time.");
        $this->withProgressBar(User::all(), function (User $actor) {
            TrustLevelUtils::checkLevel($actor);
        });
        $this->info("Done");
    }
}