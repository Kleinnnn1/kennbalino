function BoxItem({ image, label }) {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.6)]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white font-bold text-base text-center">{label}</h3>
      </div>
    </div>
  );
}


export default BoxItem;
