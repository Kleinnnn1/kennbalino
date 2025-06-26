import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import kennbalino from "../../assets/images/kennbalino_logo_transparent.png";
import netflixSound from "../../assets/sounds/netflix.mp3";

function Landpage() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(netflixSound));

  // Auto "click" after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setClicked(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle audio play and redirect
  useEffect(() => {
    if (clicked) {
      audioRef.current.play();

      setTimeout(() => {
        navigate("/browse");
      }, 1000); // Delay for animation/sound
    }
  }, [clicked, navigate]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black overflow-hidden">
      <img
        src={kennbalino}
        alt="KennBalino Logo"
        onClick={() => setClicked(true)}
        className={`w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[400px] object-contain cursor-pointer transition-all duration-700 ${
          clicked ? "scale-[3.5] opacity-0" : ""
        }`}
      />
    </div>
  );
}

export default Landpage;
