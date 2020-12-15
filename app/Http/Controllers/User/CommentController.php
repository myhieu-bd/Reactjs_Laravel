<?php

namespace App\Http\Controllers\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Comment;
use \Firebase\JWT\JWT;
class CommentController extends Controller
{
    function getCommentByPostID($id){
        $comments = Comment::where('post_id', $id)->get();
        foreach($comments as $comment){
            $comment->user;
        }
        return $comments;
    }

    function getNewComment($id){
        $comments = Comment::orderBy('created_at', 'desc')->where('post_id', $id)->take(1)->get();
        foreach($comments as $comment){
            $comment->user;
        }
        return $comments;
    }

    function addComment(Request $request){
        $token = $request->user_id;
        $key="abc";
        $data= JWT::decode($token, $key, array('HS256'));
        $post_id = $request->post_id;
        $content= $request->content;

        $comment = new Comment;
        $comment->user_id=$data->user_id;
        $comment->post_id=$post_id;
        $comment->content=$content;
        $comment->save();
    }
}
