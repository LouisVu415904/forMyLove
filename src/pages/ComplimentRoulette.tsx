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
  "Em không cần hoàn hảo, vì phiên bản hiện tại đã đủ làm anh mê rồi.",
  "Mỗi lần em vui, anh cũng thấy ngày của mình vui lây.",
  "Em có tài biến một cuộc nói chuyện bình thường thành điều anh nhớ cả ngày.",
  "Anh chưa tìm thấy nút tắt nhớ em, chắc nhà sản xuất quên làm.",
  "Em chính là kiểu người càng quen càng thấy đáng yêu.",
  "Nếu đáng yêu là một môn học, em chắc chắn được điểm tuyệt đối.",
  "Em làm anh hiểu cảm giác có một người để mong chờ là như thế nào.",
  "Có những ngày chẳng cần gì đặc biệt, chỉ cần được nói chuyện với em.",
  "Em là thông báo duy nhất mà anh luôn muốn thấy xuất hiện.",
  "Anh thích cách em làm mọi thứ xung quanh trở nên mềm mại hơn.",
  "Chắc em không biết đâu, nhưng em thường xuyên làm anh mỉm cười đó.",
  "Em có một sức hút rất kỳ lạ: càng nhìn càng thấy thương.",
  "Khoảnh khắc đẹp nhất trong ngày thường là lúc có em trong đó.",
  "Em giống như bài hát hay, nghe bao nhiêu lần cũng không thấy chán.",
  "Ở cạnh em, anh thấy mình may mắn hơn bình thường rất nhiều.",
  "Em là câu trả lời dễ thương nhất cho câu hỏi hôm nay có gì vui.",
];

export default function ComplimentRoulette({ next }: Props) {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * compliments.length));
  const [spins, setSpins] = useState(0);

  const unlocked = spins >= 4;
  const currentCompliment = useMemo(() => compliments[index], [index]);

  const spin = () => {
    setIndex((prev) => {
      const offset = 1 + Math.floor(Math.random() * (compliments.length - 1));
      return (prev + offset) % compliments.length;
    });
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
