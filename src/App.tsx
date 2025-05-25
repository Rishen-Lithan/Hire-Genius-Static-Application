import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CVShortlisting from './pages/CVShortlisting';
import ProfileEvaluation from './pages/ProfileEvaluation';
import AutomatedInterview from './pages/AutomatedInterview';
import GamifiedHR from './pages/GamifiedHR';
import Milestones from './pages/Milestones';
import About from './pages/About';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv-shortlisting" element={<CVShortlisting />} />
            <Route path="/profile-evaluation" element={<ProfileEvaluation />} />
            <Route path="/automated-interview" element={<AutomatedInterview />} />
            <Route path="/gamified-hr" element={<GamifiedHR />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}