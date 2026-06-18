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
  "Vì giọng nói của em nghe một cái là anh thấy ngày dịu lại 🎧",
  "Vì em có cách quan tâm rất riêng làm anh nhớ mãi 🌙",
  "Vì ở cạnh em, mấy chuyện bình thường cũng thành kỷ niệm ✨",
  "Vì em vừa dễ thương vừa làm anh muốn cố gắng tốt hơn 🌱",
  "Vì nụ cười của em có khả năng chữa lành hơi bị mạnh 🫶",
  "Vì em làm anh mong chờ những cuộc trò chuyện nhỏ xíu mỗi ngày 💬",
  "Vì em đáng yêu ngay cả khi em đang giận dỗi một chút 😳",
  "Vì em khiến anh thấy thương một người có thể nhẹ nhàng đến vậy 🤍",
  "Vì chỉ cần nghĩ tới em thôi anh cũng tự nhiên mỉm cười 🌷",
  "Vì em là phần đặc biệt nhất trong ngày của anh 💎",
  "Vì em làm anh thấy những ngày bận rộn cũng đáng để cố gắng hơn 🌤️",
  "Vì anh thích cách em kể cả những câu chuyện nhỏ nhất trong ngày 📖",
  "Vì em khiến anh muốn lưu giữ thật nhiều khoảnh khắc cùng nhau 📸",
  "Vì mỗi lần em gọi tên anh, tự nhiên anh thấy vui hơn một chút 🎶",
  "Vì em là người anh luôn muốn chia sẻ cả niềm vui lẫn những lúc mệt mỏi 💌",
  "Vì anh thích cả những điều ngốc nghếch và đáng yêu của em 😌",
  "Vì em khiến hai chữ tương lai nghe có vẻ đáng mong chờ hơn 🌅",
  "Vì anh luôn tò mò muốn biết hôm nay của em đã diễn ra thế nào ☁️",
  "Vì chỉ cần em ở đó, mọi nơi đều có cảm giác gần gũi hơn 🏡",
  "Vì càng hiểu em, anh lại càng tìm thấy thêm lý do để thương em 💙",
];

const reasonCount = 15;

function getRandomReasons() {
  return [...reasons].sort(() => Math.random() - 0.5).slice(0, reasonCount);
}

export default function ReasonsPage({ next }: Props) {
  const [index, setIndex] = useState(0);
  const [selectedReasons] = useState(getRandomReasons);

  const handleNext = () => {
    if (index === selectedReasons.length - 1) {
      next();
      return;
    }

    setIndex((prev) => prev + 1);
  };

  return (
    <PageWrapper>
      <h1>vô vàn lý do anh thích em 💙</h1>

      <h2>{selectedReasons[index]}</h2>

      <button onClick={handleNext}>Lý do tiếp theo →</button>

      {index === selectedReasons.length - 1 && (
        <p>Thật ra anh không cần muôn vàn lý do. Chỉ cần em là đủ 🥺</p>
      )}
    </PageWrapper>
  );
}
