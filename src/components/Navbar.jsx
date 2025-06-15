import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import kennbalino from "../assets/images/kennbalino_logo_transparent.png";
import netflixBlue from "../assets/images/netflixicons/netflixblue.jpg";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgOpacity = Math.min(scrollY / 150, 1);

  return (
    <div
      className="w-full fixed top-0 left-0 z-50 transition duration-300"
      style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}
    >
      <nav className="flex items-center px-8 py-4 space-x-10">

        {/* Kenn Logo */}
          <img
            src={kennbalino}
            alt="Kenn Balino Logo"
            onClick={() => navigate("/")}
            className="w-28 h-auto object-contain cursor-pointer"
          />

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white font-medium text-sm">
          <li className="hover:text-red-400 cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">Professional</li>
          <li className="hover:text-red-400 cursor-pointer">Skills</li>
          <li className="hover:text-red-400 cursor-pointer">Projects</li>
          <li className="hover:text-red-400 cursor-pointer">Hire Me</li>
        </ul>

        {/* Avatar/Image */}
        <img
          src={netflixBlue}
          alt="User Logo"
          onClick={() => navigate("/browse")}
          className="w-10 h-10 rounded-full object-cover ml-auto cursor-pointer"
        />
      </nav>
    </div>
  );
}

export default Navbar;
