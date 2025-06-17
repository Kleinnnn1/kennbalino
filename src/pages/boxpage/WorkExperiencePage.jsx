import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import TimeLine from "../../components/TimeLine";

function WorkExperiencePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.03,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const heading = "📅Work Experience & Education Timeline";

    return (
        <div className="bg-black min-h-screen text-white py-12 px-6">
            <Navbar />
            
            {/* Header */}
            <div className="flex justify-center mt-20 mb-10">
                <motion.h3
                    className="text-4xl font-bold text-white flex flex-wrap justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {Array.from(heading).map((char, i) => (
                        <motion.span key={i} variants={letterVariants}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h3>
            </div>

            <TimeLine />
        </div>
    );
}

export default WorkExperiencePage;
