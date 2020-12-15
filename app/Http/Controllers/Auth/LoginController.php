<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use \Firebase\JWT\JWT;
use App\User;

class LoginController extends Controller
{

  function logout(){
    Auth::logout();
    return redirect('/admin/dashboard');
  }
    function index(){
		return view("auth.login");
	}
  function login(Request $request){
    $userLogin=$request->only('username','password');
    $key="abc";
    
      if(Auth::attempt($userLogin)){
        $user=Auth::user();
        $userId= $user->id;
        $data =array(
          "user_id"=>$userId
        );
        $token = JWT::encode($data, $key);
        $responData=array("user_id"=>$token);
          return response()->json($responData,200);
           }
           else{
            $responData=array("user_id"=>null);
            return response()->json($responData,400);
         }  
   
   }
   function getProfile(){
     $token = request()->header("Authorization");
     $key="abc";
     $data= JWT::decode($token,$key, array('HS256'));

     $user=User::find($data->user_id);
     $responData=array("user"=>$user);
          return response()->json($responData,200);
   }

    function loginAdmin(Request $request){
      $request->validate([
        'username' => 'required|max:255',
        'password' => 'required',
      
    ]);
    $username=$request->username;
    $password=$request->password;
      if(Auth::attempt(["username"=>$username,"password"=>$password])){
        $user=Auth::user();

        if($user->role =="admin"){
          return redirect('/admin/dashboard');
       }
       if($user->role =="user"){
        return redirect('/admin/dashboard');
     }
       }
       else {
        return redirect()->route("auth.login",["error"=>"Invalid username or password!"]);
       }

}

}