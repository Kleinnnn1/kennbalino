import kennbalino from "../assets/images/kennbalino_logo_transparent.png";
import netflixBlue from "../assets/images/netflixicons/netflixblue.jpg";

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex items-center px-8 py-4 bg-black bg-opacity-30 backdrop-blur-md space-x-10">
        {/* Brand Logo */}
        <img
          src={kennbalino}
          alt="Kenn Balino Logo"
          className="w-28 h-auto object-contain"
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
          className="w-10 h-10 rounded-full object-cover ml-auto"
        />
      </nav>
    </div>
  );
}

export default Navbar;
