import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import resume from "../assets/pdf/balinokenn_resume.pdf";

// Set worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeButton() {
  const [showPDF, setShowPDF] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const getA4Width = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 640) {
      return viewportWidth * 0.95;
    } else if (viewportWidth < 1024) {
      return Math.min(viewportWidth * 0.8, 600);
    } else {
      return 794; 
    }
  };

  return (
    <>
      <button
        onClick={() => setShowPDF(true)}
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
      </button>

      {showPDF && (
        <div
          className="fixed inset-0 bg-black/90 z-50 overflow-auto"
          onClick={() => setShowPDF(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowPDF(false)}
            className="fixed top-4 right-4 text-white hover:text-gray-300 text-5xl font-light transition z-10 md:top-6 md:right-6"
          >
            ×
          </button>

          {/* PDF Container - Centered */}
          <div className="min-h-full flex items-center justify-center py-8 px-2 md:px-4">
            <div
              className="w-full max-w-[794px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Document
                file={resume}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={
                  <div className="flex items-center justify-center h-screen">
                    <div className="text-white text-lg">Loading PDF...</div>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mb-4 shadow-2xl bg-white mx-auto"
                    width={getA4Width()}
                    scale={1}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeButton;