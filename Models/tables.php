<?php
 require '../vendor/autoload.php';

 use Illuminate\Database\Capsule\Manager as Capsule;
 Capsule::schema()->dropIfExists('users');

 Capsule::schema()->create('users', function ($table) {
    $table->increments('id');
    $table->string('user_name');
    $table->string('user_email');
    $table->string('user_password');
    $table->timestamps();
});

 Capsule::schema()->dropIfExists('posts');

 Capsule::schema()->create('posts', function ($table) {
    $table->increments('id');
    $table->text('message');
    $table->string('file_url');
    $table->string('username');
    $table->string('user_imgurl');
    $table->string('unique_hash');
    $table->timestamps();
});



Capsule::schema()->dropIfExists('comments');

Capsule::schema()->create('comments', function ($table) {
   $table->increments('id');
   $table->string('email');
   $table->string('username');
   $table->text('comment');
   $table->string('user_imgurl');
   $table->integer('post_id')->unsigned();
   $table->timestamps();
});


Capsule::schema()->dropIfExists('likes');

Capsule::schema()->create('likes', function ($table) {
    $table->increments('id');
    $table->string('email');
    $table->string('userprofile');
    $table->integer('post_id');
    $table->integer('like_count');
    $table->timestamps();
});

