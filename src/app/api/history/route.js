import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Chat from "@/lib/models/Chat";

// GET — fetch last 10 chats for user
export async function GET() {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const chats = await Chat.find({ userId: session.user.id })
    .sort({ createdAt: -1 })
    .limit(10)
    .lean();

  return Response.json({ chats });
}

// POST — save a new chat session
export async function POST(req) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { mode, messages } = await req.json();

  await connectDB();

  const title = messages.find((m) => m.role === "user")?.text?.slice(0, 50) || "Chat";

  const chat = await Chat.create({
    userId: session.user.id,
    mode,
    title,
    messages,
  });

  return Response.json({ chat });
}
