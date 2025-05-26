import { Download, File, FileText } from "lucide-react";

const Downloads = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Download className="h-16 w-16 mb-6" />
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
          {/* First Row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Topic Assessment */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Topic Assessment</h3>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1VlCA6dHgWtbTTtQhR5isfYaxJTBXpFqP?usp=sharing",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>

            {/* Project Proposal */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Project Proposal</h3>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1U4O0nJPmKQ0t7v2Uv2vzzgLZw-zGX1W3?usp=sharing",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>

            {/* Project Proposal PPT */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <File className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Project Proposal PPT</h3>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/11yoaUy1nUKZ7joFVIvPZfqmbKIBdaLQi?usp=sharing",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>
          </div>

          {/* Second Row - 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Progress Presentation I */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <File className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">
                  Progress Presentation I
                </h3>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1rkLi5daWeWRojdWDHrqYN39_WMyAyMkE?usp=sharing",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>

            {/* Progress Presentation II */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <File className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">
                  Progress Presentation II
                </h3>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1Cc32grfypo_it_D3Pj-6yzte0OO7GeH-?usp=sharing",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>

            {/* Research Paper */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Research Paper</h3>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1D6kZZnEA7kagZQopFji8vGVRnHoACaIf?usp=sharing",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>

            {/* Final Report */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Final Report</h3>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1YWV3incohT2VUuJQUiPFD9s9Q9fJZ1ej?usp=sharing",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
