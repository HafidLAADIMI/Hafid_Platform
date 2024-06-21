import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
