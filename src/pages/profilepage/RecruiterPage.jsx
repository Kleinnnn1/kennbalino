import Navbar from "../../components/Navbar"; // Adjust the path based on your folder structure

function RecruiterPage() {
    return (
        <div>
            <Navbar />
            <div className="pt-20 px-8"> {/* Add padding to avoid overlapping fixed navbar */}
                Recruiter Page
            </div>
        </div>
    );
}

export default RecruiterPage;
