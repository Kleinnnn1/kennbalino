import Navbar from "../../components/Navbar";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import profileImg from "../../assets/images/prof_img.jpg";
import { motion } from "framer-motion";

function ContactMePage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="flex flex-col items-center px-4 pt-24 text-center">

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-zinc-900 rounded-xl p-6 w-full max-w-md shadow-md mb-10"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-60 aspect-square rounded-full overflow-hidden shadow-lg bg-zinc-800">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <h2 className="text-lg font-bold">Kenneth Jhun N. Balino</h2>
                            <p className="text-sm text-gray-400">Software Engineer</p>
                            <p className="text-sm mt-1 text-gray-300">
                                Full-Stack Software Engineer proficient in React, Django, Laravel, and modern cloud technologies.
                                Passionate about crafting robust, scalable applications that transform ideas into impactful digital solutions.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/kenneth-jhun-n-balino/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                            >
                                <FaLinkedin className="inline mr-1" />
                                View Profile
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Info Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl font-semibold mb-8"
                >
                    I'm always up for a chat or a coffee! Feel free to reach out.
                </motion.p>

                {/* Contact Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col items-center gap-6 mb-10"
                >
                    <div className="flex items-center gap-4 bg-zinc-800 px-6 py-3 rounded-full shadow-lg hover:shadow-red-500/50 hover:ring-2 hover:ring-red-500 transition-all duration-300 transform hover:scale-105">
                        <FaEnvelope className="text-red-500 text-xl" />
                        <span className="text-white text-base md:text-lg font-medium">kennbalino@gmail.com</span>
                    </div>

                    {/* <div className="flex items-center gap-4 bg-zinc-800 px-6 py-3 rounded-full shadow-lg hover:shadow-red-500/50 hover:ring-2 hover:ring-red-500 transition-all duration-300 transform hover:scale-105">
                        <FaPhone className="text-red-500 text-xl" />
                        <span className="text-white text-base md:text-lg font-medium">+63 909 110 4535</span>
                    </div> */}

                </motion.div>

                {/* Coffee Message */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-lg"
                >
                    Let’s connect over a coffee ☕
                </motion.p>
            </div>
        </div>
    );
}

export default ContactMePage;
