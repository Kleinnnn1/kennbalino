import resume from "../assets/pdf/balinokenn_resume.pdf";

function ResumeButton() {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition duration-200 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 fill-black"
        viewBox="0 0 20 20"
      >
        <polygon points="3,2 17,10 3,18" />
      </svg>
      Resume
    </a>
  );
}

export default ResumeButton;
