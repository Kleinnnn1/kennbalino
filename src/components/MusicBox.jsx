function MusicBox({ title, artist, image }) {
  return (
    <div
      className="w-[230px] rounded-lg bg-[#121212] p-3 shadow-md hover:shadow-red-500/40 
                 transition duration-300 cursor-pointer hover:scale-[1.03] group"
    >
      <div className="w-full h-[230px] overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
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
