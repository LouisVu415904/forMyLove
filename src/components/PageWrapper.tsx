import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <motion.div
      className="page"
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -50,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="love-card">{children}</div>
    </motion.div>
  );
}
