<?php

use Illuminate\Database\Eloquent\Model;
    class Subject extends Model{
        // protected $table = 'subjects';
        protected $guarded = [];

        public function departments (){
            return $this->belongsTo(Department::class);
        }
    }