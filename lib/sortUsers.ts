import { MongoDBUserModel } from "@/types";

export function sortUsers(users: MongoDBUserModel[], filter: string) {
  if (filter === 'none') {
    return users;
  } else {

    const category = filter.split('.')[0] === 'Birth Date' ? 'birth_date' : filter.split('.')[0].toLowerCase();
    const sortValue = filter.split('.')[1];

    const result = users.sort((userA: MongoDBUserModel, userB: MongoDBUserModel) => {
      const userField = category as keyof typeof userA;
      const valueA = filter !== 'birth_date' ? userA[userField] : parseInt(userA[userField].slice(0, 4));;
      const valueB = filter !== 'birth_date' ? userB[userField] : parseInt(userB[userField].slice(0, 4));

      if (sortValue === 'up') {
        return (valueA > valueB) ? 1 : ((valueA < valueB) ? -1 : 0)
      } else {
        return (valueA < valueB) ? 1 : ((valueA > valueB) ? -1 : 0)
      }
    });
    return result;
  }
};