<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            "username"=>"user",
            "password"=>Hash::make('user'),
            "role"=>"user",
            "fullname"=>'Thi Hoa',
            "email"=>"lehoa@gmail.com",
            "dOB"=>"2000/04/05",
            "address"=>"Da Nang",
            "avatar"=>"/images/demo.png"
            ]);

            DB::table('users')->insert([
                "username"=>"admin",
                "password"=>Hash::make('admin'),
                "role"=>"admin",
                "fullname"=>'My Hieu',
                "email"=>"myhieu@gmail.com",
                "dOB"=>"2000/04/07",
                "address"=>"Bimh Dinh",
                "avatar"=>"/images/demo.png"]);
    }
    
}
