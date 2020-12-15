<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for($i=0; $i<10; $i++){
            DB::table('courses')->insert([
                "title"=>$faker->name,
                "category_id"=>$faker->numberBetween(1,5),
                "image"=>"/images/demo.png",
                "description"=>$faker->text,

            ]);
            }
    }
}
