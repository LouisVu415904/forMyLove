/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Position {
  x: number;
  y: number;
}
interface Props {
  next: () => void;
}
export default function CutieQuiz({ next }: Props) {
  const [pos, setPos] = useState<Position>({
    x: 0,
    y: 0,
  });

  const moveButton = () => {
    setPos({
      x: Math.random() * 400 - 200,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <PageWrapper>
      <h1>Em có biết ai là người đáng yêu nhất thế giới không?</h1>

      <div className="buttons">
        <button onClick={next}>Em 🥰</button>

        <button
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          Không phải em
        </button>
      </div>
    </PageWrapper>
  );
}
