import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function PastelPinkStickerHeading({ text }) {
  return (
    <div className="relative inline-block">
      {/* Texto principal con animación */}
      <motion.h1
        className="font-bold text-2xl sm:text-3xl text-pink-600 bg-pink-200
                   py-1 px-3 rounded-lg shadow-lg transform -rotate-2
                   border-2 border-pink-300 relative z-10"
        style={{
          textShadow: '2px 2px 4px rgba(255, 192, 203, 0.5)',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {text}
      </motion.h1>

      {/* Efecto de brillo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                   opacity-0 rounded-lg"
        animate={{
          opacity: [0, 0.5, 0],
          x: ['-150%', '150%', '150%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
          repeatDelay: 2, // Retraso entre brillos
        }}
      />

      {/* Fondo estático debajo del texto */}
      <div
        className="absolute inset-0 bg-pink-100 transform rotate-2 rounded-lg -z-10"
      />
    </div>
  );
}

// Validación de las props
PastelPinkStickerHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
