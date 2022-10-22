import { connect } from "mongoose";

export const ConnectDB = async () => {
  const connURI = process.env.MONGODB_URI as string;
  const conn = await connect(connURI, {
    keepAlive: true,
  });
  try {
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
