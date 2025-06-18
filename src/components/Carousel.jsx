import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import driveplanimg from "../../img/driveplan1.png";
import driveplanimg2 from "../../img/driveplan2.png";
import website from "../../img/website.png";


const images = [
  driveplanimg,
  driveplanimg2,
  website
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current}`}
          initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full border-2 transition ${
              current === index
                ? "bg-purple-400 border-purple-400"
                : "border-white/50 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
