<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'trust_level_condition',
    function (Blueprint $table) {
        $table->integer('trust_level_id')->unsigned();
        $table->string('condition_name');
    }
);