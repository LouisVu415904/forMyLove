import { useState } from "react";
import confetti from "canvas-confetti";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

interface DailyGift {
  date: string;
  boxIndex: number;
  reward: string;
}

const storageKey = "for-my-love-daily-gift";

// Sửa 20 phần quà bằng text của bạn tại đây.
const rewards = [
  "Một cái ôm thật lâu 🤗",
  "Một buổi đi ăn món em thích 🍜",
  "Một ngày được chiều hết mức 👑",
  "Một ly nước ngon do anh mời 🧋",
  "Một buổi hẹn bất ngờ ✨",
  "Một lần thắng mọi cuộc tranh luận 😌",
  "Một vé nghe em kể chuyện không giới hạn 🎫",
  "Một lời chúc ngủ ngon siêu đặc biệt 🌙",
  "Một tấm ảnh chung thật xinh 📸",
  "Một món ăn vặt em tự chọn 🍪",
  "Một buổi xem phim cùng nhau 🎬",
  "Một lần anh làm điều em yêu cầu 💙",
  "Một chuyến đi dạo không cần kế hoạch 🌷",
  "Một playlist được làm riêng cho em 🎧",
  "Một bức thư tay nhỏ xinh 💌",
  "Một buổi được massage body 🫶",
  "Một món quà bí mật chưa được bật mí 🎀",
  "Một ngày không được phép buồn ☀️",
  "Một lời khen bất ngờ vào lúc em không đoán được ✨",
  "Một điều ước nhỏ, anh sẽ cố gắng thực hiện 🌟",
];

function getLocalDateKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayGift(): DailyGift | null {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return null;

    const gift = JSON.parse(saved) as DailyGift;
    return gift.date === getLocalDateKey() ? gift : null;
  } catch {
    return null;
  }
}

function pickRandomReward() {
  return rewards[Math.floor(Math.random() * rewards.length)];
}

export default function MysteryGift({ next }: Props) {
  const [dailyGift, setDailyGift] = useState<DailyGift | null>(getTodayGift);

  const openGift = (boxIndex: number) => {
    if (dailyGift) return;

    const gift: DailyGift = {
      date: getLocalDateKey(),
      boxIndex,
      reward: pickRandomReward(),
    };

    localStorage.setItem(storageKey, JSON.stringify(gift));
    setDailyGift(gift);

    confetti({
      particleCount: 110,
      spread: 90,
      origin: { x: (boxIndex + 1) / 6, y: 0.65 },
      colors: ["#A5D1FA", "#FFD6E7", "#FFFFFF"],
    });
  };

  return (
    <PageWrapper>
      <h1>Quà bí mật mỗi ngày 🎁</h1>
      <p>
        {dailyGift
          ? "Hôm nay em đã chọn quà rồi. Ngày mai quay lại mở tiếp nha."
          : "Chọn một trong năm hộp. Mỗi ngày chỉ được mở một hộp thôi nha."}
      </p>

      <div className="gift-grid">
        {Array.from({ length: 5 }, (_, index) => {
          const isOpened = dailyGift?.boxIndex === index;
          const isLocked = dailyGift !== null && !isOpened;

          return (
            <button
              key={index}
              className={`gift-box ${isOpened ? "is-opened" : ""}`}
              onClick={() => openGift(index)}
              disabled={isLocked}
              aria-label={`Hộp quà ${index + 1}`}
            >
              <span className="gift-icon">
                {isOpened ? "💝" : isLocked ? "🔒" : "🎁"}
              </span>
              <span>{isOpened ? dailyGift.reward : `Hộp ${index + 1}`}</span>
            </button>
          );
        })}
      </div>

      {dailyGift && (
        <>
          <h2>Quà hôm nay của em: {dailyGift.reward}</h2>
          <button onClick={next}>Cất quà rồi đi tiếp ✨</button>
        </>
      )}
    </PageWrapper>
  );
}
