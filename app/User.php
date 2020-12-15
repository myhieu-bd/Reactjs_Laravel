<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
  

    public function comment(){
        return $this->belongsTo("App\Comment", "id", "user_id");
    }
   
}
