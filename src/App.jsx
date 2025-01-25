import AnimatedPinkCard from './components/AnimatedPinkCard';
import PinkImageCarousel from './components/PinkImageCarousel';
import PastelPinkStickerHeading from './components/PastelPinkStickerHeading';

// Importa el archivo de audio como una variable
import song from "../src/img/song.mp3"

// Importa imágenes
import image1 from '../src/img/image1.png';
import image2 from '../src/img/image2.png';
import image3 from '../src/img/image3.png';
import love1 from '../src/img/love1.png';
import love2 from '../src/img/love2.png';

import { useState } from 'react';

function App() {

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const showCustomPopup = (message, image) => {
    setPopupContent({ message, image });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };
  
  return (
    <>
      {/* Reproducción automática de música */}
      <audio src={song} autoPlay loop hidden />

      <div className="bg-gradient-to-br from-pink-100 to-blue-100 min-h-screen w-full flex flex-col items-center py-6 space-y-6 sm:space-y-8 lg:space-y-10">
        <PastelPinkStickerHeading text="Para mi reina Hermosa♡" />
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg lg:text-xl text-blue-400 whitespace-pre-line text-justify">
            Hola, mi niña, mi reina, mi cosita hermosa...
            Quería darte esta pequeña sorpresa: una carta de amor, pero escrita a mi manera, con mi toque especial. 
            Esta carta la he hecho con todo mi amor y dedicación, única y exclusivamente para ti. 
            Espero que la disfrutes tanto como yo disfruté creándola para ti. 
            Pero, antes de continuar, quería preguntarte algo muy importante...
          </p>
        </div>
        <AnimatedPinkCard />
        
        <div className="space-y-2 p-4">
          <PastelPinkStickerHeading text="¡Cosas que me encantan de ti!♡" />
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-900 p-3 rounded-lg shadow-md transform transition-all duration-500 ease-in-out animate-pulse"
            style={{ animationDelay: "0s" }}
          >
            <p className="text-sm font-semibold">Tus ojos</p>
          </div>
          <div
            className="bg-orange-100 border-l-4 border-orange-500 text-orange-900 p-3 rounded-lg shadow-md transform transition-all duration-500 ease-in-out animate-pulse"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-sm font-semibold">Tu pelo</p>
          </div>
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-3 rounded-lg shadow-md transform transition-all duration-500 ease-in-out animate-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm font-semibold">Tu sonrisa</p>
          </div>
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-900 p-3 rounded-lg shadow-md transform transition-all duration-500 ease-in-out animate-pulse"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-sm font-semibold">Tu forma de ser</p>
          </div>
          <div
            className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-3 rounded-lg shadow-md transform transition-all duration-500 ease-in-out animate-pulse"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-sm font-semibold">Tu creatividad</p>
          </div>
          <div
            className="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-900 p-3 rounded-lg shadow-md transform transition-all duration-500 ease-in-out animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-sm font-semibold">Tu cuerpo</p>
          </div>
          <div
            className="bg-purple-100 border-l-4 border-purple-500 text-purple-900 p-3 rounded-lg shadow-md transform transition-all duration-500 ease-in-out animate-pulse"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="text-sm font-semibold">Tu personalidad</p>
          </div>
        </div>

        <PastelPinkStickerHeading text="Nuestros mejores momentos." />
        <div className="mt-8 w-full flex justify-center">
          <PinkImageCarousel />
        </div>
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg lg:text-xl text-blue-400 whitespace-pre-line text-justify">
            <span className="inline-flex items-center">
              El tiempo pasa volando, ¿No lo crees? Míranos, se que solo ha pasado un mes y 9 días desde que nos conocimos,  
              y sé que cuando menos lo pensemos estaremos viviendo juntos y cumpliendo con nuestros objetivos. 
              <img src={image1} alt="Nuestro primer recuerdo" className="w-24 h-24 rounded-full ml-4 shadow-lg" />
            </span>
          </p>
        </div>
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg lg:text-xl text-blue-400 whitespace-pre-line text-justify">
            <span className="inline-flex items-center">
              El tiempo pasa volando porque, cuando menos lo pensé, te volviste lo más importante de mi vida.  
              Aquella chica de ojos bonitos, sonrisa encantadora y personalidad alocada que me enamoró,  
              es ahora la más importante en mi vida. 
              <img src={image2} alt="Un momento especial" className="w-24 h-24 rounded-full mr-4 shadow-lg" />
            </span>
          </p>
        </div>
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg lg:text-xl text-blue-400 whitespace-pre-line text-justify">
            <span className="inline-flex items-center">
              Quiero llevarte a conocer tantas cosas, divertirme contigo, comer cosas deliciosas, dormir juntos y acurrucados, y poder sentirte.  
              Te amo, mi niña hermosa. Este amor que siento y deseo es más real de lo que te imaginas. 
              <img src={image3} alt="Nuestro futuro juntos" className="w-24 h-24 rounded-full ml-4 shadow-lg" />
            </span>
          </p>
        </div>

        {/* Nueva sección: Propuesta */}
        <PastelPinkStickerHeading text="¿Quieres casarte conmigo?" />
        <div className="flex space-x-4 mt-6">
          <button
            className="bg-green-300 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-400 transition duration-300"
            onClick={() => showCustomPopup("¡Te amo! Sabía que dirías que sí, mi reina ❤️", love1)}
          >
            Sí, ¡ya mismo!
          </button>
          <button
            className="bg-red-300 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-400 transition duration-300"
            onClick={() => showCustomPopup("¿¡Jamás!? No puede ser... ❤️", love2)}
          >
            ¡¡Jamás!!
          </button>
        </div>
      </div>

      {showPopup && (
        <>
          {/* Bloqueo del scroll */}
          <style>{`body { overflow: hidden; }`}</style>

          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl p-6 text-center space-y-4 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closePopup}
              >
                &times;
              </button>
              <p className="text-lg font-semibold">{popupContent.message}</p>
              <img
                src={popupContent.image}
                alt="Popup content"
                className="w-32 h-32 rounded-full mx-auto shadow-md"
              />
            </div>
          </div>
        </>
      )}

    </>
  );
}

export default App;
