import Admins from "@/mongodb/models/admin.model";
import Users from "@/mongodb/models/user.model";
import { UserDataType } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export async function getUsersFromDB(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const data: UserDataType[] = await Users.find({});
    const count: number = await Users.countDocuments({});

    if (data && count) {
      res.status(200).json({ users: data, count });
    } else {
      res.status(404).json({
        status_code: 404,
        error_msg: 'Data not found',
        error_title: 'An error occured'
      });
    }
  } catch (error) {
    res.status(404).json({
      status_code: 404,
      error_msg: 'Data not found',
      error_title: 'Something went wrong',
      error
    });
  }
};

export async function createUserInDB(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const formData = req.body;
  try {
    const data: UserDataType = await Users.create(formData);
    if (data) {
      res.status(200).json({ users: data });
    } else {
      res.status(404).json({
        status_code: 404,
        error_msg: 'Data not found',
        error_title: 'An error occured'
      });
    }
  } catch (error) {
    res.status(404).json({
      status_code: 404,
      error_msg: 'Data not found',
      error_title: 'Something went wrong',
      error
    });
  }
};

export async function getUserFromDB(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { userID } = req.query;
  try {
    const data: UserDataType | null = await Users.findById(userID);
    if (data) {
      res.status(200).json({ user: data });
    } else {
      res.status(404).json({
        status_code: 404,
        error_msg: 'Data not found',
        error_title: 'An error occured'
      });
    }
  } catch (error) {
    res.status(404).json({
      status_code: 404,
      error_msg: 'Data not found',
      error_title: 'Something went wrong',
      error
    });
  }
};

export async function updateUserFromDB(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { userID } = req.query;
  const formData = req.body;
  try {
    const data: UserDataType | null = await Users.findByIdAndUpdate(userID, formData);
    if (data) {
      res.status(200).json({ updatedUser: data });
    } else {
      res.status(404).json({
        status_code: 404,
        error_msg: 'Data not found',
        error_title: 'An error occured'
      });
    }
  } catch (error) {
    res.status(404).json({
      status_code: 404,
      error_msg: 'Data not found',
      error_title: 'Something went wrong',
      error
    });
  }
};


export async function deleteUserFromDB(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { userID } = req.query;
  try {
    const data: UserDataType | null = await Users.findByIdAndDelete(userID);
    if (data) {
      res.status(200).json({ deletedUser: data });
    } else {
      res.status(404).json({
        status_code: 404,
        error_msg: 'Data not found',
        error_title: 'An error occured'
      });
    }
  } catch (error) {
    res.status(404).json({
      status_code: 404,
      error_msg: 'Data not found',
      error_title: 'Something went wrong',
      error
    });
  }
};
