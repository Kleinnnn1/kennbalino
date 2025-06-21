import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import kennbalino from "../assets/images/kennbalino_logo_transparent.png";
import netflixRed from "../assets/images/netflixicons/netflixred.jpg";
import useProfileStore from "../store/useProfileStore";

function Navbar() {
  const profile = useProfileStore((state) => state.profile);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);


  const bgOpacity = Math.min(scrollY / 150, 1);

  const navLinks = [
    { label: "Home", path: "/browse"},
    { label: "Professional", path: "/work-experience"},
    { label: "Skills", path: "/skills"},
    { label: "Projects", path: "/projects"},
    { label: "Hire Me", path: "/contact-me"},
  ];

  return (
    <>
      {/* Top Navbar */}
      <div
        className="w-full fixed top-0 left-0 z-50 transition duration-300"
        style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}
      >
        <nav className="flex items-center px-6 py-4">
          {/* Logo */}
          <img
            src={kennbalino}
            alt="Kenn Balino Logo"
            onClick={() => navigate("/")}
            className={`w-28 h-auto object-contain cursor-pointer ${isMenuOpen ? "hidden" : ""}`}
          />


          {/* Desktop Nav Links */}
          <ul className="hidden md:flex ml-8 space-x-6 text-white font-medium text-sm">
            {navLinks.map((link) => (
              <li
                key={link.label}
                onClick={() => navigate(link.path)}
                className="hover:text-red-400 cursor-pointer flex items-center space-x-1"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </li>
            ))}
          </ul>

          {/* Right Side (Avatar & Menu Button) */}
          <div className="ml-auto flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={28} />
            </button>

            {/* Avatar */}
            <img
              src={profile?.img || netflixRed}
              alt="User Avatar"
              onClick={() => navigate("/browse")}
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
          </div>
        </nav>
      </div>

      {/* Slide-in Side Menu (Mobile) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)]"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Stop propagation inside the side menu */}
          <div
            className="fixed top-0 left-0 h-full w-[280px] bg-black text-white z-50 transform transition-transform duration-300 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center space-y-8">
              <img
                src={kennbalino}
                alt="Kenn Balino Logo"
                className="w-32 h-auto object-contain"
              />
              <ul className="flex flex-col space-y-6 text-lg font-semibold">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    onClick={() => {
                      navigate(link.path);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 cursor-pointer hover:text-red-400"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-xl">{link.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}


    </>
  );
}

export default Navbar;
