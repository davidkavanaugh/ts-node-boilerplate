import mongoose from "mongoose";

export const init = () => {
  if(!process.env.DB_URI) {
    console.log("visit www.mongodb.com/atlas to create a cloud-hosted database and obtain a conneciton string")
  } else {
    mongoose.connect(process.env.DB_URI as string);
    const db = mongoose.connection;
    db.on("error", (err) => {
      console.log(err.message);
    });
    db.once("open", () => {
      console.log("succefully connected to mongodb");
    });
  }
};
