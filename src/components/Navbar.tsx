import Link from "next/link";
import {Button , buttonVariants } from "@/components/ui/button";
import { HandMetal } from "lucide-react";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

import UserAccountbav from "./UserAccountbav"
const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className=" bg-zinc-300 py-6 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className=" container mx-auto w-full flex justify-between items-center">
        <Link href="/" className={`${buttonVariants()} `}>
          <HandMetal />
        </Link>
       {session?.user?(
       <UserAccountbav/>
       ):( <Link
          href="/sign-in"
          className={`${buttonVariants()} bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
        >
          Sign in
        </Link>)}
      </div>
    </div>
  );
};

export default Navbar;
