import { useMemo, useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

const compliments = [
  "Hôm nay em dễ thương hơn hôm qua một chút, mà hôm qua đã quá mức rồi.",
  "Em có kiểu đáng yêu rất riêng, không cần cố vẫn thấy thương.",
  "Nụ cười của em xứng đáng được lưu vào mục yêu thích.",
  "Anh nghĩ trái tim anh hơi thiên vị, vì lúc nào cũng chọn em.",
  "Em làm mấy điều nhỏ xíu cũng trở nên đáng nhớ.",
  "Nếu có bảng xếp hạng đáng yêu, em chắc chắn đứng đầu.",
  "Chỉ cần em xuất hiện là ngày tự nhiên sáng hơn một chút.",
  "Em là lý do rất hợp lý để anh cười một mình.",
];

export default function ComplimentRoulette({ next }: Props) {
  const [index, setIndex] = useState(0);
  const [spins, setSpins] = useState(0);

  const unlocked = spins >= 4;
  const currentCompliment = useMemo(() => compliments[index], [index]);

  const spin = () => {
    setIndex((prev) => (prev + 1 + Math.floor(Math.random() * 4)) % compliments.length);
    setSpins((prev) => prev + 1);
  };

  return (
    <PageWrapper>
      <h1>Máy phát lời khen v2 ✨</h1>
      <p>Bấm quay vài lần để nhận lời khen ngẫu nhiên nha.</p>

      <div className="compliment-machine">
        <div className="compliment-window">{currentCompliment}</div>
        <div className="compliment-dots">
          {Array.from({ length: 4 }, (_, dotIndex) => (
            <span
              key={dotIndex}
              className={dotIndex < Math.min(spins, 4) ? "is-active" : ""}
            />
          ))}
        </div>
      </div>

      <div className="fun-page-actions">
        <button onClick={spin}>Quay lời khen 💙</button>
        {unlocked && <button onClick={next}>Nhận đủ rồi, đi tiếp ✨</button>}
      </div>
    </PageWrapper>
  );
}
