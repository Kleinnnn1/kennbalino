import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function BoxItem({ image, label, to, delay = 0 }) {
  const navigate = useNavigate();

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
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white font-bold text-base text-center">{label}</h3>
      </div>
    </motion.div>
  );
}

export default BoxItem;
