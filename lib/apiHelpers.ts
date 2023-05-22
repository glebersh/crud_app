import { MongoDBUserModel, UserDataType } from "@/types";
import ky from 'ky';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/`;

const api = ky.create({ prefixUrl: BASE_URL });

export async function getUsers(): Promise<{ users: MongoDBUserModel[], count: number }> {
  try {
    return await api.get(`api/users`).json();
  } catch (error) {
    throw new Error('Something went wrong, check server response');
  }
};

export async function getUser(userID: string): Promise<{ user: MongoDBUserModel }> {
  try {
    return await api.get(`api/users/${userID}`).json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export async function createUser(formData: UserDataType): Promise<UserDataType | Error> {
  try {
    return await api.post(`api/users`, { json: formData }).json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export async function updateUser(reqData: { userID: string, formData: UserDataType }): Promise<UserDataType | Error> {
  const { userID, formData } = reqData;
  try {
    return await api.put(`api/users/${userID}`, { json: formData }).json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export async function deleteUser(userID: string): Promise<UserDataType | Error> {
  try {
    return await api.delete(`api/users/${userID}`).json();
  } catch (error) {
    return Promise.reject(error);
  }
};