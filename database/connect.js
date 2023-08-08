import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Connect DB ok");
  } catch (error) {
    console.log("Error de conexion a mongodb:" + error);
  }
};

export default connectDB;
