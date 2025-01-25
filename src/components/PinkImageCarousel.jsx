import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';
import img8 from '../img/8.png';
import img9 from '../img/9.png';
import img10 from '../img/10.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function PinkImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl bg-pink-100 shadow-xl">
      <div className="aspect-video relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="rounded-full bg-pink-200/70 text-pink-700 hover:bg-pink-300/70 hover:text-pink-800 p-2 transition-colors duration-300"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="rounded-full bg-pink-200/70 text-pink-700 hover:bg-pink-300/70 hover:text-pink-800 p-2 transition-colors duration-300"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-pink-500' : 'bg-pink-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
