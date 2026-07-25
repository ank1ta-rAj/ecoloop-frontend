import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f766e_0%,#020617_55%,#000000_100%)]" />

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-emerald-500/25 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
        className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-green-500/20 blur-[140px]"
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              -50,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
        />
      ))}

    </div>
  );
}