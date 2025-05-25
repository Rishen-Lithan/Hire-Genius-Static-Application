import React from 'react';
import { GamepadIcon, UsersIcon, AwardIcon, BarChartIcon, BrainIcon, ListChecksIcon } from 'lucide-react';

const GamifiedHR = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 text-white bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <GamepadIcon className="w-16 h-16 mb-6" />
            <h1 className="mb-4 text-4xl font-bold">Gamified HR Interview</h1>
            <p className="max-w-3xl text-xl">
              An interactive and engaging HR interview experience that uses
              gamification to assess soft skills and personality traits.
            </p>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-6 text-3xl font-bold">
                Reimagining HR Interviews
              </h2>
              <p className="mb-6 text-gray-600">
                Our gamified HR interview process transforms the traditional
                interview experience into an engaging, interactive assessment
                that better evaluates candidates' soft skills and
                decision-making abilities.
              </p>
              <p className="mb-6 text-gray-600">
                Built with React JS and JavaScript libraries such as
                @react-three and gsap, the platform creates an immersive
                environment that reduces candidate stress while providing HR
                teams with valuable insights.
              </p>
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
                <p className="text-blue-700">
                  "The gamified approach not only improves candidate experience
                  but also yields more authentic responses, leading to better
                  hiring decisions."
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                  <UsersIcon className="w-10 h-10 mb-4 text-blue-600" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Enhanced Engagement
                  </h3>
                  <p className="text-gray-600">
                    Interactive elements keep candidates engaged throughout the
                    interview process.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                  <AwardIcon className="w-10 h-10 mb-4 text-blue-600" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Fair Assessment
                  </h3>
                  <p className="text-gray-600">
                    Standardized evaluation criteria ensure all candidates are
                    assessed equally.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                  <BarChartIcon className="w-10 h-10 mb-4 text-blue-600" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Data-Driven Insights
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive analytics provide deeper understanding of
                    candidate strengths.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                  <BrainIcon className="w-10 h-10 mb-4 text-blue-600" />
                  <h3 className="mb-2 text-lg font-semibold">ML-Powered</h3>
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">
            The Gamified Interview Process
          </h2>
          <div className="relative">
            {/* Process Steps */}
            <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 bg-blue-200 md:block left-1/2"></div>
            {/* Step 1 */}
            <div className="relative flex flex-col items-center mb-12 md:flex-row">
              <div className="mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right">
                <h3 className="mb-2 text-xl font-semibold">
                  Candidate Classification
                </h3>
                <p className="text-gray-600">
                  Machine learning models classify candidates into five
                  categories: high-level, mid-level, low-level, low-mid-level,
                  and mid-high-level.
                </p>
              </div>
              <div className="z-10 flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                1
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Model Performance
                    </h4>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-700">Random Forest:</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{
                        width: '95%'
                      }}></div>
                      </div>
                      <span className="ml-2 font-medium text-blue-600">
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
            <div className="relative flex flex-col items-center mb-12 md:flex-row">
              <div className="order-1 mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right md:order-1">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <p className="mb-4 text-gray-700">
                    The immersive environment includes interactive elements that
                    engage candidates and reduce interview anxiety.
                  </p>
                  <div className="p-3 rounded-md bg-blue-50">
                    <p className="text-sm text-blue-700">
                      Built using React JS with @react-three and gsap libraries
                      for fluid animations and interactive 3D elements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-10 flex items-center justify-center order-2 w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                2
              </div>
              <div className="order-3 md:w-1/2 md:pl-12">
                <h3 className="mb-2 text-xl font-semibold">
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
            <div className="relative flex flex-col items-center mb-12 md:flex-row">
              <div className="mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right">
                <h3 className="mb-2 text-xl font-semibold">
                  Dynamic Questioning
                </h3>
                <p className="text-gray-600">
                  Questions are dynamically assigned based on the candidate's
                  category, ensuring relevant assessment of skills and
                  experience.
                </p>
              </div>
              <div className="z-10 flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                3
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Question Categories
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="p-1 mr-2 bg-blue-100 rounded-full">
                        <span className="block w-2 h-2 bg-blue-600 rounded-full"></span>
                      </div>
                      <span>Behavioral scenarios</span>
                    </li>
                    <li className="flex items-center">
                      <div className="p-1 mr-2 bg-blue-100 rounded-full">
                        <span className="block w-2 h-2 bg-blue-600 rounded-full"></span>
                      </div>
                      <span>Problem-solving challenges</span>
                    </li>
                    <li className="flex items-center">
                      <div className="p-1 mr-2 bg-blue-100 rounded-full">
                        <span className="block w-2 h-2 bg-blue-600 rounded-full"></span>
                      </div>
                      <span>Cultural fit assessment</span>
                    </li>
                    <li className="flex items-center">
                      <div className="p-1 mr-2 bg-blue-100 rounded-full">
                        <span className="block w-2 h-2 bg-blue-600 rounded-full"></span>
                      </div>
                      <span>Soft skill evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative flex flex-col items-center mb-12 md:flex-row">
              <div className="order-1 mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right md:order-1">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <p className="text-gray-700">
                    Responses are stored in Firebase, allowing HR teams to
                    download comprehensive answer sheets for review and
                    analysis.
                  </p>
                </div>
              </div>
              <div className="z-10 flex items-center justify-center order-2 w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                4
              </div>
              <div className="order-3 md:w-1/2 md:pl-12">
                <h3 className="mb-2 text-xl font-semibold">
                  Response Collection
                </h3>
                <p className="text-gray-600">
                  Candidate responses are collected and stored securely for
                  evaluation by the HR team.
                </p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="relative flex flex-col items-center md:flex-row">
              <div className="mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right">
                <h3 className="mb-2 text-xl font-semibold">
                  Soft Skills Mini-Game
                </h3>
                <p className="text-gray-600">
                  A final interactive mini-game assesses soft skills such as
                  decision-making, teamwork, and problem-solving abilities also the knowledge of
                  project management, devOps & software development.
                </p>
              </div>
              <div className="z-10 flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                5
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Skills Assessed
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
                      Decision Making
                    </div>
                    <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
                      Teamwork
                    </div>
                    <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
                      Leadership
                    </div>
                    <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Model Performance
          </h2>
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-6 text-2xl font-semibold">
              Candidate Classification Models
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-4 text-xl font-semibold text-blue-700">
                  Accuracy Comparison
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">
                        Support Vector Machine
                      </span>
                      <span className="font-medium text-blue-600">93%</span>
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
                      <span className="font-medium text-blue-600">88%</span>
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
                      <span className="font-medium text-blue-600">16%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '91%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-gray-700">
                        Random Forest
                      </span>
                      <span className="font-bold text-blue-600">95%</span>
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
                <h4 className="mb-4 text-xl font-semibold text-blue-700">
                  Random Forest Performance
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Precision</span>
                      <span className="font-medium text-blue-600">95%</span>
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
                      <span className="font-medium text-blue-600">95%</span>
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
                      <span className="font-medium text-blue-600">95%</span>
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
                      <span className="font-medium text-blue-600">94%</span>
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Benefits of Gamified HR Interviews
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center p-3 mb-4 bg-blue-100 rounded-full w-14 h-14">
                <UsersIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Improved Candidate Experience
              </h3>
              <p className="text-gray-600">
                The gamified approach reduces interview anxiety and creates a
                more engaging experience, leading to more authentic responses
                from candidates.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="p-1 mr-2 bg-green-100 rounded-full">
                    <span className="block w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <span>Reduced interview stress</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1 mr-2 bg-green-100 rounded-full">
                    <span className="block w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <span>Higher candidate satisfaction</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center p-3 mb-4 bg-blue-100 rounded-full w-14 h-14">
                <BarChartIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Enhanced Assessment Accuracy
              </h3>
              <p className="text-gray-600">
                The combination of ML-based classification and interactive
                assessment provides a more comprehensive evaluation of
                candidates' soft skills.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="p-1 mr-2 bg-green-100 rounded-full">
                    <span className="block w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <span>Multi-dimensional evaluation</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1 mr-2 bg-green-100 rounded-full">
                    <span className="block w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <span>Better prediction of job success</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center p-3 mb-4 bg-blue-100 rounded-full w-14 h-14">
                <ListChecksIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Streamlined HR Process
              </h3>
              <p className="text-gray-600">
                The automated system with Firebase integration streamlines the HR
                evaluation process, making it more efficient and data-driven.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="p-1 mr-2 bg-green-100 rounded-full">
                    <span className="block w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <span>Reduced administrative burden</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1 mr-2 bg-green-100 rounded-full">
                    <span className="block w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <span>Consistent evaluation criteria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 text-white bg-blue-700">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">
            Experience the Future of HR Interviews
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl">
            Our gamified HR interview system represents a significant
            advancement in candidate assessment technology, combining machine
            learning with interactive experiences.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#" className="inline-block px-8 py-3 font-medium text-blue-700 transition-colors bg-white rounded-md hover:bg-gray-100">
              Request Demo
            </a>
            <a href="#" className="inline-block px-8 py-3 font-medium text-white transition-colors bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-blue-700">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default GamifiedHR;