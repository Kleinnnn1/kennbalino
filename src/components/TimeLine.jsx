import TimeLineBox from "./TimeLineBox";

function TimeLine() {
    return (
        <div className="relative h-[35rem] w-48 mx-auto">
            {/* Vertical Line - now stretches full height */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white transform -translate-x-1/2" />


            {/* Top Icon (Blue Bag Icon - Raised) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 border-4 border-white z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M10 2h4a2 2 0 012 2v2h4a1 1 0 011 1v2h-2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9H3V7a1 1 0 011-1h4V4a2 2 0 012-2zm4 4V4h-4v2h4z" />
                    </svg>
                </div>
            </div>

            <TimeLineBox
                date="June 2021 - July 2025"
                title="University of Science and Technology of Southern Philippines"
                degree="Bachelor of Science and Information Technology"
                description="Designed and developed an online Job Request System, streamlining the school’s manual process. Successfully reduced administrative workload by 40%."
                direction="left"
            />

            {/* Graduation Cap Icon + Box */}
            <div className="absolute top-60 left-1/2 transform -translate-x-1/2">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-pink-400 border-4 border-white z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 11L3.74 8.37 2.21 9.15 12 14l9.79-4.85-1.53-.78L12 13zM6 11.5v3.25c0 2.45 2.91 4.25 6 4.25s6-1.8 6-4.25V11.5l-6 3-6-3z" />
                    </svg>

                    <TimeLineBox
                        date="June 2021 - July 2025"
                        title="University of Science and Technology of Southern Philippines"
                        degree="Bachelor of Science and Information Technology"
                        description="Designed and developed an online Job Request System, streamlining the school’s manual process. Successfully reduced administrative workload by 40%."
                        direction="right"
                    />
                </div>
            </div>

            {/* Bottom Icon (Star) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 border-4 border-white z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 .587l3.668 7.568L24 9.748l-6 5.852L19.335 24 12 19.771 4.665 24 6 15.6l-6-5.852 8.332-1.593z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
