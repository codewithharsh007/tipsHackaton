import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "./mongodb";
import User from "./models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // Email + Password login
    Credentials({
      name: "credentials",
      credentials: {
        email:    { label: "Email",    type: "email"    },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user || !user.password) return null;
        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;
        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),

    // Guest login — no email/password needed
    Credentials({
      id: "guest",
      name: "Guest",
      credentials: {},
      async authorize() {
        await connectDB();
        const guest = await User.create({
          name: `Guest_${Date.now()}`,
          isGuest: true,
        });
        return { id: guest._id.toString(), name: guest.name, isGuest: true };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.isGuest = token.isGuest || false;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.isGuest = user.isGuest || false;
      return token;
    },
  },

  pages: {
    signIn: "/login",
  },

  session: { strategy: "jwt" },
});
