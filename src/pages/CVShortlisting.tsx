import React from 'react';
import { FileTextIcon, CheckCircleIcon, BarChart3Icon, SearchIcon } from 'lucide-react';
const CVShortlisting = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <FileTextIcon className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              Automated CV Shortlisting
            </h1>
            <p className="text-xl max-w-3xl">
              Our system uses ensemble learning, zero-shot classification,
              transformer embeddings, NER, and regex techniques to automate the
              resume shortlisting process.
            </p>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Resume Parsing</h3>
              <p className="text-gray-600">
                Resumes are parsed via PyPDF2 and pre-processed using SpaCy for
                tokenization, stop-word removal, and normalization.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Information Extraction
              </h3>
              <p className="text-gray-600">
                Keyword search combined with SpaCy NER extracts contact details,
                section boundaries, and a predefined dictionary of technical
                skills.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Similarity Analysis
              </h3>
              <p className="text-gray-600">
                A sentence-transformer generates embeddings for both resumes and
                job descriptions to calculate cosine similarity between them.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Candidate Ranking</h3>
              <p className="text-gray-600">
                A stacked ensemble regressor predicts match percentages, and
                candidates are ranked by these scores and visualized for
                recruiters.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Results & Performance
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Model Performance</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-100 text-left">Model</th>
                    <th className="py-3 px-4 bg-gray-100 text-left">
                      Hyperparameters
                    </th>
                    <th className="py-3 px-4 bg-gray-100 text-left">
                      Accuracy (R² Score)
                    </th>
                    <th className="py-3 px-4 bg-gray-100 text-left">MSE</th>
                    <th className="py-3 px-4 bg-gray-100 text-left">
                      Cross-Validation Accuracy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Random Forest</td>
                    <td className="py-3 px-4 border-b">
                      n_estimators=300, max_depth=15, min_samples_split=3
                    </td>
                    <td className="py-3 px-4 border-b">0.962057</td>
                    <td className="py-3 px-4 border-b">8.50629</td>
                    <td className="py-3 px-4 border-b">0.95769</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Gradient Boosting</td>
                    <td className="py-3 px-4 border-b">
                      n_estimators=250, learning_rate=0.05, max_depth=8
                    </td>
                    <td className="py-3 px-4 border-b">0.965283</td>
                    <td className="py-3 px-4 border-b">7.78306</td>
                    <td className="py-3 px-4 border-b">0.961387</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Linear Regression</td>
                    <td className="py-3 px-4 border-b">Default</td>
                    <td className="py-3 px-4 border-b">0.986805</td>
                    <td className="py-3 px-4 border-b">2.95811</td>
                    <td className="py-3 px-4 border-b">0.986209</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Stacked Model</td>
                    <td className="py-3 px-4 border-b">
                      Final Estimator: GB (n_estimators=150, learning_rate=0.1,
                      max_depth=5)
                    </td>
                    <td className="py-3 px-4 border-b font-bold">0.985392</td>
                    <td className="py-3 px-4 border-b font-bold">2.37496</td>
                    <td className="py-3 px-4 border-b font-bold">0.984839</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Key Findings</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    The Stacked Model achieved a high R² score of 0.9854 and a
                    cross-validation accuracy of 0.9844.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    While Linear Regression recorded the highest R² score
                    (0.9868), the Stacked Model maintained comparable accuracy
                    with lower generalization error.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    The Random Forest and Gradient Boosting models exhibited
                    strong predictive capabilities with R² scores of 0.9621 and
                    0.9653, respectively.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <SearchIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Accuracy</h3>
              <p className="text-gray-600">
                Our ensemble learning approach significantly improves the
                accuracy of candidate-job matching compared to traditional
                methods.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <BarChart3Icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Objective Evaluation
              </h3>
              <p className="text-gray-600">
                Provides recruiters with an objective, data-driven view of each
                applicant's domain proficiency through similarity scores.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <CheckCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Analysis
              </h3>
              <p className="text-gray-600">
                Evaluates multiple aspects including courses, certifications,
                projects, achievements, and experience against job requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default CVShortlisting;