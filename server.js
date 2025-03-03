import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

dotenv.config({ path: "./config/config.env" });
connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLAUDINARY_CLOUD_NAME,
  api_key: process.env.CLAUDINARY_API_KEY,
  api_secret: process.env.CLAUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
