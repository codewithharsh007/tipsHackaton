import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  role: { type: String, enum: ["user", "ai"] },
  text: { type: String },
  type: { type: String, default: "plain" },
  data: { type: mongoose.Schema.Types.Mixed },
});

const ChatSchema = new mongoose.Schema({
  userId:    { type: String, required: true },
  mode:      { type: String, enum: ["mentor", "counselor", "senior"] },
  title:     { type: String }, // first user message as title
  messages:  [MessageSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
