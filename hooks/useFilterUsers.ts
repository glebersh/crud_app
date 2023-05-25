import { MongoDBUserModel } from "@/types";

export const useFilterUsers = () => {

  return (data: MongoDBUserModel[], filters: { salary: number, sex: string, status: string }) => {
    const filterByStatus = (data: MongoDBUserModel[], value: string) => data.filter((user: MongoDBUserModel) => user.status === value);
    const filterBySalary = (data: MongoDBUserModel[], value: number) => data.filter((user: MongoDBUserModel) => parseInt(user.salary) > value);
    const filterBySex = (data: MongoDBUserModel[], value: string) => data.filter((user: MongoDBUserModel) => user.sex === value);

    let result = data;
    if (filters.status) result = filterByStatus(result, filters.status)

    if (filters.sex) result = filterBySex(result, filters.sex);

    if (filters.salary) result = filterBySalary(result, filters.salary);

    return result;
  };
};