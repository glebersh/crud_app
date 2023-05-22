import { connectToMongoDB } from "@/mongodb/helpers/connectToMongoDB";
import Admins from "@/mongodb/models/admin.model";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  connectToMongoDB().catch((err) => {
    res.status(405).json({
      status_code: 405,
      error_msg: 'An error occured',
      error_title: 'Something went wrong',
      ...err
    });
  });

  if (method === 'POST') {
    if (!req.body) {
      return res.status(404).json({
        status_code: 404,
        error_msg: 'No data provided for sign up',
        error_title: 'Please fill up the registration form',
      });
    }

    const { name, email, password, image } = req.body;
    const isAdminExist = await Admins.findOne({ email });

    if (isAdminExist) {
      return res.status(422).json({ message: 'User is already exist' });
    } else {
      const newData = await Admins.create({ name, email, password: await hash(password, 12), image });
      return res.status(200).json({ status: 200, message: 'Admin successfully created', data: newData });
    }
  } else {
    res.status(405).json({
      status_code: 405,
      error_msg: 'Required method is not allowed',
      error_title: 'An error occured'
    });
  }
};