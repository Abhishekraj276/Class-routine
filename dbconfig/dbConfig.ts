import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Great! MongoDb is connected bro!");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connected ERROR. " + err);
      process.exit();
    });
  } catch (error) {
    console.log("ups! something went wrong!" + error);
  }
}
