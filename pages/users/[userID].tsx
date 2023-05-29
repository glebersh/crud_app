import UserInfoBlock from "@/components/_userPage/UserInfoBlock";
import { useGetSingleUser } from "@/hooks";
import { getUser } from "@/lib/apiHelpers";
import { MongoDBUserModel } from "@/types";
import { GetServerSidePropsContext } from "next";
import { Header } from "@/components";
import AuthProvider from "@/components/_utils/AuthProvider/";


const UserPage = ({ userData }: { userData: { user: MongoDBUserModel } }) => {
  const { data: userInfo, isFetching, isLoading, isError, isSuccess } = useGetSingleUser(userData, userData.user._id);

  return (
    <AuthProvider>
      <Header />
      {
        isSuccess && <UserInfoBlock user={userInfo.user} />
      }
    </AuthProvider>
  )
};
export default UserPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { userID } = context.query;

  if (userID && !(userID instanceof Array)) {
    const userData = await getUser(userID);
    return {
      props: {
        userData
      }
    }
  } else {
    return {
      notFound: true
    }
  }
};