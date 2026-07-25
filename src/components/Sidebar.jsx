import {
  LayoutDashboard,
  MessageCircle,
  Cpu,
  Leaf,
  BarChart3,
  Settings,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const items = [
    [LayoutDashboard, "Dashboard"],
    [MessageCircle, "AI Copilot"],
    [Cpu, "Factory"],
    [Leaf, "ESG"],
    [BarChart3, "Analytics"],
    [Settings, "Settings"],
  ];

  return (
    <aside className="w-72 border-r border-white/10 bg-white/5 backdrop-blur-3xl p-6 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 via-green-500 to-cyan-500 flex items-center justify-center shadow-[0_0_35px_rgba(34,197,94,.6)]">
            <Sparkles size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight">
              EcoLoop
            </h1>

            <p className="text-emerald-300 text-sm">
              Sustainability Intelligence
            </p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-3 flex-1">
        {items.map(([Icon, name], i) => (
          <motion.button
            key={name}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{
              x: 8,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-4 rounded-2xl px-5 py-4 transition-all ${
              i === 1
                ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-xl shadow-emerald-500/30"
                : "bg-white/5 hover:bg-white/10 border border-white/10"
            }`}
          >
            <Icon size={22} />
            <span className="font-medium text-lg">{name}</span>
          </motion.button>
        ))}
      </div>

      <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-5">
        <p className="text-sm text-gray-300">Factory Status</p>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

          <span className="font-semibold text-emerald-300">
            All Systems Operational
          </span>
        </div>
      </div>
    </aside>
  );
}