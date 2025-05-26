import React from "react";
import { Link } from "react-router-dom";
import {
  BrainCircuitIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <BrainCircuitIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">HireGenius</span>
            </div>
            <p className="mt-2 text-gray-300">Smarter Hiring Starts Here....</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cv-shortlisting"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  CV Shortlisting
                </Link>
              </li>
              <li>
                <Link
                  to="/profile-evaluation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Profile Evaluation
                </Link>
              </li>
              <li>
                <Link
                  to="/automated-interview"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Automated Interview
                </Link>
              </li>
              <li>
                <Link
                  to="/gamified-hr"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gamified HR
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-gray-300" />
                <a
                  href="mailto:nuwandihewamadduma@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hireGenius@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <GithubIcon className="h-5 w-5 mr-2 text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center">
                <LinkedinIcon className="h-5 w-5 mr-2 text-gray-300" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} HireGenius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
