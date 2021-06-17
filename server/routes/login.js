import express from "express";

import passport from "../passport.js";
import requireLogin from "../middlewares/requireLogin.js";

const router = express.Router();

// // Define routes.

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: "email,user_photos" })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/currentUser", requireLogin, (req, res) => {
  console.log("here");
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.send(req.user);
});

export default router;
