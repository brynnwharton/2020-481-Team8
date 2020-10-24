<?php
namespace app\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\Account;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
  function loginUser(Request $req){
    $acc = new Account();
    $email = $req->email;
    $password = $req->password;
    $acExist = $acc->login($email, $password);
    if($acExist){
    $token = Hash::make($acExist->Password);
    $response['token'] = $token;
    $response['status'] = 1;
    //echo $token;
    }
    else{
        $response['message'] = "Incorrect Email or Password";
        $response['status'] = 0;
    }
    return response()->json($response);
  }
function postUser(Request $req){
    $acc = new Account();
    $acExist = $acc->getAccount($req->email);
    if(count($acExist) == 0){
    $req['password'] = Hash::make($req->password);
    $userData = $acc->addAccount($req->all());
    $response['message'] = "User Registration Successful";
    $response['data'] = $req->all();
    $response['status'] = 1;
    }
    else{
        $response['message'] = "User already exists";
        $response['status'] = 0;
    }
    return response()->json($response);
}
} 