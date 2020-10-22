<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Account extends Model
{
    use HasFactory;

    function getAccount(){
        $data=DB::table("accounts")->get();
        return $data;
    }
     function addAccount($data){
            //dd($data);
            DB::table("accounts")->insert($data);
     }
}
