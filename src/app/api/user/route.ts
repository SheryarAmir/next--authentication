
import { NextResponse } from "next/server";
import {db }from "@/lib/db"
import {hash} from "bcrypt";
export async function POST(req:Request){
    try{

        const body=await req.json()
        const {email, password, username}=body
    
        // check if email already exists
        const existingUserByEmail=await db.user.findUnique({
            where: {email:email}
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null,message:"user with this email already exists"}, {status:409})
        }
         // check if Name already exists
         const existingUserByName=await db.user.findUnique({
            where: {username:username}
        });
        if(existingUserByName){
            return NextResponse.json({user:null,message:"user with this username already exists"}, {status:409})
        }

        const hashpassword=await hash(password, 10)
        const newUser=await db.user.create({
            data:{
username,
email,
password:hashpassword

            }
        });
        
        const {password:newUserPassword, ...rest}=newUser;

        return NextResponse.json({user: rest, message:"users created successfully"} ,{status:201})

    }catch(error){
return NextResponse.json({message:"something went wrong!"} ,{status:500})
    }

}