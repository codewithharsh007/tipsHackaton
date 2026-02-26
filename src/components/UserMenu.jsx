"use client";
import { useSession, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function UserMenu() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {session.user.image ? (
          <img src={session.user.image} className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-sm font-bold">
            {session.user.name?.[0]?.toUpperCase()}
          </div>
        )}
        <span className="text-sm text-gray-600 hidden md:block">
          {session.user.isGuest ? "Guest" : session.user.name}
        </span>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-400 transition"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );
}
