import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

const notes = [
  "Anh",
  "thương",
  "em",
  "nhiều",
  "hơn",
  "em nghĩ",
];

export default function SecretNoteUnlock({ next }: Props) {
  const [opened, setOpened] = useState<number[]>([]);

  const completed = opened.length === notes.length;

  const openPiece = (index: number) => {
    setOpened((prev) => {
      if (prev.includes(index)) return prev;
      return [...prev, index];
    });
  };

  return (
    <PageWrapper>
      <h1>Mở khóa lời nhắn bí mật 💌</h1>
      <p>Chạm vào từng mảnh nhỏ để ghép câu nhắn của anh.</p>

      <div className="note-grid">
        {notes.map((note, index) => {
          const isOpened = opened.includes(index);

          return (
            <button
              key={note}
              className={`note-piece ${isOpened ? "is-opened" : ""}`}
              onClick={() => openPiece(index)}
            >
              {isOpened ? note : "?"}
            </button>
          );
        })}
      </div>

      {completed && (
        <>
          <h2>Anh thương em nhiều hơn em nghĩ 💙</h2>
          <button onClick={next}>Cất lời nhắn vào tim ✨</button>
        </>
      )}
    </PageWrapper>
  );
}
