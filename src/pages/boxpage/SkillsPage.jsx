import { FaPhp, FaReact, FaRegLightbulb, FaGithub, FaGitAlt, FaCode } from "react-icons/fa";
import { SiDjango, SiSupabase, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql, SiFigma, SiCanva, SiOpenai, SiWordpress } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsStars } from "react-icons/bs"; // for Gemini
import Navbar from "../../components/Navbar";
import { useEffect } from "react";

function SkillsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const backendSkills = [
        {
            name: "Django (Python)",
            desc: "Python Web Framework",
            icon: <SiDjango className="text-red-500" size={40} />,
        },
        {
            name: "Supabase",
            desc: "Backend-as-a-Service (BaaS)",
            icon: <SiSupabase className="text-red-500" size={40} />,
        },
        {
            name: "PHP",
            desc: "Backend Language",
            icon: <FaPhp className="text-red-500" size={40} />,
        },
    ];

    const frontendSkills = [
        {
            name: "React",
            desc: "JavaScript UI Library",
            icon: <FaReact className="text-red-500" size={40} />,
        },
        {
            name: "Tailwind CSS",
            desc: "Utility-first CSS Framework",
            icon: <SiTailwindcss className="text-red-500" size={40} />,
        },
        {
            name: "Bootstrap",
            desc: "CSS Framework",
            icon: <SiBootstrap className="text-red-500" size={40} />,
        },
        {
            name: "JavaScript",
            desc: "Scripting Language",
            icon: <DiJavascript1 className="text-red-500" size={40} />, // optional icon, can change
        },

    ];

    const databaseSkills = [
        {
            name: "MySQL",
            desc: "Relational Database",
            icon: <SiMysql className="text-red-500" size={40} />,
        },
        {
            name: "PostgreSQL",
            desc: "Advanced SQL Database",
            icon: <SiPostgresql className="text-red-500" size={40} />,
        },
    ];

    const otherTools = [
        {
            name: "GitHub",
            desc: "Code Hosting Platform",
            icon: <FaGithub className="text-red-500" size={40} />,
        },
        {
            name: "Git",
            desc: "Version Control System",
            icon: <FaGitAlt className="text-red-500" size={40} />,
        },
        {
            name: "VS Code",
            desc: "Code Editor",
            icon: <FaCode className="text-red-500" size={40} />,
        },
        {
            name: "Figma",
            desc: "UI/UX Design Tool",
            icon: <SiFigma className="text-red-500" size={40} />,
        },
        {
            name: "Canva",
            desc: "Design Platform",
            icon: <SiCanva className="text-red-500" size={40} />,
        },
        {
            name: "ChatGPT",
            desc: "AI Assistant by OpenAI",
            icon: <SiOpenai className="text-red-500" size={40} />,
        },
        {
            name: "Claude",
            desc: "AI Assistant by Anthropic",
            icon: <FaRegLightbulb className="text-red-500" size={40} />,
        },
        {
            name: "Gemini",
            desc: "AI by Google",
            icon: <BsStars className="text-red-500" size={40} />,
        },
        {
            name: "WordPress (Elementor)",
            desc: "CMS & Page Builder",
            icon: <SiWordpress className="text-red-500" size={40} />,
        },
    ];




    return (
        <div className="bg-black min-h-screen text-white py-12 px-6">
            <Navbar />
            <div className="max-w-6xl mx-auto">

                {/* Backend Section */}
                <div className="flex justify-center mt-10 mb-10">
                    <h2 className="text-4xl font-bold text-white border-b-4 border-red-500 pb-1">
                        Backend
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
                    {backendSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#1e1e1e] rounded-xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.3)]"
                        >
                            {skill.icon}
                            <h4 className="text-lg font-bold mt-4">{skill.name}</h4>
                            <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Frontend Section */}
                <div className="flex justify-center mt-20 mb-10">
                    <h2 className="text-4xl font-bold text-white border-b-4 border-red-500 pb-1">
                        Frontend
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
                    {frontendSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#1e1e1e] rounded-xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.3)]"
                        >
                            {skill.icon}
                            <h4 className="text-lg font-bold mt-4">{skill.name}</h4>
                            <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Database Section */}
                <div className="flex justify-center mt-20 mb-10">
                    <h2 className="text-4xl font-bold text-white border-b-4 border-red-500 pb-1">
                        Database
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-6 cursor-pointer">
                    {databaseSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#1e1e1e] rounded-xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.3)]"
                        >
                            {skill.icon}
                            <h4 className="text-lg font-bold mt-4">{skill.name}</h4>
                            <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Other Tools Section */}
                <div className="flex justify-center mt-20 mb-10">
                    <h2 className="text-4xl font-bold text-white border-b-4 border-red-500 pb-1">
                        Other Tools and Technology
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
                    {otherTools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-[#1e1e1e] rounded-xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.3)]"
                        >
                            {tool.icon}
                            <h4 className="text-lg font-bold mt-4">{tool.name}</h4>
                            <p className="text-sm text-gray-400 mt-1">{tool.desc}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default SkillsPage;
