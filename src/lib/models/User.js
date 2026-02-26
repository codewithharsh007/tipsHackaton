import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, unique: true, sparse: true },
  password: { type: String }, // null for Google/Guest
  image:    { type: String },
  isGuest:  { type: Boolean, default: false },
  createdAt:{ type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
