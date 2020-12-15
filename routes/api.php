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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/auth/login', "Auth\LoginController@getProfile");
Route::post('/auth/login', "Auth\LoginController@login");

Route::post('/auth/register', "Auth\RegisterController@register");
Route::get('/category/{id}', "Admin\CategoryController@getCate");

Route::get('/categories', "Admin\CategoryController@index");

Route::get('/post/{id}', "User\PostController@detail");
Route::get('/post/user/{id}', "User\PostController@getPostUser");
Route::get('/posts', "User\PostController@getAllPost");
Route::get('/user/posts', "User\PostController@getPostsByUserID");
Route::post('/addPost', "User\PostController@addPost");
Route::delete('/delete/post/{id}', "User\PostController@delete");
Route::get('/edit/post/{id}', "User\PostController@getPost");
Route::post('/update/post/{id}', "User\PostController@update");

Route::get('/course/{id}', "Admin\CourseController@detail");
Route::get('/cate/courses/{cate_id}', "Admin\CourseController@getByCateID");
Route::get('/view/courses', "Admin\CourseController@getAllCourses");

Route::get('/post/lastcomment/{id}', "User\CommentController@getNewComment");
Route::post('/user/addComment', "User\CommentController@addComment");
Route::get('/post/comment/{id}', "User\CommentController@getCommentByPostID");

Route::post('/user/addReview', "User\ReviewController@addReview");
Route::get('/course/review/{id}', "User\ReviewController@getReviewByPostID");

Route::post('/update/account', "Auth\RegisterController@update");