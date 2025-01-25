import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Heart, Star } from "lucide-react";

// Importa la imagen desde la carpeta local
import tuImagen from "../img/mylove.png";

export default function AnimatedPinkCard() {
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], { clamp: false });

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      setIsOpen(true);
    } else if (info.offset.x < -100) {
      setIsOpen(false);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, scale, rotate }}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="w-80 bg-pink-100 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl rounded-lg">
        <div className="bg-pink-200 rounded-t-lg p-4">
          <div className="text-pink-800 flex items-center justify-between font-bold">
            ¿Quieres saber que es lo mejor en mi vida?
            <Heart className="text-pink-500 w-6 h-6" />
          </div>
          <p className="text-pink-600">Desliza a la derecha para ver la magia</p>
        </div>
        <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100">
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <img
              src={tuImagen}
              alt="Tu imagen especial"
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
            <p className="text-pink-700 text-center">
              ¡Exacto!, Tu eres lo mejor que me ha pasado en la vida♡.
            </p>
            <Star className="text-blue-500 w-8 h-8" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
