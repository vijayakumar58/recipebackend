import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
import { userRouter } from './routes/user.js';
import { recipesRouter } from './routes/recipes.js'
const URL = process.env.DB

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(process.env.PORT || 3000, () => console.log("Server started"));