import { useEffect } from "react";
import Navbar from "../../components/Navbar";

function WorkExperiencePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white py-12 px-6">
            <Navbar />
            {/* Header*/}
            <div className="flex justify-center mt-20 mb-10">
                <h2 className="text-4xl font-bold text-white">
                    📅 Work Experience & Education Timeline
                </h2>
            </div>
        </div>
    )
}

export default WorkExperiencePage
