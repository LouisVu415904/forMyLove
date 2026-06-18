import { motion } from "framer-motion";

const floatingIcons = [
  "💙",
  "✨",
  "🩷",
  "🌷", // Thay icon thứ 4 tại đây
  "💌", // Thay icon thứ 5 tại đây
];

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  icon: floatingIcons[i % floatingIcons.length],
  x: 3 + ((i * 37) % 94),
  size: 16 + (i % 5) * 4,
  duration: 6 + (i % 7),
  delay: i * 0.3,
}));

export default function FloatingHearts() {
  return (
    <div className="floating-icons" aria-hidden="true">
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
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.icon}
        </motion.div>
      ))}
    </div>
  );
}
