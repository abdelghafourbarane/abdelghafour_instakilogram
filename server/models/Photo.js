import mongoose from "mongoose";

const photoSchema = mongoose.Schema({
  content: {
    type: String,
    content: "",
  },
  published_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  photo_url: String,
  liked_by: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    default: [],
  },
  comments: {
    type: [
      {
        content: String,
        commented_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        commented_at: {
          type: Date,
          default: new Date(),
        },
      },
    ],
    default: [],
  },
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
