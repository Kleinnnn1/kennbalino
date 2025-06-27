import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function BoxItem({ image, label, to, delay = 0 }) {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className="relative w-[220px] h-[180px] min-w-[220px] min-h-[180px] rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.6)]"
      style={{
        backgroundImage: isImageLoaded ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1c1c1c", // fallback background
      }}
    >
      {/* Spinner Overlay */}
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Invisible image to track loading */}
      <img
        src={image}
        alt={label}
        onLoad={() => setIsImageLoaded(true)}
        className="hidden"
      />

      {/* Overlay & Label */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white font-bold text-base text-center">{label}</h3>
      </div>
    </motion.div>
  );
}

export default BoxItem;
