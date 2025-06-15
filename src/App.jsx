import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landpage from './pages/landpage/Landpage';
import BrowsePage from './pages/browsepage/BrowsePage';
import RecruiterPage from './pages/profilepage/recruiterPage';
import DeveloperPage from './pages/profilepage/developerPage';
import AdventurerPage from './pages/profilepage/AdventurerPage';
import StalkerPage from './pages/profilepage/stalkerPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landpage />} />
          {/* Nested Routes */}
         <Route path="browse" element={<BrowsePage />} />
         <Route path="profile/recruiter" element={<RecruiterPage />} />
         <Route path="profile/developer" element={<DeveloperPage />} />
         <Route path="profile/adventurer" element={<AdventurerPage />} />
         <Route path="profile/stalker" element={<StalkerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
