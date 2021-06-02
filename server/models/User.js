import mongoose from "mongoose";

import Photo from "./Photo.js";

const userSchema = mongoose.Schema({
  username: String,
  profilePhoto: Photo,
  firstName: String,
  lastName: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
