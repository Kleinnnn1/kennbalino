import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResumeButton from "../components/ResumeButton";
import LinkedInButton from "../components/LinkedInButton";
import BoxItem from "../components/BoxItem";

import skills from "../assets/images/boximage/skillsimage.png";
import experience from "../assets/images/boximage/experienceimage.png";
import projects from "../assets/images/boximage/projectsimage.jpg";
import music from "../assets/images/boximage/musicimage.jpg";
import contactme from "../assets/images/boximage/contactmeimage.jpg";
import { useState } from "react";

function ProfilePage({ videoSrc, title }) {
  const location = useLocation();
  // Extract the last part of the path after "/profile/"
  const profileName = location.pathname.split("/profile/")[1];
  // Capitalize the first letter
  const profileLabel = profileName ? profileName.charAt(0).toUpperCase() + profileName.slice(1) : "User";
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}


        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className="w-screen h-[500px] md:h-[500px] h-screen object-cover blur-[1.5px]"
          style={{ objectPosition: 'center 25%' }}
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:items-start md:px-16 text-white space-y-6 text-center md:text-left">
          <div className="md:-ml-10">
            <h4 className="text-2xl md:text-3xl font-bold mt-20 md:mt-40">{title}</h4>
            <p className="mt-2 text-sm md:text-base max-w-xl md:max-w-3xl font-medium">
              Full-Stack Software Engineer specializing in React, Django, Laravel, and Supabase. Proven track record of
              building scalable systems that boost efficiency by 40% and reduce manual processes by 30%. Delivered
              real-time platforms, finance trackers, and CMS solutions that drive engagement and streamline operations.
              Passionate about solving complex problems through clean, maintainable code.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto md:-ml-10">
            <ResumeButton className="h-12 w-full md:w-auto" />
            <LinkedInButton className="h-12 w-full md:w-auto" />
          </div>
        </div>
      </div>

      {/* Top Pick Section */}
      <h4 className="text-3xl font-bold mt-16 ml-10">Today's Top Pick for {profileLabel}</h4>
      <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4 px-10 py-6">
          <BoxItem image={skills} label="Skills" to="/skills" delay={0} />
          <BoxItem image={experience} label="Experience" to="/work-experience" delay={0.2} />
          <BoxItem image={projects} label="Projects" to="/projects" delay={0.4} />
          {/* Add more items if needed */}
        </div>
      </div>


      {/* Continue Watching Section */}
      <h4 className="text-3xl font-bold mt-16 ml-10">Continue Watching for {profileLabel}</h4>
      <div className="bg-black text-white py-6 overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4 px-10">
          <BoxItem image={music} label="Music" to="/music" delay={0} />
          <BoxItem image={contactme} label="Contact Me" to="/contact-me" delay={0.2} />
          {/* You can add more BoxItems here without worrying about overflow */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
