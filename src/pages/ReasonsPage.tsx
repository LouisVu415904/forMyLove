import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

const reasons = [
  "Vì em là em 🥰",
  "Vì em làm ngày bình thường trở nên vui hơn 💙",
  "Vì mỗi lần thấy tin nhắn của em anh đều muốn trả lời ngay 📱",
  "Vì em cười rất đẹp ✨",
  "Vì em đáng yêu mà đôi khi còn không tự biết 😳",
  "Vì em làm anh có thêm động lực mỗi ngày 🌷",
  "Vì em luôn xuất hiện trong suy nghĩ của anh một cách tự nhiên 💭",
  "Vì nói chuyện với em chưa bao giờ thấy chán 🫶",
  "Vì em khiến những chuyện nhỏ nhặt cũng trở nên đặc biệt 🌈",
  "Vì em là người anh muốn kể cho nghe mọi chuyện xảy ra trong ngày 📝",
  "Vì em có những nét rất riêng mà không ai thay thế được 💎",
  "Vì em làm anh cười nhiều hơn 😆",
  "Vì em dễ thương ngay cả lúc em không cố gắng dễ thương 🐣",
  "Vì em luôn là người anh muốn gặp sau một ngày dài 🤍",
  "Vì em khiến anh cảm thấy được quan tâm 🌸",
  "Vì em là một trong những điều tốt đẹp nhất đã đến với anh 🌟",
  "Vì ở cạnh em anh được là chính mình 🍀",
  "Vì em làm trái tim anh mềm hơn mỗi ngày 💕",
  "Vì em xuất hiện và cuộc sống anh thú vị hơn rất nhiều 🎈",
  "Vì thật lòng mà nói... anh thích mọi thứ thuộc về em 💙",
];

export default function ReasonsPage({ next }: Props) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === reasons.length - 1) {
      next();
      return;
    }

    setIndex((prev) => prev + 1);
  };

  return (
    <PageWrapper>
      <h1>vô vàn lý do anh thích em 💙</h1>

      <h2>{reasons[index]}</h2>

      <button onClick={handleNext}>Lý do tiếp theo →</button>

      {index === reasons.length - 1 && (
        <p>Thật ra anh không cần 100 lý do. Chỉ cần em là đủ 🥺</p>
      )}
    </PageWrapper>
  );
}
