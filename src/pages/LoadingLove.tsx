import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

export default function LoadingLove({ next }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 99) {
          return prev + 1;
        }

        return prev;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress !== 99) return;

    const timeout = setTimeout(() => {
      next();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [progress, next]);

  return (
    <PageWrapper>
      <h1>Đang tính toán số lần anh nghĩ về em... 💙</h1>

      <div
        style={{
          width: "100%",
          height: "18px",
          borderRadius: "999px",
          overflow: "hidden",
          background: "#ffffff80",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #A5D1FA, #CFE8FF)",
            transition: "0.1s",
          }}
        />
      </div>

      <h2>{progress}%</h2>

      {progress === 99 && (
        <>
          <h3>🤔 Đợi chút...</h3>

          <p>Hệ thống đang xử lý lượng dữ liệu quá lớn...</p>

          <p>Không thể đếm nổi số lần anh nghĩ về em 💙</p>
        </>
      )}
    </PageWrapper>
  );
}
