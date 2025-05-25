import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, BrainCircuitIcon, ChevronDownIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectScopeOpen, setIsProjectScopeOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BrainCircuitIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                HireGenius
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative">
              <button onClick={() => setIsProjectScopeOpen(!isProjectScopeOpen)} className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center">
                Project Scope
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {isProjectScopeOpen && <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-1">
                  <Link to="/cv-shortlisting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsProjectScopeOpen(false)}>
                    CV Shortlisting
                  </Link>
                  <Link to="/profile-evaluation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsProjectScopeOpen(false)}>
                    Profile Evaluation
                  </Link>
                  <Link to="/automated-interview" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsProjectScopeOpen(false)}>
                    Automated Interview
                  </Link>
                  <Link to="/gamified-hr" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsProjectScopeOpen(false)}>
                    Gamified HR
                  </Link>
                </div>}
            </div>
            <Link to="/milestones" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Milestones
            </Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <Link to="/downloads" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Downloads
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <div className="space-y-1">
              <button onClick={() => setIsProjectScopeOpen(!isProjectScopeOpen)} className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors flex items-center justify-between">
                Project Scope
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {isProjectScopeOpen && <div className="pl-4 space-y-1">
                  <Link to="/cv-shortlisting" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    CV Shortlisting
                  </Link>
                  <Link to="/profile-evaluation" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Profile Evaluation
                  </Link>
                  <Link to="/automated-interview" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Automated Interview
                  </Link>
                  <Link to="/gamified-hr" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Gamified HR
                  </Link>
                </div>}
            </div>
            <Link to="/milestones" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Milestones
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <Link to="/downloads" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Downloads
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;