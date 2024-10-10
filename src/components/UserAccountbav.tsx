"use client"
import {signOut} from "next-auth/react"
import {Button , buttonVariants } from "@/components/ui/button";
const UserAccountbav = () => {
  return (
    <div>
       <Button onClick={()=>signOut({redirect:true,
        callbackUrl:`${window.location.origin}/sign-in`
       })}  variant='destructive' >Sign out</Button>
    </div>
  )
}

export default UserAccountbav
