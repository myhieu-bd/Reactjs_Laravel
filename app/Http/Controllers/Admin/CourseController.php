<?php
namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\DB;
use App\Category;
use App\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CourseController extends Controller{
        function getByCateID($cate_id){
            $courses=Course::where('category_id', $cate_id)->get();
            return $courses;
        }
        public function detail($id){
            $courses=Course::find($id);
            return $courses;
        }
        public function getAllCourses(){
            $courses= Course::orderBy('created_at','desc')->get();
            return $courses;
        }
           public function store(Request $request){
            $request->validate([
                'title' => 'required|max:255',
                'category_id' => 'required',
                'image' => 'required',
                'video' => 'required',
                'description' => 'required'
            ]);
            $image= $request->file("image")-> store("public");
            $title=$request->title;  
            $category_id=$request->category;
            $oldprice=$request->oldprice;
            $newprice=$request->newprice;
            $description=$request->description;
      
            $course= new Course;
            $course->title= $title;
            $course->category_id= $category_id;
            $course->image= 'storage/'.$image;
            $course->description= $description;
            $course->save(); 
            return redirect("admin/dashboard");
    
        }
    
        public function edit($id)
        {
            $categories= Category::all();
            $course= Course::find($id);
          return view("admin.course.edit", ["course"=> $course,"categories" => $categories]);
        }
    
       
        public function update(Request $request, $id)
        {

            $course =Course::find($id);
            $image= $request-> file("image");
            if($image==null){
                $newimage= $course->image;
            }
            else {
                $newimage= $image->store("public");
                $newimage= '/storage/'.$newimage;
            }
          
            $title=$request->title;  
            $category_id=$request->category;
            $description=$request->description;
            DB::table("courses")->where("id", $id)->update(
                ["title" =>  $title,  "image"=> $newimage, "category_id"=> $category_id,"description"=> $description]);
             return redirect("admin/dashboard");
            
        }
    
    
        public function destroy($id)
        {
            DB::table("courses")->where("id" ,"=", $id)->delete();
             return redirect("admin/dashboard");
        }

        function create(){
            $categories= Category::all();
            return view("admin.course.create", ["categories" => $categories]);
        }
        
    
}
