import { useState } from "react";
import { motion } from "framer-motion";

function ProjectsBox({ image, index, children, link }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleMobileClick = () => {
    if (window.innerWidth < 768 && link) {
      window.open(link, "_blank");
    }
  };

  return (
    <motion.div
      onClick={handleMobileClick}
      className="group bg-[#1c1c1c] text-white w-full min-h-[450px] rounded-lg overflow-hidden transition-shadow duration-300 shadow-md hover:shadow-[0_0_20px_2px_rgba(255,0,0,0.6)] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      {/* Image container with overlay */}
      <div className="relative w-full h-48 overflow-hidden">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={image}
          alt="Project Preview"
          onLoad={() => setIsImageLoaded(true)}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />

        {/* Hover overlay for desktop only */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 items-center justify-center transition-opacity duration-300"
          >
            <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
              View Website
            </span>
          </a>
        )}
      </div>

      {/* Dynamic Content */}
      <div className="p-4 pt-3">{children}</div>
    </motion.div>
  );
}

export default ProjectsBox;
