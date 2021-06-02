import mongoose from "mongoose";

const photoSchema = mongoose.Schema({
  content: String,
  published_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  photo_url: String,
  liked_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      content: String,
      commented_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      commented_at: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
