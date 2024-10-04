
import {FC, ReactNode } from "react"
import { Button } from "./ui/button"

interface GoogleSinInButtonProps{
children : ReactNode;
}
const GoogleSinInButton:FC<GoogleSinInButtonProps> = ({children}) => {

    const loginWithGoogle=()=>{

        console.log("login with google")
    }
  return (
    <div>
      <Button onClick={loginWithGoogle} className="w-full">{children}</Button>
    </div>
  )
}

export default GoogleSinInButton
