import { Bot, Copy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function ChatWindow({ answer, loading }) {
  const copy = () => {
    if (!answer) return;
    navigator.clipboard.writeText(answer);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl p-8 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-4">

          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Bot size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              EcoLoop AI Response
            </h2>

            <p className="text-slate-400">
              Sustainability Intelligence Engine
            </p>
          </div>

        </div>

        <button
          onClick={copy}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
        >
          <Copy size={18} />
          Copy
        </button>

      </div>

      {loading ? (
  <div className="flex items-center gap-4 py-16">
    <div className="h-10 w-10 rounded-full border-4 border-emerald-400 border-t-transparent animate-spin"></div>

    <div>
      <h3 className="text-xl font-bold">
        EcoLoop AI is thinking...
      </h3>

      <p className="text-slate-400">
        Analysing factory data...
      </p>
    </div>
  </div>
) : answer ? (
        <div className="prose prose-invert max-w-none leading-8 text-slate-200">
          <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeHighlight]}
>
  {answer}
</ReactMarkdown>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">

          <CheckCircle2
            size={70}
            className="text-emerald-400 mb-5"
          />

          <h3 className="text-2xl font-bold">
            Ready to Assist
          </h3>

          <p className="mt-3 max-w-lg text-slate-400">
            Ask EcoLoop AI about production efficiency,
            predictive maintenance, ESG performance,
            machine failures or energy optimisation.
          </p>

        </div>
      )}
    </motion.div>
  );
}