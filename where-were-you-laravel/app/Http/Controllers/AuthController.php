<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 
use JWTAuth;
use Validator;
use App\Models\User;
use App\Http\Requests\Register\AuthRequest;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;


class AuthController extends Controller
{
    //
    public $token = true;

    public function register(Request $request)
    {
 
         $validator = Validator::make($request->all(), 
                      [ 
                      'firstname' => 'required',
                      'lastname'=> 'required',
                      'address' => 'required',
                      'city'=> 'required',
                      'state' => 'required',
                      'zipcode'=> 'required',
                      'email' => 'required|email',
                      'password' => 'required',  
                     ]);  
 
         if ($validator->fails()) {  
 
               return response()->json(['error'=>$validator->errors()], 401); 
 
            }   
         $duplicateUser = User::where("email",$request->email)->first();
 if($duplicateUser != null){
    return response()->json([
        'success' => 0,
        'message' => 'Sorry, the user already exists'
    ], 201);
 }
 else{
        $user = new User();
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->state = $request->state;
        $user->zipcode = $request->zipcode;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
  
        // if ($this->token) {
        //     return $this->login($request);
        // }
  
        return response()->json([
            'success' => 1,
            'message' => 'User Registration Successful',
            'data' => $user
        ], 200);
    }
    }

    public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $jwt_token = null;
  
        if (!$jwt_token = JWTAuth::attempt($input)) {
            return response()->json([
                'success' => 0,
                'message' => 'Invalid Email or Password',
            ], 201);
        }
  
        return response()->json([
            'success' => 1,
            'message' => 'Login Successful',
            'token' => $jwt_token,
        ]);
    }

    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);
  
        try {
            JWTAuth::invalidate($request->token);
  
            return response()->json([
                'success' => 1,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => 0,
                'message' => 'Sorry, the user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
  
    public function getUser(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);
  
        $user = JWTAuth::authenticate($request->token);
  
        return response()->json(['user' => $user]);
    }
}


