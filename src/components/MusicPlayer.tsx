import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dragAreaRef = useRef<HTMLDivElement>(null);
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

      <div ref={dragAreaRef} className="music-player-drag-area">
        <motion.button
          type="button"
          className="music-player-button"
          drag
          dragConstraints={dragAreaRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.08 }}
          onClick={toggle}
          aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
          aria-pressed={playing}
          title={playing ? "Tắt nhạc" : "Bật nhạc"}
        >
          {playing ? <FaVolumeHigh /> : <FaVolumeXmark />}
        </motion.button>
      </div>
    </>
  );
}
