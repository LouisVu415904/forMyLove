import { motion } from "framer-motion";

import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";

import PageWrapper from "../components/PageWrapper";

interface Props {
  next: () => void;
}

const photos = [
  {
    image: photo1,
    caption: "Khoảnh khắc đáng yêu của bé 💙",
  },
  {
    image: photo2,
    caption: "Một ngày đi concert vuiii ✨",
  },
  {
    image: photo3,
    caption: "Hoài niệm hồi c3 quá đi 😳",
  },
  {
    image: photo4,
    caption: "Tấm này tràn đầy sự cute 🥰",
  },
  {
    image: photo5,
    caption: "Lưu vào bộ nhớ vĩnh viễn 📸",
  },
];

export default function GalleryPage({ next }: Props) {
  return (
    <PageWrapper>
      <h1>Những khoảnh khắc anh rất thích 💙</h1>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="polaroid"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
            }}
          >
            <img src={photo.image} alt={photo.caption} />

            <p>{photo.caption}</p>
          </motion.div>
        ))}
      </div>

      <button
        style={{
          marginTop: 30,
        }}
        onClick={next}
      >
        Tiếp tục 💖
      </button>
    </PageWrapper>
  );
}
