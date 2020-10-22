<?php
namespace app\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;

class UserController extends Controller
{
 function getUser(){
    $user =  new Account();
    $data = $user->getAccount();
    return response()->json($data);
 }
function postUser(Request $req){
    $acc = new Account();
    $userData = $acc->addAccount($req->all());
    //dd($userData);
}
} 