<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            "title"=>"The Complete Course",
            "image"=>"/images/cate_1.png",
            "description"=>"Learn how to flawlessly apply every element of your makeup with our all-inclusive program. 
            Get instant access to over 90 guided video lessons when you enrol. No driving to workshops,
             no babysitters required, simply learn new makeup skills from the comfort of your home."

        ]);

        DB::table('categories')->insert([
            "title"=>"The Perfect Base",
            "image"=>"/images/cate_2.png",
            "description"=>"Find out how to create flawless looking skin with our complete guide to the perfect base.
                            Get instant access to over 50 professional makeup video lessons and learn techniques in seamless foundation application, 
                            modern contouring & highlighting, colour correction and much more.",

        ]);
        DB::table('categories')->insert([
            "title"=>"Complete Colour Theory For Makeup",
            "image"=>"/images/cate_3.png",
            "description"=>"Learn how to identify your own undertone and colouring, 
                                discover what colours actually suit you, and how to create flattering looks that will enhance your eye,
                                skin and hair colour. You'll also get access to our Concealing & Colour Correction lessons, where you'll learn how to use colour theory to effortlessly 
                                camouflage unwanted pigmentation and blemishes on your skin.",

        ]);
        DB::table('categories')->insert([
            "title"=>"Techniques in Eye, Lip & Brow Makeup",
            "image"=>"/images/cate_4.png",
            "description"=>"Learn modern makeup techniques for eyes, lips and brows in this fun and in-depth course. 
            Get instant access to our eyeshadow demos, eyeliner workshops, brow tutorials, 
            lash lessons and more when you enroll. You will learn how to create flattering makeup looks for your individual features.",

        ]);
        DB::table('categories')->insert([
            "title"=>"The Ultimate Bridal Makeup Course",
            "image"=>"/images/cate_5.png",
            "description"=>"Find out how to create flawless looking skin with our complete guide to the perfect base.
                            Get instant access to over 50 professional makeup video lessons and learn techniques in seamless foundation application, 
                            modern contouring & highlighting, colour correction and much more.",

        ]);
        
        }

    
}
