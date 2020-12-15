<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
class CategoryController extends Controller
{
    function index(){
        $categories=Category:: all();
        return $categories;
    }
    function getCate($id){
        $category= Category::find($id);
        return $category;
    }
           public function store(Request $request){
            $request->validate([
                'title' => 'required|max:255',
                'image' => 'required',
                'description' => 'required'
            ]);
            $image= $request->file("image")-> store("public");
            $title=$request->title;  
            $description=$request->description;
      
            $category= new Category;
            $category->title= $title;
            $category->image= '/storage/'.$image;
            $category->description= $description;
            $category->save(); 

            return redirect("admin/dashboard");
    
        }

         public function edit($id)
        {
            $category= Category::find($id);
          return view("admin.category.edit", ["category" => $category]);
        }

        public function update(Request $request, $id)
        {

            $category =Category::find($id);
            $image= $request-> file("image");
            if($image==null){
                $newimage= $category->image;
            }
            else {
                $newimage= $image->store("public");
                $newimage= '/storage/'.$newimage;
            }
          
            $title=$request->title;  
            $description=$request->description;
            DB::table("categories")->where("id", $id)->update(
                ["title" =>  $title,  "image"=> $newimage, "description"=> $description]);
             return redirect("admin/dashboard");
            
        }
    
    
        public function destroy($id)
        {
            DB::table("categories")->where("id" ,"=", $id)->delete();
             return redirect("admin/dashboard");
        }

        function create(){
           
            return view("admin.category.create");
        }
    
}
