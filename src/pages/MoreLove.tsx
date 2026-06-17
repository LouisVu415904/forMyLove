import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

const texts = [
  "Không",
  "Ủa 😳",
  "Khoan đã 🤨",
  "Suy nghĩ lại đi 🥺",
  "Chắc chưa 😏",
  "Anh thấy em muốn bấm Có á 💙",
];

export default function MoreLove({ next }: Props) {
  const [yesSize, setYesSize] = useState(1);
  const [index, setIndex] = useState(0);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveNoButton = () => {
    setPosition({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 250,
    });

    setYesSize((s) => s + 0.15);

    setIndex((i) => {
      if (i >= texts.length - 1) return i;
      return i + 1;
    });
  };

  return (
    <PageWrapper>
      <h1>Em có muốn được anh thương nhiều hơn không? 💙</h1>

      <div className="more-love-buttons">
        <button
          onClick={next}
          style={{
            transform: `scale(${yesSize})`,
            transition: "0.25s",
          }}
        >
          Có 💖
        </button>

        <button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: "0.2s",
          }}
        >
          {texts[index]}
        </button>
      </div>
    </PageWrapper>
  );
}
