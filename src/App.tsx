import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Welcome from "./pages/Welcome";
import CutieQuiz from "./pages/CutieQuiz";
import LoveMeter from "./pages/LoveMeter";
import FloatingHearts from "./components/FloatingHearts";
import BackgroundDecor from "./components/BackgroundDecor";
import MoreLove from "./pages/MoreLove";
import FinalPage from "./pages/FinalPage";
import ReasonsPage from "./pages/ReasonsPage";
import ProgressBar from "./components/ProgressBar";
import GalleryPage from "./pages/GalleryPage";
import LoadingLove from "./pages/LoadingLove";
import MusicPlayer from "./components/MusicPlayer";
import HeartTrail from "./components/HeartTrail";
import SecretEnding from "./pages/SecretEnding";
import HeartCatchGame from "./pages/HeartCatchGame";
import ComplimentRoulette from "./pages/ComplimentRoulette";
import SecretNoteUnlock from "./pages/SecretNoteUnlock";
function App() {
  const [page, setPage] = useState(0);

  const pages = [
    <Welcome next={() => setPage(1)} />,
    <CutieQuiz next={() => setPage(2)} />,
    <LoveMeter next={() => setPage(3)} />,
    <HeartCatchGame next={() => setPage(4)} />,
    <ComplimentRoulette next={() => setPage(5)} />,
    <MoreLove next={() => setPage(6)} />,
    <ReasonsPage next={() => setPage(7)} />,
    <SecretNoteUnlock next={() => setPage(8)} />,
    <GalleryPage next={() => setPage(9)} />,
    <LoadingLove next={() => setPage(10)} />,
    <FinalPage next={() => setPage(11)} />,
    <SecretEnding />,
  ];
  const totalPages = pages.length;
  return (
    <>
      <BackgroundDecor />
      <FloatingHearts />
      <HeartTrail />
      <MusicPlayer />

      <div
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(500px, 90vw)",
          zIndex: 999,
        }}
      >
        <ProgressBar current={page} total={totalPages} />
      </div>

      <AnimatePresence mode="wait">
        <div key={page}>{pages[page]}</div>
      </AnimatePresence>
    </>
  );
}

export default App;
