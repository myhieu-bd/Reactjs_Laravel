<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/logout', 'Auth\LoginController@logout');
Route::get('/auth/login',"Auth\LoginController@index")->name('auth.login');
Route::post('/auth/login',"Auth\LoginController@LoginAdmin");

Route::group(['middleware'=>"adminLogin"], function(){
    
Route::post('/admin/categories', "Admin\CategoryController@store");
Route::get('/admin/dashboard', "Admin\DashBoardController@index");

// COURSE
Route::get('/admin/courses/create', 'Admin\CourseController@create');
Route::post('/admin/courses', 'Admin\CourseController@store');
Route::delete('/admin/courses/{id}', 'Admin\CourseController@destroy');
Route::get('/admin/courses/{id}/edit', 'Admin\CourseController@edit');
Route::PATCH('/admin/courses/{id}', 'Admin\CourseController@update');

// CATEGORY
Route::get('/admin/categories/create', 'Admin\CategoryController@create');
Route::post('/admin/categories', 'Admin\CategoryController@store');
Route::delete('/admin/categories/{id}', 'Admin\CategoryController@destroy');
Route::get('/admin/categories/{id}/edit', 'Admin\CategoryController@edit');
Route::PATCH('/admin/categories/{id}', 'Admin\CategoryController@update');
});


