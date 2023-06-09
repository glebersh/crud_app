import { getUsers } from '@/lib/apiHelpers';
import { filterUsers } from '@/lib/filterUsers';
import { sortUsers } from '@/lib/sortUsers';
import { mapFiltersSelector } from '@/store/selectors';
import { MongoDBUserModel } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from 'react-redux';

export const useGetUsers = (sortValue: string,
  searchQ: string,
  mapFilter: (data: MongoDBUserModel[],
    filters: { salary: number, gender: string, status: string }) => MongoDBUserModel[]) => {
  const mapFilters = useSelector(mapFiltersSelector);


  return useQuery<{ users: MongoDBUserModel[], count: number }>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
    select: (data) => {
      const resp = mapFilter(filterUsers(sortUsers([...data.users], sortValue), searchQ), mapFilters);
      return { users: resp, count: resp.length }
    }
  });
};