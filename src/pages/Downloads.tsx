import React from 'react';
import { DownloadIcon, FileIcon, BookIcon, FileTextIcon } from 'lucide-react';
const Downloads = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <DownloadIcon className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Downloads</h1>
            <p className="text-xl max-w-3xl">
              Access our research papers, documentation, and resources.
            </p>
          </div>
        </div>
      </section>
      {/* Downloads Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Paper */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Research Paper</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete research paper detailing our methodology and findings.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <DownloadIcon className="h-5 w-5 mr-2" />
                Download PDF
              </button>
            </div>
            {/* Technical Documentation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Documentation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Technical documentation and system architecture details.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <DownloadIcon className="h-5 w-5 mr-2" />
                Download PDF
              </button>
            </div>
            {/* Presentation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Presentation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Project presentation slides and demonstration materials.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <DownloadIcon className="h-5 w-5 mr-2" />
                Download PPT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Downloads;