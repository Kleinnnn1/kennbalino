import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import TechTag from "../../components/TechTag";
import ProjectsBox from "../../components/ProjectsBox";
import { FaHtml5, FaCss3Alt, FaWordpress, FaReact } from "react-icons/fa";
import { SiElementor, SiDjango, SiSupabase } from "react-icons/si";

import brightway from "../../assets/images/projects/brightway.png";
import jrs from "../../assets/images/projects/jrs.png";
import happyMeter from "../../assets/images/projects/happymeter.png";
import cashflow from "../../assets/images/projects/cashflow.png";
import apxwifi from "../../assets/images/projects/apxwifi.png";

const projects = [
    {
        image: brightway,
        title: "Brightway",
        description:
            "A business website for a startup insurance company to get more clients. This website is built using WordPress Elementor and deployed using DigitalOcean.",
        techs: [
            { icon: FaWordpress, label: "WordPress", color: "text-blue-400" },
            { icon: SiElementor, label: "Elementor", color: "text-pink-400" },
        ],
    },
    {
        image: jrs,
        title: "Job Request System",
        description:
            "A digital platform that streamlines campus maintenance by replacing traditional paper-based processes. Staff can easily submit, track, and manage maintenance requests online, improving response times, reducing paperwork, and enhancing overall efficiency. This website is build using Django and React, and deployed in Render.",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiDjango, label: "Django", color: "text-green-500" },
        ],
    },
    {
        image: happyMeter,
        title: "HappyMeter",
        description:
            "A web-based feedback and reporting tool designed to monitor and track employee satisfaction in the workplace, helping organizations gain insights and improve office morale and productivity. This website is build using React and Supabase and deployed using Vercel.",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiSupabase, label: "Supabase", color: "text-emerald-400" },
        ],
    },
    {
        image: cashflow,
        title: "CashFlow",
        description: "Simple cash flow tracker using React and Supabase.",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiSupabase, label: "Supabase", color: "text-emerald-400" }
        ],
    },
    {
        image: apxwifi,
        title: "APX WiFi Portal",
        description: "Landing page and login flow for an internet service provider.",
        techs: [
            { icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
            { icon: FaCss3Alt, label: "CSS3", color: "text-blue-500" },
        ],
    },
];

function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="px-6 pt-24">
                <h1 className="text-4xl font-bold text-white underline underline-offset-4 decoration-red-500 mb-8 text-center">
                    Projects
                </h1>

                <div className="flex flex-wrap justify-start gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${index === projects.length - 1 ? "mb-30" : ""}`}
                        >
                            <ProjectsBox image={project.image} index={index}>
                                <h2 className="text-lg font-bold text-red-500 mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-xs text-gray-300 mb-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techs.map((tech, idx) => (
                                        <TechTag
                                            key={idx}
                                            icon={tech.icon}
                                            label={tech.label}
                                            color={tech.color}
                                        />
                                    ))}
                                </div>
                            </ProjectsBox>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
