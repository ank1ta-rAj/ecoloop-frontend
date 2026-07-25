import { Bell, Search, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between mb-8"
    >
      <div>
        <h1 className="text-5xl font-black bg-gradient-to-r from-white via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
          EcoLoop AI
        </h1>

        <p className="text-slate-400 mt-2 text-lg">
          Enterprise Sustainability Intelligence Platform
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <Search size={18} className="text-slate-400" />
          <input
            placeholder="Search machines, reports..."
            className="bg-transparent outline-none text-white placeholder:text-slate-500 w-48"
          />
        </div>

        <button className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
          <span className="font-semibold text-emerald-300">
            Factory Online
          </span>
        </div>

        <button className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <UserCircle2 size={26} />
        </button>

      </div>
    </motion.div>
  );
}