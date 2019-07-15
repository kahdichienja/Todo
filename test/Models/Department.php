<?php

use Illuminate\Database\Eloquent\Model;
    class Department extends Model{
        // protected $table = 'departments';
        protected $guarded = [];

        public function subjects (){
            return $this->hasMany(Subject::class);
        }
    }