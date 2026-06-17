import { useEffect, useMemo, useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

interface Heart {
  id: number;
  x: number;
  y: number;
  kind: "love" | "trick";
}

const targetScore = 8;
const gameSeconds = 18;

const messages = [
  "Bắt tim nhanh ghê á",
  "Chuẩn rồi, tim này của em",
  "Thêm một tim nữa nè",
  "Sắp mở khóa phần đáng yêu rồi",
];

function createHeart(id: number): Heart {
  return {
    id,
    x: 8 + Math.random() * 84,
    y: 10 + Math.random() * 78,
    kind: Math.random() > 0.22 ? "love" : "trick",
  };
}

export default function HeartCatchGame({ next }: Props) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(gameSeconds);
  const [hearts, setHearts] = useState<Heart[]>(() =>
    Array.from({ length: 5 }, (_, index) => createHeart(index)),
  );
  const [combo, setCombo] = useState(0);
  const [started, setStarted] = useState(false);

  const completed = score >= targetScore;
  const ended = timeLeft <= 0 || completed;

  const message = useMemo(() => {
    if (completed) return "Nhiệm vụ hoàn thành. Tim đã thuộc về em 💙";
    if (timeLeft <= 0) return "Hết giờ rồi, thử lại thêm một lần nha";
    if (!started) return "Bấm bắt đầu rồi chạm vào tim xanh nha";
    return messages[Math.min(combo, messages.length - 1)];
  }, [combo, completed, started, timeLeft]);

  useEffect(() => {
    if (!started || ended) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [ended, started]);

  useEffect(() => {
    if (!started || ended) return;

    const spawner = setInterval(() => {
      setHearts((prev) => {
        const nextHearts = prev.slice(-5);
        return [...nextHearts, createHeart(Date.now())];
      });
    }, 900);

    return () => clearInterval(spawner);
  }, [ended, started]);

  const startGame = () => {
    setStarted(true);
    setScore(0);
    setCombo(0);
    setTimeLeft(gameSeconds);
    setHearts(Array.from({ length: 5 }, (_, index) => createHeart(index)));
  };

  const catchHeart = (heart: Heart) => {
    if (!started || ended) return;

    setHearts((prev) => prev.filter((item) => item.id !== heart.id));

    if (heart.kind === "trick") {
      setCombo(0);
      setScore((prev) => Math.max(0, prev - 1));
      return;
    }

    setCombo((prev) => prev + 1);
    setScore((prev) => Math.min(targetScore, prev + 1));
  };

  return (
    <PageWrapper>
      <h1>Mini game tình yêu v2 💙</h1>
      <h2>Bắt đủ {targetScore} trái tim để mở khóa bất ngờ</h2>

      <div className="heart-game-stats">
        <span>Tim: {score}/{targetScore}</span>
        <span>Combo: x{combo}</span>
        <span>{timeLeft}s</span>
      </div>

      <div className="heart-game-board" aria-label="Khu vực bắt tim">
        {!started && (
          <button className="heart-game-start" onClick={startGame}>
            Bắt đầu 💙
          </button>
        )}

        {started &&
          hearts.map((heart) => (
            <button
              key={heart.id}
              className={`heart-target heart-target-${heart.kind}`}
              onClick={() => catchHeart(heart)}
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
              }}
              aria-label={heart.kind === "love" ? "Bắt tim" : "Tim giả"}
            >
              {heart.kind === "love" ? "💙" : "♡"}
            </button>
          ))}
      </div>

      <p className="heart-game-message">{message}</p>

      {completed && <button onClick={next}>Mở khóa tiếp ✨</button>}

      {timeLeft <= 0 && !completed && (
        <button onClick={startGame}>Chơi lại nha 💙</button>
      )}
    </PageWrapper>
  );
}
