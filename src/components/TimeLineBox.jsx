import { motion } from "framer-motion";

function TimeLineBox({ date, title, degree, description, direction = "right" }) {
    const isLeft = direction === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative w-full sm:w-[500px] ${isLeft ? "bg-blue-400" : "bg-pink-100"} text-black p-6 rounded-md shadow-sm z-0 border-b-4 border-gray-200 transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto my-10`}
        >
            {/* Date inside box, styled white and aligned left */}
            <p className="text-sm font-bold text-black mb-2">{date}</p>

            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-base font-medium mb-3">{degree}</p>
            <p className="text-base leading-relaxed">{description}</p>
        </motion.div>
    );
}

export default TimeLineBox;
