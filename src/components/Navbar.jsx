import { GraduationCap } from "lucide-react";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-amber-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-800 text-lg tracking-tight">
            Student Success Copilot
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
            <a href="#" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Help</a>
          </div>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
