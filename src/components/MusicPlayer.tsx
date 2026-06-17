import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const musicSrc = `${import.meta.env.BASE_URL}music/love.mp3`;

  const toggle = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Could not play background music:", error);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src={musicSrc} />

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
