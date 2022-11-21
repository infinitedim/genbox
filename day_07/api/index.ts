import cors from "cors";
import dotenv from "dotenv";
import type { Express } from "express";
import express from "express";
import mongoose from "mongoose";
import routes from "../src/routes/routes";

// running dotenv for environment
dotenv.config();

// variable declaration
const app: Express = express();
const MONGODB_URL = `mongodb+srv://infinitedim:${
  process.env.MONGO_SECRET_KEY as string
}@belajarjs.9ketzuo.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

// Connect to MongoDB
async function connectDB(): Promise<void> {
  mongoose.Promise = Promise;

  try {
    await mongoose.connect(MONGODB_URL);
    console.info("MongoDB Connected");
  } catch (error) {
    console.error(error);
  }
}

void connectDB();

export default app;
