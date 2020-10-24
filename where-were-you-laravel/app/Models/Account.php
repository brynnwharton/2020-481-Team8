<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use Tymon\JWTAuth\Contracts\JWTSubject;

class Account extends Model implements JWTSubject
{
    use HasFactory;

     function getAccount($email){
         $data=DB::table("accounts")->where('Email',$email)->get();
         return $data;
     }

     function addAccount($data){
            DB::table("accounts")->insert($data);
     }

     function login($email, $password){
        $data=DB::table("accounts")->where('Email',$email)->get()->first();
        // dd($data);
        // if(Hash::check($password, $data->Password)){
        //     return $data;
        // }
        if($password == $data->Password){
            return $data;
        }
     }

     public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }
}
