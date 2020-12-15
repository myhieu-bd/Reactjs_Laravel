<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\loginRequest;
use App\Course;
use App\Post;
use App\User;
use App\Category;
class DashboardController extends Controller
{
    function index(){
        $courses= Course::all();
        $posts = Post:: all();
        $users= User:: all();
        $categories= Category::all();
   

        return view("admin.dashboard",["courses" => $courses,"posts" => $posts,"categories" => $categories , "users" => $users] );

    }
}