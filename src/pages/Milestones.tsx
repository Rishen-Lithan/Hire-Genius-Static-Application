import React from 'react';
import { CalendarIcon, CheckCircleIcon } from 'lucide-react';
const Milestones = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <CalendarIcon className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Project Milestones</h1>
            <p className="text-xl max-w-3xl">
              Track our progress and key achievements throughout the development
              of HireGenius.
            </p>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {/* Milestone 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                </div>
                <div className="ml-auto mr-8 w-1/2 pr-8 md:pr-12 md:mr-auto md:ml-0 md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                      <h3 className="text-xl font-semibold">
                        Project Inception
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Project scope defined and initial research completed
                    </p>
                    <p className="text-sm text-gray-500 mt-2">January 2024</p>
                  </div>
                </div>
              </div>
              {/* Milestone 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                </div>
                <div className="mr-auto ml-8 w-1/2 pl-8 md:pl-12 md:ml-auto md:mr-0 md:w-1/2 md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                      <h3 className="text-xl font-semibold">
                        Development Phase 1
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Core functionality implemented and tested
                    </p>
                    <p className="text-sm text-gray-500 mt-2">March 2024</p>
                  </div>
                </div>
              </div>
              {/* Milestone 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
                <div className="ml-auto mr-8 w-1/2 pr-8 md:pr-12 md:mr-auto md:ml-0 md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">User Testing</h3>
                    <p className="text-gray-600">
                      Comprehensive user testing and feedback collection
                    </p>
                    <p className="text-sm text-gray-500 mt-2">May 2024</p>
                  </div>
                </div>
              </div>
              {/* Milestone 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
                <div className="mr-auto ml-8 w-1/2 pl-8 md:pl-12 md:ml-auto md:mr-0 md:w-1/2 md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">
                      Final Release
                    </h3>
                    <p className="text-gray-600">
                      System deployment and documentation completion
                    </p>
                    <p className="text-sm text-gray-500 mt-2">July 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Milestones;