import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

interface WelcomeProps {
  next: () => void;
}

export default function Welcome({ next }: WelcomeProps) {
  return (
    <PageWrapper>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        style={{
          fontSize: "5rem",
          marginBottom: "20px",
        }}
      >
        💙
      </motion.div>

      <h1>Chào công chúa của anh ✨</h1>

      <p>Anh có chuẩn bị một thứ nhỏ nhỏ cho em.</p>

      <button onClick={next}>Em tò mò quá 👀</button>
    </PageWrapper>
  );
}
