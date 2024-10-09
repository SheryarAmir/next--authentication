"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GoogleSinInButton from "../GoogleSinInButton";
import { useRouter } from "next/navigation";

const formSchema = z.object({
   email: z.string().min(2, "Email is require").email(" invalid Email"),
   password:z.string().min(6 , "psaaword must have six characters"),
   confirmpassword:z.string().min(6 , "psaaword  not match"),
   username:z.string().min(1, "username is require"),

})

.refine((data)=>data.password===data.confirmpassword,{
    path:['confirmpassword'],
    message:"password do not match"
})

const SignUpForm = () => {

const router=useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit =async  (values:z.infer<typeof formSchema>) => {
   
const response=await fetch('api/user',{
  method:"POST",
  headers:{
    'content-Type':'application/json'
  },
  body:JSON.stringify({
username:values.username,
email:values.email,
password:values.password,
  })

  })

  if(response.ok){
router.push('/sign-in')

  }
  else{
    console.error("Registration fail")
  }
  };

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">

<div className=" space-y-3  ">

<FormField 
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input  className=" bg-white" placeholder="Enter you name" {...field} />
                </FormControl>
                <FormDescription>
            
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className=" bg-white" placeholder="Email@example.com" {...field} />
                </FormControl>
                <FormDescription>
            
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" className=" bg-white" placeholder="enter you password" {...field} />
                </FormControl>
                <FormDescription>
                
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter password</FormLabel>
                <FormControl>
                  <Input type="password" className=" bg-white" placeholder="confirm password" {...field} />
                </FormControl>
                <FormDescription>
                
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <Button className=" w-full mt-1" type="submit">Submit</Button>
        </form>

        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">or
</div>
<GoogleSinInButton>Sign up with Google</GoogleSinInButton>
<p className="text-center text-sm text-gray-600 mt-2">
  If you don&apos;t have an account, please&nbsp;
  <Link className="text-blue-500 hover:underline" href="/sign-up">Sign in</Link>
</p>


      </Form>
    
  );
};

export default SignUpForm;
