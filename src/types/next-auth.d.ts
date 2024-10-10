import NextAuth from "next-auth"
import internal from "stream"

declare module "next-auth" {
  interface User{
    username:string
  }
  interface Session {
    user:User & {
    username:String
    }

    token:{
      username:string  
    }
  }
}