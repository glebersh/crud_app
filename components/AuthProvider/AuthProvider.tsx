import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useSession } from 'next-auth/react';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === 'unauthenticated') {
      router.push('/');
    }
  }, [session.status]);


  return (
    <>
      {
        session.status === 'authenticated' && children
      }
    </>
  )
};
export default AuthProvider;