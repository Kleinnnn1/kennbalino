import Navbar from "../../components/Navbar";
import MusicBox from "../../components/MusicBox"; // adjust the path if needed
import myChemicalRomance from "../../assets/images/mychemicalromance.jpg"

function MusicPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />

            <div className="flex flex-col items-center py-10 px-6">
                {/* Quote */}
                <p className="italic text-center text-base md:text-lg mb-4 mt-20">
                    “<span className="not-italic">In heartbreak and darkness, we find the loudest echoes of who we are. Love fades, pain sings — but we survive with every lyric.</span>” <span role="img" aria-label="icons"> 🎧🔥.</span>
                </p>

                {/* Explore by Genre */}
                <h2 className="text-xl font-semibold mb-4">Explore by Genre</h2>
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {["Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative"].map((genre) => (
                        <button
                            key={genre}
                            className="bg-[#2e2e2e] hover:bg-[#444] px-4 py-2 rounded-md text-xl 
             hover:shadow-md hover:shadow-red-500 transition duration-300"
                        >
                            {genre}
                        </button>

                    ))}
                </div>

{/* Favorite Albums */}
<h2 className="text-xl font-semibold mb-5">Favorite Albums</h2>

<div className="w-full flex justify-center">
  <div className="overflow-x-auto scrollbar-hidden">
    <div className="flex items-center gap-4 min-w-max px-2 py-4">
      <MusicBox
        title="I Don't Love You"
        artist="My Chemical Romance"
        image={myChemicalRomance}
        delay={0}
      />
      <MusicBox
        title="Cancer"
        artist="My Chemical Romance"
        image={myChemicalRomance}
        delay={0.2}
      />
      <MusicBox
        title="Helena"
        artist="My Chemical Romance"
        image={myChemicalRomance}
        delay={0.4}
      />
      <MusicBox
        title="Famous Last Words"
        artist="My Chemical Romance"
        image={myChemicalRomance}
        delay={0.6}
      />
    </div>
  </div>
</div>

            </div>
        </div>
    );
}

export default MusicPage;
