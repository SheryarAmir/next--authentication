import {FC , ReactNode} from "react"

interface AuthLayoutProps{
    children: React.ReactNode;
}


const AuthLayout:FC <AuthLayoutProps> = ({children}) => {
  return (
    <div className=" bg-slate-300 p-10 borded  rounded w-[22%]">
  {children}
    </div>
  )
}

export default AuthLayout
