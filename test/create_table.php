<?php
 require 'vendor/autoload.php';

 use Illuminate\Database\Capsule\Manager as Capsule;

 Capsule::schema()->dropIfExists('departments');

 Capsule::schema()->create('departments', function ($table) {
    $table->increments('id');
    $table->string('name');
    $table->timestamps();
});



Capsule::schema()->dropIfExists('subjects');

Capsule::schema()->create('subjects', function ($table) {
   $table->increments('id');
   $table->string('name');
   $table->integer('department_id')->unsigned();
   $table->timestamps();
});