import { useState } from "react";
import axios from "axios";

import Background from "./components/Background";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KPI from "./components/KPI";
import PromptBox from "./components/PromptBox";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/ask`, {
        question,
      });

      const text = res.data.answer || "No response.";

      let i = 0;
      let current = "";

      const timer = setInterval(() => {
        if (i < text.length) {
          current += text.charAt(i);
          setAnswer(current);
          i++;
        } else {
          clearInterval(timer);
          setLoading(false);
        }
      }, 10);
    } catch (error) {
      console.error(error);
      setAnswer("❌ Backend connection failed.");
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Background />

      <div className="relative z-10 flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-8">
          <Header />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Left Side */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <PromptBox
                question={question}
                setQuestion={setQuestion}
                askAI={askAI}
                loading={loading}
              />

              <ChatWindow
                      answer={answer}
                      loading={loading}
               />
            </div>

            {/* Right Side */}
            <div className="grid gap-6">
              <KPI
                title="Energy Today"
                value="1757"
                unit="kWh"
                color="from-emerald-400 to-green-600"
              />

              <KPI
                title="Efficiency"
                value="97"
                unit="%"
                color="from-cyan-400 to-blue-600"
              />

              <KPI
                title="CO₂ Saved"
                value="28"
                unit="%"
                color="from-lime-400 to-emerald-600"
              />

              <KPI
                title="Machines Online"
                value="24"
                unit="/24"
                color="from-violet-400 to-fuchsia-600"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}