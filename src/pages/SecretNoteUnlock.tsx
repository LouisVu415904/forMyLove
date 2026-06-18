import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

const secretNotes = [
  ["Anh", "thương", "em", "nhiều", "hơn", "em nghĩ"],
  ["Mỗi ngày", "có em", "đều là", "một ngày", "rất", "đặc biệt"],
  ["Nụ cười", "của em", "là điều", "anh muốn", "nhìn thấy", "mỗi ngày"],
  ["Anh muốn", "cùng em", "tạo thêm", "thật nhiều", "kỷ niệm", "đẹp"],
  ["Dù ngày", "có mệt", "chỉ cần", "gặp em", "anh lại", "thấy vui"],
  ["Em là", "người mà", "anh luôn", "muốn kể", "mọi chuyện", "trong ngày"],
  ["Cảm ơn", "em vì", "đã đến", "và làm", "thế giới anh", "dịu dàng hơn"],
  ["Anh không", "giỏi nói", "lời ngọt", "nhưng thật lòng", "anh rất", "thương em"],
  ["Ở cạnh", "em là", "một trong", "những điều", "anh thích", "nhất"],
  ["Bí mật", "nhỏ này", "chỉ muốn", "nói rằng", "em rất", "quan trọng"],
];

export default function SecretNoteUnlock({ next }: Props) {
  const [opened, setOpened] = useState<number[]>([]);
  const [notes] = useState(
    () => secretNotes[Math.floor(Math.random() * secretNotes.length)],
  );

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
              key={`${note}-${index}`}
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
          <h2>{notes.join(" ")} 💙</h2>
          <button onClick={next}>Cất lời nhắn vào tim ✨</button>
        </>
      )}
    </PageWrapper>
  );
}
