import UserInfoBlock from "@/components/_userPage/UserInfoBlock";
import { useGetSingleUser } from "@/hooks";
import { getUser } from "@/lib/apiHelpers";
import { MongoDBUserModel } from "@/types";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import AuthProvider from "@/components/_utils/AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Header } from "@/components";


const UserPage = ({ userData }: { userData: { user: MongoDBUserModel } }) => {

  const { data: userInfo, isFetching, isLoading, isError, isSuccess } = useGetSingleUser(userData, userData.user._id);
  const session = useSession();
  return (
    <>
      <Header />
      {
        isSuccess && <UserInfoBlock user={userInfo.user} />
      }
    </>
  )
};
export default UserPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { userID } = context.query;
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  if (userID && !(userID instanceof Array)) {
    const userData = await getUser(userID);
    return {
      props: {
        userData,
        session,
      }
    }
  } else {
    return {
      notFound: true
    }
  }
};