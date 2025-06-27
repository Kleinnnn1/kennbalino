import { useState } from "react";

function MusicBox({ title, artist, image }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className="w-[230px] rounded-lg bg-[#121212] p-3 shadow-md hover:shadow-red-500/40 
                 transition duration-300 cursor-pointer hover:scale-[1.03] group"
    >
      <div className="w-full h-[230px] overflow-hidden rounded-md relative">
        {/* Spinner overlay */}
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <img
          src={image}
          alt={title}
          onLoad={() => setIsImageLoaded(true)}
          className="w-full h-full object-cover rounded-md group-hover:opacity-90 transition"
        />
      </div>
      <div className="mt-3 px-1">
        <h3 className="text-white font-semibold text-sm truncate">{title}</h3>
        <p className="text-gray-400 text-xs mt-1 truncate">by {artist}</p>
      </div>
    </div>
  );
}

export default MusicBox;
