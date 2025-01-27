<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/utilisateurs', [App\Http\Controllers\UtilisateurController::class, 'index']);
Route::post('/utilisateurs', [App\Http\Controllers\UtilisateurController::class,'store']);
Route::get('/utilisateurs/{id}', [App\Http\Controllers\UtilisateurController::class,'show']);
Route::put('/utilisateurs/{id}', [App\Http\Controllers\UtilisateurController::class,'update']);
Route::delete('/utilisateurs/{id}', [App\Http\Controllers\UtilisateurController::class,'delete']);