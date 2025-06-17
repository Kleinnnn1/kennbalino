import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import recruitVideo from "../../assets/videos/recruitervideo.mp4";
import ResumeButton from "../../components/ResumeButton";
import LinkedInButton from "../../components/LinkedInButton";
import BoxItem from "../../components/BoxItem";

// Import sample images for boxes
import skills from "../../assets/images/boximage/skillsimage.png";
import experience from "../../assets/images/boximage/experienceimage.png";
import certs from "../../assets/images/boximage/certificatesimage.png";
import projects from "../../assets/images/boximage/projectsimage.jpg";
import music from "../../assets/images/boximage/musicimage.jpg"
import reading from "../../assets/images/boximage/readingimage.jpg"
import blogs from "../../assets/images/boximage/blogsimage.jpg"
import contactme from "../../assets/images/boximage/contactmeimage.jpg"

function RecruiterPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="relative">
                {/* Background Video */}
                <video
                    src={recruitVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-screen h-[500px] object-fill blur-[1.5px]"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content Over Video */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white space-y-6">
                    {/* Intro Text */}
                    <div className="-ml-10">
                        <h4 className="text-3xl font-bold mt-40">Kenneth Jhun N. Balino - Web Developer</h4>
                        <p className="mt-2 text-sm md:text-base max-w-3xl font-medium">
                            Full-Stack Web Developer skilled in React, Django, Supabase and PostgreSQL, and SQL with a track record of building
                            systems that boost efficiency by up to 40% and cut manual work by 30%. Delivered real-time platforms,
                            finance trackers, and CMS websites that increased engagement and streamlined operations. Recently
                            improved site uptime and support response as an IT Support and WordPress Developer. Passionate about
                            solving problems and driving impact through clean, scalable code.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4 mt-4 -ml-10">
                        <ResumeButton />
                        <LinkedInButton />
                    </div>
                </div>
            </div>

            {/* Section Top */}
            <h4 className="text-3xl font-bold mt-16 ml-10">Today's Top Pick for Recruiter</h4>

            {/* Box Grid */}
            <div className="bg-black text-white py-6">
                <div className="px-10 grid grid-cols-3 lg:grid-cols-6 gap-4">
                    <BoxItem image={skills} label="Skills" to="/skills" delay={0} />
                    <BoxItem image={experience} label="Experience" to="/work-experience" delay={0.2} />
                    <BoxItem image={certs} label="Certifications" delay={0.4} />
                    <BoxItem image={projects} label="Projects" to="/projects" delay={0.6} />
                </div>
            </div>

            {/* Section Heading */}
            <h4 className="text-3xl font-bold mt-16 ml-10">Continue Watching for Recruiter</h4>

            {/* Box Grid */}
            <div className="bg-black text-white py-6">
                <div className="px-10 grid grid-cols-3 lg:grid-cols-6 gap-4">
                    <BoxItem image={music} label="Music" delay={0} />
                    <BoxItem image={reading} label="Reading" delay={0.2} />
                    <BoxItem image={blogs} label="Blogs" delay={0.4} />
                    <BoxItem image={contactme} label="Contact Me" to="/contact-me" delay={0.6} />
                </div>
            </div>
        </div>
    );
}

export default RecruiterPage;
