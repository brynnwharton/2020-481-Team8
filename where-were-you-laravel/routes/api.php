<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/reset', [AuthController::class, 'resetUser']);
Route::post('/postActivity', [AuthController::class, 'postActivity']);
Route::get('/getActivity', [AuthController::class, 'getActivity']);
Route::get('/getRecentActivity', [AuthController::class, 'getRecentActivity']);
  
// Route::group(['middleware' => 'auth.jwt'], function () {
 
//     Route::get('logout', 'AuthController@logout');
//     Route::get('user-info/{id}', 'AuthController@getUser')->where('id', '[0-9]+');
// });
