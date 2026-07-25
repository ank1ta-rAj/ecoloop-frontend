import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PromptBox({
  question,
  setQuestion,
  askAI,
  loading,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl p-7 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
          <Sparkles size={20} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Factory Copilot
          </h2>

          <p className="text-slate-400 text-sm">
            Ask about machines, ESG, production, maintenance and energy.
          </p>
        </div>
      </div>

      <textarea
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  }}
  placeholder="Ask about production, energy, maintenance, ESG..."
  className="h-56 w-full resize-none rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6 text-lg text-white placeholder:text-slate-500 outline-none focus:border-emerald-400"
/>

      <div className="mt-6 flex items-center justify-between">

        <div className="text-sm text-slate-500">
          EcoLoop AI • Powered by Groq
        </div>

        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: .95 }}
  onClick={askAI}
  disabled={loading}
  className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 px-8 py-4 text-lg font-bold shadow-xl shadow-emerald-500/30"
>
  {loading ? (
    <>
      <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
      Thinking...
    </>
  ) : (
    <>
      <Send size={20} />
      Ask AI
    </>
  )}
</motion.button>

      </div>
    </motion.div>
  );
}