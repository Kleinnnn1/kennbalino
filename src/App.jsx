import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landpage from './pages/landpage/Landpage';
import BrowsePage from './pages/browsepage/BrowsePage';
import RecruiterPage from './pages/profilepage/RecruiterPage';
import DeveloperPage from './pages/profilepage/DeveloperPage';
import AdventurerPage from './pages/profilepage/AdventurerPage';
import StalkerPage from './pages/profilepage/StalkerPage';
import SkillsPage from './pages/boxpage/SkillsPage';
import WorkExperiencePage from './pages/boxpage/WorkExperiencePage';
import ProjectsPage from "./pages/boxpage/ProjectsPage";
import ContactMePage from "./pages/boxpage/ContactMePage";
import MusicPage from "./pages/boxpage/MusicPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Landpage />} /> */}
        <Route path="/" element={<BrowsePage />} />
        <Route path="browse" element={<BrowsePage />} />
        <Route path="profile/developer" element={<DeveloperPage />} />
        <Route path="profile/adventurer" element={<AdventurerPage />} />
        <Route path="profile/stalker" element={<StalkerPage />} />
        <Route path="profile/recruiter" element={<RecruiterPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="work-experience" element={<WorkExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact-me" element={<ContactMePage />} />
        <Route path="music" element={<MusicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
