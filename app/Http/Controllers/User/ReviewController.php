<?php

namespace App\Http\Controllers\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Review;
use \Firebase\JWT\JWT;


class ReviewController extends Controller
{
    function getReviewByPostID($id){
        $reviews = Review::where('course_id', $id)->get();
        foreach($reviews as $review){
            $review->user;
        }
        return $reviews;
    }

    function addReview(Request $request){
        $token = $request->user_id;
        $key="abc";
        $data= JWT::decode($token, $key, array('HS256'));
        $course_id = $request->course_id;
        $content= $request->content;

        $review = new Review;
        $review->user_id=$data->user_id;
        $review->course_id=$course_id;
        $review->content=$content;
        $review->save();
    }
}


