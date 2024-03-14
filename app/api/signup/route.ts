import { connectToMongoDB } from "@/dbconfig/dbConfig";

import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';

connectToMongoDB();

//post route (create a new user inside the db)

export async function POST(request: NextRequest){
    try {
     const reqBody=   await request.json();

       const { first_name, last_name, email, mobile, password, gender } = reqBody;

       console.log(reqBody)
       const user = await User.findOne({ email });
       if (user) {
        return NextResponse.json(
            {
                error: 'This user already exists',
            },
            { status: 400 }
        );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create a new user
    const newUser = new User({
        first_name,
        last_name,
        email,
        mobile,
        password: hashedPassword,
        gender,
    });

    // save it inside the DB
    const savedUser = await newUser.save();

    return NextResponse.json({
        message: 'User created!',
        success: true,
        savedUser,
    });
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}