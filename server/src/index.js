//require("dotenv").config();

//const morgan = require("morgan");
//const exphbs = require("express-handlebars");
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
dotenv.config();

// HTTP Logger
//app.use(morgan("combined"));

// Template engine
//app.engine("handlebars", exphbs());
//app.set("view engine", "handlebars");

app.use("/posts", postRoutes);
app.use("/user", userRouter);

// app.get("/home", (req, res) => {
//   res.send("Hello World!");
// });

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gettingstarted.6hwmv.mongodb.net/Personal-Blog?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log("MongoDB connected!");
  } catch (error) {
    console.log("Error:");
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
