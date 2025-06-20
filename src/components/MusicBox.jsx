function MusicBox({ title, artist, image }) {
    return (
        <div
            className="bg-[#1a1a1a] p-3 rounded-lg border border-[#2b2b2b] max-w-[180px] 
                       transform transition duration-300 hover:scale-105 
                       hover:shadow-lg hover:shadow-red-500 cursor-pointer"
        >
            <img src={image} alt={title} className="rounded mb-2 h-36 object-cover" />
            <h3 className="text-sm font-bold">{title}</h3>
            <p className="text-xs text-gray-400">by {artist}</p>
        </div>
    );
}

export default MusicBox;
