<?php

use Illuminate\Database\Eloquent\Model;
    class Post extends Model{

        protected $guarded = [];

        public function comments (){
            return $this->hasMany(Comment::class);
        }

        public function likes (){
            return $this->hasMany(Like::class);
        }
    }