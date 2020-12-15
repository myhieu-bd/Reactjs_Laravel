<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use \Firebase\JWT\JWT;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
class RegisterController extends Controller
{
    function register(Request $request){
        $fullname=$request->fullname;  
        $username=$request->username;
        $password=$request->password;
        $email=$request->email;
        $dOB=$request->dOB;
        $address=$request->address;
        $avatar=$request->avatar;
        $hashPass= Hash::make($password);
        $imagePath= $avatar->store("public");

        $user= new User;
        $user->username= $username;
        $user->password= $hashPass;
        $user->role= "user";
        $user->fullname= $fullname;
        $user->email= $email;
        $user->dOB= $dOB;
        $user->address= $address;
        $user->avatar= '/storage/'.$imagePath;
        $user->save();
        $responData=array("user"=>$user);
        return response()->json($responData,200);
    }

    function update(Request $request)
    { 
        $token = $request->user_id;
        $key="abc";
        echo "abc". $token;
        $data= JWT::decode($token, $key, array('HS256'));

        $fullname=$request->fullname;  
        $email=$request->email;
        $dOB=$request->dOB;
        $address=$request->address;

        $user= User::where('id',$data->user_id)->first();
        echo $user->avatar;
        $avatar = $request->avatar;
        if($avatar == "undefined"){
            $imagePath = $user->avatar;
        }
        else {
            $imagePath= $avatar->store("public");
            $imagePath = '/storage/'.$imagePath;
        }  
        DB::table("users")->where("id", $data->user_id)->update(
            ["fullname" =>  $fullname,  "avatar"=> $imagePath, "dOB"=>$dOB, "email"=>$email, "address"=>$address]);
            return response()->json(200);      

    }
}
