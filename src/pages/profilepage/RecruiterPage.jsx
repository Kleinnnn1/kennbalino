import Navbar from "../../components/Navbar";
import recruitVideo from "../../assets/videos/recruitervideo.mp4";
import ResumeButton from "../../components/ResumeButton";
import LinkedInButton from "../../components/LinkedInButton";
import BoxItem from "../../components/BoxItem";

// Import sample images for boxes
import workPermit from "../../assets/images/netflixicons/netflixblue.jpg";
import skills from "../../assets/images/netflixicons/netflixblue.jpg";
import experience from "../../assets/images/netflixicons/netflixblue.jpg";
import certs from "../../assets/images/netflixicons/netflixblue.jpg";
import projects from "../../assets/images/netflixicons/netflixblue.jpg";

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
                    className="w-screen h-[500px] object-fill pixelated"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content Over Video */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white space-y-6">
                    {/* Intro Text */}
                    <div className="-ml-10">
                        <h4 className="text-3xl font-bold mt-40">Kenneth Jhun N. Balino - Web Developer</h4>
                        <p className="mt-2 text-sm md:text-base max-w-3xl font-medium">
                            Full-Stack Web Developer skilled in React, Django, and PostgreSQL, with a track record of building
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
                    <BoxItem image={workPermit} label="Work Permit" />
                    <BoxItem image={skills} label="Skills" />
                    <BoxItem image={experience} label="Experience" />
                    <BoxItem image={certs} label="Certifications" />
                    <BoxItem image={projects} label="Projects" />
                </div>
            </div>

            {/* Section Heading */}
            <h4 className="text-3xl font-bold mt-16 ml-10">Continue Watching for recruiter</h4>

            {/* Box Grid */}
            <div className="bg-black text-white py-6">
                <div className="px-10 grid grid-cols-3 lg:grid-cols-6 gap-4">
                    <BoxItem image={workPermit} label="Music" />
                    <BoxItem image={skills} label="Reading" />
                    <BoxItem image={experience} label="Blogs" />
                    <BoxItem image={certs} label="Contact Me" />
                </div>
            </div>

        </div>
    );
}

export default RecruiterPage;
