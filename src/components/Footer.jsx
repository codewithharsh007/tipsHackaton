import { GraduationCap, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-amber-100 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>Student Success Copilot</span>
        </div>

        {/* Note */}
        <p className="text-xs text-gray-400 text-center">
          ⚠️ AI can be wrong — always verify important decisions.
        </p>

        {/* Credit */}
        <p className="text-xs text-gray-400 flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-amber-400 fill-amber-400" /> for students
        </p>
      </div>
    </footer>
  );
}
