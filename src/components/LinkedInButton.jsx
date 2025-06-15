function LinkedInButton() {
  return (
    <button className="flex items-center bg-gray-600 bg-opacity-70 text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 hover:opacity-100 opacity-80 transition duration-200 cursor-pointer">
      {/* Info icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
      </svg>
      Linkedin
    </button>
  );
}

export default LinkedInButton;
