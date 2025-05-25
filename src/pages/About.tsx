import React from 'react';
import { UsersIcon, BookOpenIcon, GraduationCapIcon } from 'lucide-react';
const About = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <UsersIcon className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">About HireGenius</h1>
            <p className="text-xl max-w-3xl">
              Learn about our research team and the development of our automated
              interviewing system for software engineers.
            </p>
          </div>
        </div>
      </section>
      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-6">
                HireGenius is an advanced automated candidate selection and
                interview system designed to revolutionize the hiring process
                for software engineers. Our research addresses the critical
                challenge of recruiting qualified technical talent efficiently
                and objectively.
              </p>
              <p className="text-gray-600 mb-6">
                Traditional manual screening methods are often time-consuming,
                subjective, and inconsistent. For software engineering roles,
                it's essential to thoroughly assess programming skills, academic
                performance, and personality traits to identify the best
                candidates.
              </p>
              <p className="text-gray-600">
                Our system leverages artificial intelligence, natural language
                processing, and deep learning to create a comprehensive solution
                that evaluates candidates across multiple dimensions, providing
                a more accurate and efficient hiring process.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpenIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Research Publication
                </h3>
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <p className="text-gray-800 font-medium">
                    HireGenius: Automated Interviewing System for Software
                    Engineers
                  </p>
                  <p className="text-gray-600 mt-2">
                    N. A. Hewamadduma, G. K. Nalinka, N. T. M. A. S. M.
                    Mahawaththa, S. R.T.L Rosa, D. I. De Silva, P. Gunathilake
                  </p>
                  <p className="text-gray-600 mt-2">
                    Sri Lanka Institute of Information Technology, Malabe, Sri
                    Lanka
                  </p>
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Contact:</span>{' '}
                    nuwandihewamadduma@gmail.com
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Research Focus Areas:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span className="text-gray-700">
                        Machine Learning & Deep Learning
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span className="text-gray-700">
                        Natural Language Processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span className="text-gray-700">Ensemble Learning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span className="text-gray-700">
                        Human-Computer Interaction
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Research Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-2xl font-bold">NH</span>
                </div>
                <h3 className="text-xl font-semibold">N. A. Hewamadduma</h3>
                <p className="text-gray-600">Lead Researcher</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  Specialized in machine learning models and system architecture
                  design.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="mailto:nuwandihewamadduma@gmail.com" className="text-blue-600 hover:text-blue-800">
                    Email
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-2xl font-bold">GK</span>
                </div>
                <h3 className="text-xl font-semibold">G. K. Nalinka</h3>
                <p className="text-gray-600">NLP Specialist</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  Focused on natural language processing and text analysis
                  components.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Email
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-2xl font-bold">NM</span>
                </div>
                <h3 className="text-xl font-semibold">
                  N. T. M. A. S. M. Mahawaththa
                </h3>
                <p className="text-gray-600">Data Scientist</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  Specialized in data analysis and ensemble learning techniques.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Email
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-2xl font-bold">SR</span>
                </div>
                <h3 className="text-xl font-semibold">S. R.T.L Rosa</h3>
                <p className="text-gray-600">UI/UX Designer</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  Led the development of the gamified interview experience and
                  interface design.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Email
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-2xl font-bold">DD</span>
                </div>
                <h3 className="text-xl font-semibold">D. I. De Silva</h3>
                <p className="text-gray-600">Backend Developer</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  Responsible for system integration and database management.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Email
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-2xl font-bold">PG</span>
                </div>
                <h3 className="text-xl font-semibold">P. Gunathilake</h3>
                <p className="text-gray-600">Research Supervisor</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  Faculty supervisor providing guidance and academic oversight.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Email
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Institution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <GraduationCapIcon className="h-16 w-16 text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold mb-6">Research Institution</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              This research was conducted at the Sri Lanka Institute of
              Information Technology (SLIIT), a leading technology-focused
              higher education institution.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
              <h3 className="text-xl font-semibold mb-4">
                Sri Lanka Institute of Information Technology
              </h3>
              <p className="text-gray-600 mb-4">
                SLIIT is dedicated to advancing research in computing,
                engineering, and information technology fields, with a focus on
                developing practical solutions to real-world problems.
              </p>
              <div className="flex justify-center mt-6">
                <a href="https://www.sliit.lk" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Visit Institution Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Future Research */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Future Research Directions
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              Our team is committed to continuing research in AI-powered
              recruitment systems, focusing on these key areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Expanded Career Paths
                </h3>
                <p className="text-gray-100">
                  Extending our system to support a wider range of IT career
                  paths, including cybersecurity, data science, and cloud
                  computing.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Enhanced Skill Analysis
                </h3>
                <p className="text-gray-100">
                  Improving the assessment of both technical and soft skills
                  through more sophisticated AI models.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Adaptive Questioning
                </h3>
                <p className="text-gray-100">
                  Implementing dynamic question generation based on real-time
                  candidate performance.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Multilingual Support
                </h3>
                <p className="text-gray-100">
                  Developing capabilities to support multiple languages for
                  global recruitment needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;