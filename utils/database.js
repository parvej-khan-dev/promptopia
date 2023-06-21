import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strict", true);
  if (isConnected) {
    console.log("MongoDb is Already Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MONGO DB Connected");
  } catch (error) {
    console.log(error);
  }
};
