import { getUsers } from '@/lib/apiHelpers';
import { filterUsers } from '@/lib/filterUsers';
import { sortUsers } from '@/lib/sortUsers';
import { MongoDBUserModel } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = (sortValue: string, searchQ: string) => {

  return useQuery<{ users: MongoDBUserModel[], count: number }>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
    select: (data) => {
      const resp = filterUsers(sortUsers([...data.users], sortValue), searchQ);
      return { users: resp, count: resp.length }
    }
  });
};