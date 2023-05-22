import { getUser } from "@/lib/apiHelpers";
import { MongoDBUserModel } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleUser = (userData: { user: MongoDBUserModel }, _id: string) => {

  return useQuery<{ user: MongoDBUserModel }>({
    queryKey: ['userPage', userData.user._id],
    queryFn: () => getUser(_id),
    initialData: userData,
    refetchOnWindowFocus: false
  });
};