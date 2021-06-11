import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import photosRoutes from "./routes/photos.js";
import loginRoutes from "./routes/login.js";
import passport from "passport";

import dotenv from "dotenv";

import session from "express-session";

dotenv.config();

const CONNECTION_URL =
  "mongodb+srv://" +
  process.env.MONGODB_USERNAME +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@cluster0.qxhlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    app.use(express.json({ limit: "30mb", extended: true }));
    app.use(express.urlencoded({ limit: "30mb", extended: true }));

    app.use(
      session({
        secret: "hello world",
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: false,
        },
      })
    );

    // Initialize Passport and restore authentication state, if any ,
    // from the session

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(cors());

    app.use("/photos", photosRoutes);
    app.use("/login", loginRoutes);
    app.get("/", (req, res) => {
      console.log("req object : ", req.session);
      res.json({ user: req.user });
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`server runing on port ${PORT}`));
  })
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
