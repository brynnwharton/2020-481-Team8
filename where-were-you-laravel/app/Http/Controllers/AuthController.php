<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 
use JWTAuth;
use Validator;
use App\Models\User;
use App\Models\Activity;
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
                'user' => $user
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

        $user = User::where("email",$request->email)->first();

        return response()->json([
            'success' => 1,
            'message' => 'Login Successful',
            'token' => $jwt_token,
            'user' => $user
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

    public function resetUser(Request $request){
        $user = User::where("email",$request->email)->first();
        if($user != null){
            $user->password = bcrypt($request->password);
            $user->save();
            return response()->json([
                'success' => 1,
                'message' => 'Password reset Successful'
            ]);
        }
        else{
            return response()->json([
                'success' => 0,
                'message' => 'User Cannot be found'
            ]); 
        }
    }

    public function postActivity(Request $request){
        $activity = new Activity();
        $activity->email = $request->email;
        $activity->location = $request->location;
        $activity->time = $request->time;
        $activity->FC = $request->FC;
        $activity->SD = $request->SD;
        $activity->CP = $request->CP;
        $activity->save();

        return response()->json([
            'success' => 1,
            'message' => 'Post Activity Successful',
            'activity' => $activity
        ], 200);
    }

    public function getActivity(Request $request){
        $activity = Activity::all()->where("email",$request->email);

        return response()->json([
            'activity' => $activity
        ]);
    }

    public function getRecentActivity(Request $request){
        $activity = Activity::all();

        return response()->json([
            'activity' => $activity
        ]);
    }
}


