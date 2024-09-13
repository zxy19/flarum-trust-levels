<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return [
    'up' => function ($schema) {
        $schema->table("users", function (Blueprint $table) {
            $table->integer("trust_level")->default(0);
        });
    },
    'down' => function ($schema) {
        $schema->table("users", function (Blueprint $table) {
            $table->dropColumn('trust_level');
        });
    }
];