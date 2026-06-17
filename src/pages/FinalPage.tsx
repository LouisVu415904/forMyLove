import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import PageWrapper from "../components/PageWrapper";
interface Props {
  next: () => void;
}
export default function FinalPage({ next }: Props) {
  const celebrate = () => {
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  return (
    <PageWrapper>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
      >
        <h1 className="final-title">
          <span>💙</span>
          <span>Vợ iu Quỳnh Như ơi</span>
          <span>💙</span>
        </h1>
      </motion.div>

      <p>Anh thương em.</p>

      <p>Anh nhớ em.</p>

      <p>Và website này được tạo ra...</p>

      <h2>Chỉ để em cười một chút hôm nay ✨</h2>

      <button
        onClick={celebrate}
        style={{
          marginTop: "20px",
          marginRight: "12px",
        }}
      >
        Ôm anh một cái 🤗
      </button>
      <button
        style={{
          marginTop: 16,
          marginLeft: 12,
        }}
        onClick={next}
      >
        Em còn muốn biết bí mật không? 👀
      </button>
    </PageWrapper>
  );
}
