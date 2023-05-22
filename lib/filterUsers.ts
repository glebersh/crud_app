import { MongoDBUserModel } from "@/types";

export function filterUsers(users: MongoDBUserModel[], q: string): MongoDBUserModel[] {
  const data = users.filter((item: MongoDBUserModel) => {
    let res = [];
    for (let val of [...Object.values(item)]) {
      res.push(String(val).includes(q));
    }
    return res.includes(true);
  });

  return data;
};