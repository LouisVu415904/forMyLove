import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

export default function LoveMeter({ next }: Props) {
  const [value, setValue] = useState(0);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const steps = [0, 128, 356, 721, 998, 1000, 1001, 1002, 1003];

    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (index >= steps.length) {
        clearInterval(interval);

        setTimeout(() => {
          setOverflow(true);
        }, 500);

        return;
      }

      setValue(steps[index]);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <h1>Đang đo độ đáng yêu của em...</h1>

      {!overflow ? (
        <>
          <h1
            style={{
              fontSize: "4rem",
              marginTop: 30,
            }}
          >
            {value}%
          </h1>

          {value >= 1000 && <h2>⚠️ Hệ thống bắt đầu quá tải...</h2>}
        </>
      ) : (
        <>
          <h1
            style={{
              fontSize: "6rem",
              margin: "10px 0",
            }}
          >
            ∞
          </h1>

          <h2>Quá đáng yêu nên hệ thống bị lỗi 💙</h2>

          <button
            onClick={next}
            style={{
              marginTop: 24,
            }}
          >
            Tiếp tục 💙
          </button>
        </>
      )}
    </PageWrapper>
  );
}
