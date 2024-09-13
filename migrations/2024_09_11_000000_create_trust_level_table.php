<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'trust_levels',
    function (Blueprint $table) {
        $table->increments('id');
        $table->timestamps();
        $table->integer('group_id')->unsigned()->nullable();
        $table->integer("level");
        $table->string('name');
        $table->string('icon');
        $table->mediumText("conditions");
        $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
    }
);