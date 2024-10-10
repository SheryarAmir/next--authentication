import { buttonVariants } from "@/components/ui/button";
import Link from "next/link"
import User from "@/components/User"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function Home() {

  const session=await getServerSession(authOptions)
  return (

    <>
    <h1 className="text-5xl text-fuchsia-800 font-bold mb-9">Home </h1>

    <Link className={buttonVariants()} href="/admin"> Open admin page</Link>

    <h2>Client Session</h2>
    <User/>
    <h2>Server Session</h2>
    {JSON.stringify(session)}
    </>
  );
}
