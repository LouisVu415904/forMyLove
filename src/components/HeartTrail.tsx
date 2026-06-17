import { useEffect, useState } from "react";

type Heart = {
  id: number;
  x: number;
  y: number;
};

export default function HeartTrail() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    let id = 0;

    const move = (e: MouseEvent) => {
      const heart = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prev) => [...prev.slice(-10), heart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 1000);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            position: "fixed",
            left: heart.x,
            top: heart.y,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            animation: "heartFade 1s forwards",
            zIndex: 9999,
          }}
        >
          🐰
        </div>
      ))}
    </>
  );
}
