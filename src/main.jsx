import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LearnSection from './components/LearningPath.jsx';
import ModuleSection from './components/Module.jsx';
import TakeaTourPage from './components/TakeaTourPage.jsx';
import App from './App.jsx';
import './index.css';
import StudySection from './components/StudyMaterial.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<LearnSection />} />
        <Route path="/" element={<ModuleSection />} />
        <Route path="/" element={<StudySection/>}/>
        
        {/* "Take a Tour" Dynamic Page */}
        <Route path="/take-a-tour/:pageType" element={<TakeaTourPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
