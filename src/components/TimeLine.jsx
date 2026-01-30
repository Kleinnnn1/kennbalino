import TimeLineBox from "./TimeLineBox";

function TimeLine() {
    return (
        <div className="relative flex flex-col items-center w-full px-4">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white transform -translate-x-1/2 z-0" />

            {/* Current Work Icon (Orange with Pulse) */}
            <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 border-4 border-white mx-auto relative">
                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 2C8.895 2 8 2.895 8 4v2H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2h-2V4c0-1.105-.895-2-2-2h-4zm0 2h4v2h-4V4zm10 6H4v10h16V10z" />
                    </svg>
                </div>
                <TimeLineBox
                    date="Present"
                    title="Software Engineer"
                    degree="TinkerPro POS"
                    description="Designed and developed a scalable cloud-based multi-branch POS system supporting high availability and growth across multiple branches and store types, including pharmacy, retail, and hardware businesses in the Philippines."
                    direction="left"
                />
            </div>

            {/* Previous Work Icon */}
            <div className="relative z-10 mt-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 border-4 border-white mx-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 2C8.895 2 8 2.895 8 4v2H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2h-2V4c0-1.105-.895-2-2-2h-4zm0 2h4v2h-4V4zm10 6H4v10h16V10z" />
                    </svg>
                </div>
                <TimeLineBox
                    date="Jan 2025 - June 2025"
                    title="IT Support and WordPress Developer"
                    degree="BrightWay PH"
                    description="Designed and deployed a WordPress CMS site for a life insurance company, increasing online inquiries by 35% and doubling applicant engagement within 5 months."
                    direction="right"
                />
            </div>

            {/* Education Icon */}
            <div className="relative z-10 mt-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-400 border-4 border-white mx-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 11L3.74 8.37 2.21 9.15 12 14l9.79-4.85-1.53-.78L12 13zM6 11.5v3.25c0 2.45 2.91 4.25 6 4.25s6-1.8 6-4.25V11.5l-6 3-6-3z" />
                    </svg>
                </div>
                <TimeLineBox
                    date="June 2021 - July 2025"
                    title="University of Science and Technology of Southern Philippines"
                    degree="Bachelor of Science and Information Technology"
                    description="Designed and developed an online Job Request System, streamlining the school's manual process. Successfully reduced administrative workload by 40%."
                    direction="left"
                />
            </div>

            {/* Final Star */}
            <div className="relative z-10 mt-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 border-4 border-white mx-auto">
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