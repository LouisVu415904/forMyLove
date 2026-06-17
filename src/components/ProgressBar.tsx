interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="progress">
      <div
        className="progress-fill"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}
