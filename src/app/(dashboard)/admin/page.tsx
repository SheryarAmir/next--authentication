import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.username) {
    return (
      <h2 className="text-xl">
        Admin page - Welcome to the admin page, {session.user.username}!
      </h2>
    );
  }

  return <h3>Please sign in to see this admin page</h3>;
};

export default Page;
