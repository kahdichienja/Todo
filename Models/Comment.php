<?php

use Illuminate\Database\Eloquent\Model;
    class Comment extends Model{
        // protected $table = 'Comments';
        protected $guarded = [];

        public function posts (){
            return $this->belongsTo(Post::class);
        }
    }