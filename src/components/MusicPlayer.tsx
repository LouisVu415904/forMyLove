import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop src="/public/music/love.mp3" />

      <button
        onClick={toggle}
        style={{
          position: "fixed",
          top: 20,
          right: 20,

          width: 60,
          height: 60,

          borderRadius: "50%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: "28px",

          padding: 0,

          zIndex: 9999,
        }}
      >
        {playing ? "🎵" : "🔇"}
      </button>
    </>
  );
}
