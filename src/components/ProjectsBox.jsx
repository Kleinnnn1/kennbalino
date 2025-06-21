import { motion } from "framer-motion";

function ProjectsBox({ image, index, children }) {
  return (
    <motion.div
      className="group bg-[#1c1c1c] text-white w-full min-h-[450px] rounded-lg overflow-hidden transition-shadow duration-300 shadow-md hover:shadow-[0_0_20px_2px_rgba(255,0,0,0.6)] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      {/* Image with zoom on hover */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt="Project Preview"
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Dynamic Content */}
      <div className="p-4 pt-3">
        {children}
      </div>
    </motion.div>
  );
}

export default ProjectsBox;
