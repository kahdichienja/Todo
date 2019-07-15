<?php
 require '../vendor/autoload.php';

 use Illuminate\Database\Capsule\Manager as Capsule;

 Capsule::schema()->dropIfExists('stats');

 Capsule::schema()->create('stats', function ($table) {
    $table->increments('id');
    $table->string('gender');
    $table->integer('age');
    $table->string('username');
    $table->string('education');
    $table->string('faculty');
    $table->string('hostel');
    $table->string('religion');
    $table->string('networkarea');
    $table->string('networkvisit');
    $table->string('socialmedia');
    $table->text('yinternet');
    $table->string('visitedwebsites');
    $table->string('socialschool');
    $table->timestamps();
});
