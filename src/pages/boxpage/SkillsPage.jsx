import { motion } from "framer-motion";
import {
    FaPhp, FaReact, FaGithub, FaGitAlt, FaCode
} from "react-icons/fa";
import {
    SiDjango, SiSupabase, SiTailwindcss, SiBootstrap,
    SiPostgresql, SiMysql, SiFigma, SiWordpress, SiCanva
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

function SkillsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const backendSkills = [
        { name: "Django (Python)", desc: "Python Web Framework", icon: <SiDjango className="text-red-500" size={40} /> },
        { name: "Supabase", desc: "Backend-as-a-Service (BaaS)", icon: <SiSupabase className="text-red-500" size={40} /> },
        { name: "PHP", desc: "Backend Language", icon: <FaPhp className="text-red-500" size={40} /> },
    ];

    const frontendSkills = [
        { name: "React", desc: "JavaScript UI Library", icon: <FaReact className="text-red-500" size={40} /> },
        { name: "Next.js", desc: "React Framework for Production", icon: <RiNextjsFill className="text-red-500" size={40} /> },
        { name: "TypeScript", desc: "Typed JavaScript Superset", icon: <TbBrandTypescript className="text-red-500" size={40} /> },
        { name: "JavaScript", desc: "Scripting Language", icon: <DiJavascript1 className="text-red-500" size={40} /> },
        { name: "Tailwind CSS", desc: "Utility-first CSS Framework", icon: <SiTailwindcss className="text-red-500" size={40} /> },
        { name: "Bootstrap", desc: "CSS Framework", icon: <SiBootstrap className="text-red-500" size={40} /> },
    ];

    const databaseSkills = [
        { name: "MySQL", desc: "Relational Database", icon: <SiMysql className="text-red-500" size={40} /> },
        { name: "PostgreSQL", desc: "Advanced SQL Database", icon: <SiPostgresql className="text-red-500" size={40} /> },
    ];

    const otherTools = [
        { name: "GitHub", desc: "Code Hosting Platform", icon: <FaGithub className="text-red-500" size={40} /> },
        { name: "Git", desc: "Version Control System", icon: <FaGitAlt className="text-red-500" size={40} /> },
        { name: "VS Code", desc: "Code Editor", icon: <FaCode className="text-red-500" size={40} /> },
        { name: "Figma", desc: "UI/UX Design Tool", icon: <SiFigma className="text-red-500" size={40} /> },
        { name: "Canva", desc: "Graphic Design Platform", icon: <SiCanva className="text-red-500" size={40} /> },
        { name: "WordPress (Elementor)", desc: "CMS & Page Builder", icon: <SiWordpress className="text-red-500" size={40} /> },
    ];

    const Section = ({ title, skills, cols }) => (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex justify-center mt-10 mb-10"
            >
                <h2 className="text-4xl font-bold text-white border-b-4 border-red-500 pb-1">
                    {title}
                </h2>
            </motion.div>

            <motion.div
                variants={containerStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`grid ${cols} gap-6 cursor-pointer`}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        variants={fadeInUp}
                        key={index}
                        className="bg-[#1e1e1e] rounded-xl p-6 flex flex-col items-center text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.3)]"
                    >
                        {skill.icon}
                        <h4 className="text-lg font-bold mt-4">{skill.name}</h4>
                        <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );

    return (
        <div className="bg-black min-h-screen text-white py-12 px-6">
            <Navbar />
            <div className="max-w-6xl mx-auto">
                <Section title="Backend" skills={backendSkills} cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3" />
                <Section title="Frontend" skills={frontendSkills} cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
                <Section title="Database" skills={databaseSkills} cols="grid-cols-2" />
                <Section title="Other Tools and Technology" skills={otherTools} cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" />
            </div>
        </div>
    );
}

export default SkillsPage;
