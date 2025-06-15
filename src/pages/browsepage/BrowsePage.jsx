import { useNavigate } from "react-router-dom";
import netflixBlue from "../../assets/images/netflixicons/netflixblue.jpg";
import netflixRed from "../../assets/images/netflixicons/netflixred.jpg";
import netflixYellow from "../../assets/images/netflixicons/netflixyellow.jpg";
import netflixGreen from "../../assets/images/netflixicons/netflixgreen.jpg";

function BrowsePage() {
    const navigate = useNavigate();

    const profiles = [
        { name: "Recruiter", img: netflixBlue },
        { name: "Developer", img: netflixGreen },
        { name: "Adventurer", img: netflixYellow },
        { name: "Stalker", img: netflixRed },
    ];

    const handleProfileClick = (name) => {
        const routeName = name.toLowerCase();
        navigate(`/profile/${routeName}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans px-4">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-12">Who's Watching?</h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {profiles.map((profile, index) => (
                    <div
                        key={index}
                        onClick={() => handleProfileClick(profile.name)}
                        className="flex flex-col items-center cursor-pointer group"
                    >
                        <div className="rounded-lg border-4 border-transparent group-hover:border-white transition-all">
                            <img
                                src={profile.img}
                                alt={profile.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg"
                            />
                        </div>
                        <span className="mt-2 text-lg">{profile.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrowsePage;
