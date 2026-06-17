import { motion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: (i * 3.33) % 100,
  size: 16 + (i % 5) * 4,
  duration: 6 + (i % 7),
  delay: i * 0.3,
}));

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            position: "fixed",
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          💙✨
        </motion.div>
      ))}
    </>
  );
}
