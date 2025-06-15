import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import kennbalino from "../../assets/images/kennbalino_logo_transparent.png";
import netflixSound from "../../assets/sounds/netflix.mp3"

function Landpage() {
  const [clicked, setClicked] = useState(false); // <-- state for clicked logo
  const navigate = useNavigate(); // <-- navigation
  const audioRef = useRef(new Audio(netflixSound)); // <-- Audio reference

  useEffect(() => {
    if (clicked) {
      audioRef.current.play(); // <-- Play the sound

      setTimeout(() => {
        navigate("/browse");
      }, 1000); // <-- wait for animation to finish
    }
  }, [clicked, navigate]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black overflow-hidden">
      <img
        src={kennbalino}
        alt="KennBalino Logo"
        onClick={() => setClicked(true)}
        className={`w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[400px] object-contain cursor-pointer transition-all duration-700 ${clicked ? "scale-[3.5] opacity-0" : ""
          }`}
      />

    </div>
  );
}

export default Landpage;