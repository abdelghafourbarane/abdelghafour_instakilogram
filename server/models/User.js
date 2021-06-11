import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      default: "",
    },
    profilePhoto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Photo",
    },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    facebook_id: { type: String, default: "" },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // createdAt: {
    //   type: Date,
    //   default: new Date(),
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
