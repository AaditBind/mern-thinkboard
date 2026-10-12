import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected succesfully");
  } catch (error) {
    console.error("Couldn't connect to mongodb", error);
    process.exit(1);
  }
};
