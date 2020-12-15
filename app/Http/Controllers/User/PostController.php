<?php

namespace App\Http\Controllers\User;
use Illuminate\Support\Facades\DB;
use App\Post;
use App\Comment;
use App\User;
use Illuminate\Http\Request;
use \Firebase\JWT\JWT;
use App\Http\Controllers\Controller;
class PostController extends Controller{

    public function detail($id){
        $posts=Post::find($id);
        return $posts;
    }

    function getPostUser($id){
        $post=Post::find($id);
        $user=User::find($post->user_id);
        return $user;
    }
        function getAllPost(){
            $posts=Post::orderBy('created_at','desc')->get();
            foreach($posts as $post){
                $post->user;
            }

            return $posts;
        }
        function getPostsByUserID(){
            $token = request()->header("Authorization");
            $key="abc";
            $data= JWT::decode($token,$key, array('HS256'));
            $posts= Post::where('user_id', $data->user_id)->get();
            $responData=array("posts"=>$posts);
            return response()->json($responData,200);
            return $posts;
        }

        function addPost(Request $request){
            $token = $request->user_id;
            $key="abc";
            $data= JWT::decode($token, $key, array('HS256'));


            $content=$request->content;
            $image=$request->image;
            $imagePath= $image->store("public");

            $post= new Post;
            $post->user_id= $data->user_id;
            $post->content= $content;
            $post->image= '/storage/'.$imagePath;
            $post->save();
            $responData=array("post"=>$post);
            return response()->json($responData,200);

        }
    

        public function delete($id){
            Comment::where('post_id', $id)->delete();
            Post::find($id)->delete();
            return response()->json(200);        
        }
    
        public function newPost(){
            $posts= Post::where('desc', 'created_at')->get();
            return $posts;
        }
         function getPost($id){
            $post= Post::where('id',$id)->first();
            return $post;
        }


         function update(Request $request,$id)
        {
            $post= Post::where('id',$id)->first();
            $content=$request->content;
            $image=$request->image;
            echo $post->image;
            if($image == "undefined"){
                $imagePath = $post->image;
            }
            else {
                $imagePath= $image->store("public");
                $imagePath = '/storage/'.$imagePath;
            }  
            DB::table("posts")->where("id", $id)->update(
                ["content" =>  $content,  "image"=> $imagePath]);
                return response()->json(200);      

        }
    

        //    public function store(Request $request){
        //     $request->validate([
        //         'title' => 'required|max:255',
        //         'category_id' => 'required',
        //         'image' => 'required',
        //         'video' => 'required',
        //         'description' => 'required'
        //     ]);
        //     $image= $request->file("image")-> store("public");
        //     $title=$request->title;  
        //     $category_id=$request->category;
        //     $oldprice=$request->oldprice;
        //     $newprice=$request->newprice;
        //     $description=$request->description;
      
        //     $post= new Post;
        //     $post->title= $title;
        //     $post->category_id= $category_id;
        //     $post->image= 'storage/'.$image;
        //     $post->old_price= $oldprice;
        //     $post->new_price= $newprice;
        //     $post->description= $description;
        //     $post->save(); 
        //     return redirect("admin/dashboard");
    
        // }
    
        // public function edit($id)
        // {
        //     $categories= Category::all();
        //     $post= Product::find($id);
        //   return view("admin.post.edit", ["post"=> $product,"categories" => $categories]);
        // }
    
       
       
    
        // public function destroy($id)
        // {
        //     DB::table("posts")->where("id" ,"=", $id)->delete();
        //      return redirect("admin/dashboard");
        // }

      
    
}
