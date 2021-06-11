import passport from "passport";
import passportFacebook from "passport-facebook";
import dotenv from "dotenv";

import User from "./models/User.js";
import { createUser } from "./utils/user.js";

dotenv.config();

const facebookStrategy = passportFacebook.Strategy;

// Configure Passport authenticated session persistence.
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

// add user to session
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    console.log("in the deserialize user function : ", user);
    done(err, user);
  });
});

// configure the Facebook strategy for use by Passport
passport.use(
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: "/login/facebook/callback",
      profileFields: [
        "id",
        "email",
        "displayName",
        "gender",
        "short_name",
        "first_name",
        "last_name",
        // "profile_pic",
      ],
    },
    (accessToken, refreshToken, profile, done) => {
      createUser(profile, done);
    }
  )
);

export default passport;
