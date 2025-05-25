import React from 'react';
import { GamepadIcon, UsersIcon, AwardIcon, BarChartIcon, BrainIcon, ListChecksIcon } from 'lucide-react';
const GamifiedHR = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <GamepadIcon className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Gamified HR Interview</h1>
            <p className="text-xl max-w-3xl">
              An interactive and engaging HR interview experience that uses
              gamification to assess soft skills and personality traits.
            </p>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Reimagining HR Interviews
              </h2>
              <p className="text-gray-600 mb-6">
                Our gamified HR interview process transforms the traditional
                interview experience into an engaging, interactive assessment
                that better evaluates candidates' soft skills and
                decision-making abilities.
              </p>
              <p className="text-gray-600 mb-6">
                Built with React JS and JavaScript libraries such as
                @react-three and gsap, the platform creates an immersive
                environment that reduces candidate stress while providing HR
                teams with valuable insights.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <p className="text-blue-700">
                  "The gamified approach not only improves candidate experience
                  but also yields more authentic responses, leading to better
                  hiring decisions."
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <UsersIcon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Enhanced Engagement
                  </h3>
                  <p className="text-gray-600">
                    Interactive elements keep candidates engaged throughout the
                    interview process.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <AwardIcon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Fair Assessment
                  </h3>
                  <p className="text-gray-600">
                    Standardized evaluation criteria ensure all candidates are
                    assessed equally.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <BarChartIcon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Data-Driven Insights
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive analytics provide deeper understanding of
                    candidate strengths.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <BrainIcon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">ML-Powered</h3>
                  <p className="text-gray-600">
                    Machine learning algorithms adapt to identify the best
                    candidates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Flow Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Gamified Interview Process
          </h2>
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-2">
                  Candidate Classification
                </h3>
                <p className="text-gray-600">
                  Machine learning models classify candidates into five
                  categories: high-level, mid-level, low-level, low-mid-level,
                  and mid-high-level.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                1
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Model Performance
                    </h4>
                    <div className="flex items-center">
                      <span className="text-gray-700 mr-2">Random Forest:</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{
                        width: '95%'
                      }}></div>
                      </div>
                      <span className="ml-2 text-blue-600 font-medium">
                        95%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    This classification ensures that interview questions are
                    tailored to the candidate's experience level and role
                    requirements.
                  </p>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-4">
                    The immersive environment includes interactive elements that
                    engage candidates and reduce interview anxiety.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-md">
                    <p className="text-blue-700 text-sm">
                      Built using React JS with @react-three and gsap libraries
                      for fluid animations and interactive 3D elements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 order-2">
                2
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <h3 className="text-xl font-semibold mb-2">
                  Interactive Environment
                </h3>
                <p className="text-gray-600">
                  Candidates enter a gamified interview environment with
                  multiple interactive stages designed to assess different
                  skills.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-2">
                  Dynamic Questioning
                </h3>
                <p className="text-gray-600">
                  Questions are dynamically generated based on the candidate's
                  category, ensuring relevant assessment of skills and
                  experience.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                3
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Question Categories
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span>Behavioral scenarios</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span>Problem-solving challenges</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span>Cultural fit assessment</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                      <span>Soft skill evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    Responses are stored in MongoDB, allowing HR teams to
                    download comprehensive answer sheets for review and
                    analysis.
                  </p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 order-2">
                4
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <h3 className="text-xl font-semibold mb-2">
                  Response Collection
                </h3>
                <p className="text-gray-600">
                  Candidate responses are collected and stored securely for
                  evaluation by the HR team.
                </p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-2">
                  Soft Skills Mini-Game
                </h3>
                <p className="text-gray-600">
                  A final interactive mini-game assesses soft skills such as
                  decision-making, teamwork, and problem-solving abilities.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                5
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Skills Assessed
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 p-2 rounded-md text-blue-700 text-center">
                      Decision Making
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md text-blue-700 text-center">
                      Teamwork
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md text-blue-700 text-center">
                      Leadership
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md text-blue-700 text-center">
                      Adaptability
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Model Performance Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Model Performance
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">
              Candidate Classification Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-700">
                  Accuracy Comparison
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">
                        Support Vector Machine
                      </span>
                      <span className="text-blue-600 font-medium">93%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '93%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">K-Nearest Neighbors</span>
                      <span className="text-blue-600 font-medium">89%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '89%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">
                        Multi-Layer Perceptron
                      </span>
                      <span className="text-blue-600 font-medium">91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '91%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-bold">
                        Random Forest
                      </span>
                      <span className="text-blue-600 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '95%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-700">
                  Random Forest Performance
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Precision</span>
                      <span className="text-blue-600 font-medium">94.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '94.8%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Recall</span>
                      <span className="text-blue-600 font-medium">93.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '93.5%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">F1 Score</span>
                      <span className="text-blue-600 font-medium">94.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '94.1%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Cross-Validation</span>
                      <span className="text-blue-600 font-medium">93.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '93.8%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Gamified HR Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <UsersIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Improved Candidate Experience
              </h3>
              <p className="text-gray-600">
                The gamified approach reduces interview anxiety and creates a
                more engaging experience, leading to more authentic responses
                from candidates.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <span>Reduced interview stress</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <span>Higher candidate satisfaction</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChartIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Enhanced Assessment Accuracy
              </h3>
              <p className="text-gray-600">
                The combination of ML-based classification and interactive
                assessment provides a more comprehensive evaluation of
                candidates' soft skills.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <span>Multi-dimensional evaluation</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <span>Better prediction of job success</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ListChecksIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Streamlined HR Process
              </h3>
              <p className="text-gray-600">
                The automated system with MongoDB integration streamlines the HR
                evaluation process, making it more efficient and data-driven.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <span>Reduced administrative burden</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <span>Consistent evaluation criteria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Future of HR Interviews
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our gamified HR interview system represents a significant
            advancement in candidate assessment technology, combining machine
            learning with interactive experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Request Demo
            </a>
            <a href="#" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default GamifiedHR;