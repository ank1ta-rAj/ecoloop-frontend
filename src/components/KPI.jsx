import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function KPI({
  title,
  value,
  unit = "",
  color = "from-emerald-400 to-cyan-500",
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl p-6"
    >
      <div
        className={`absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-20 blur-3xl`}
      />

      <div className="flex items-center justify-between">
        <p className="text-slate-400">{title}</p>

        <div className="rounded-xl bg-emerald-500/20 p-2">
          <TrendingUp size={18} className="text-emerald-300" />
        </div>
      </div>

      <div className="mt-6 flex items-end gap-2">
        <h2 className="text-5xl font-black text-white">
          {value}
        </h2>

        <span className="mb-2 text-slate-400">
          {unit}
        </span>
      </div>

      <div className="mt-6 h-2 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "88%" }}
          transition={{ duration: 1.5 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}