import mongoose from 'mongoose';

const connectionUrl = process.env.NEXT_PUBLIC_MONGO_DB_CONNECTION_URL;

export async function connectToMongoDB(): Promise<void | Error> {
  try {
    if (connectionUrl) {
      const { connection } = await mongoose.connect(connectionUrl);
      connection.readyState == 1 && console.log('Successfully connected to MongoDB');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};