import { deleteUserFromDB, getUserFromDB, updateUserFromDB } from "@/lib/controllers";
import { connectToMongoDB } from "@/mongodb/helpers/connectToMongoDB";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  connectToMongoDB().catch((err) => {
    res.status(405).json({
      status_code: 405,
      error_msg: 'An error occured',
      error_title: 'Something went wrong',
      ...err
    });
  });

  switch (method) {
    case 'GET': {
      getUserFromDB(req, res);
      break;
    }
    case 'PUT': {
      updateUserFromDB(req, res);
      break;
    }
    case 'DELETE': {
      deleteUserFromDB(req, res);
      break;
    }
    default: {
      res.status(405).json({
        status_code: 405,
        error_msg: 'Required method is not allowed',
        error_title: 'An error occured'
      });
    }
  }
};