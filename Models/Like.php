<?php

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $guarded = [];
    // protected $fillable = [
    //     'post_id',
    //     'username',
    // ];

    // methods
    public function posts (){
        return $this->belongsTo(Post::class);
    }
}