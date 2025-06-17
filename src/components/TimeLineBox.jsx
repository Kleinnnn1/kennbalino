import { motion } from "framer-motion";

function TimeLineBox({ date, title, degree, description, direction = "right" }) {
    const isLeft = direction === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`absolute top-0 ${
                isLeft ? "right-full -mr-7" : "left-full ml-10"
            } w-[500px] bg-pink-100 text-black p-6 rounded-md shadow-sm z-0 border-b-4 border-gray-200 transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
        >
            <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`absolute text-sm text-gray-300 whitespace-nowrap font-bold ${
                    isLeft ? "-right-65" : "-left-65"
                }`}
            >
                {date}
            </motion.span>

            {/* Pointer */}
            <div
                className={`absolute top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${
                    isLeft
                        ? "right-[-8px] border-l-[10px] border-l-pink-100"
                        : "left-[-8px] border-r-[10px] border-r-pink-100"
                }`}
            />

            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-base font-medium mb-3">
                {degree} <span className="ml-1">🏅</span>
            </p>
            <p className="text-base leading-relaxed">{description}</p>
        </motion.div>
    );
}

export default TimeLineBox;
