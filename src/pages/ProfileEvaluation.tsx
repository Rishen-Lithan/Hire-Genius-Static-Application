import React from 'react';
import { GithubIcon, LinkedinIcon, GraduationCapIcon, BarChartIcon, DatabaseIcon, AwardIcon } from 'lucide-react';
const ProfileEvaluation = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex space-x-4 mb-6">
              <GithubIcon className="h-12 w-12" />
              <LinkedinIcon className="h-12 w-12" />
              <GraduationCapIcon className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Profile Evaluation</h1>
            <p className="text-xl max-w-3xl">
              Comprehensive candidate assessment through GitHub activity
              analysis, LinkedIn profile evaluation, and academic transcript
              examination.
            </p>
          </div>
        </div>
      </section>
      {/* GitHub Analysis Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <GithubIcon className="h-8 w-8 text-gray-800 mr-3" />
                <h2 className="text-3xl font-bold">GitHub Analysis</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our system evaluates GitHub profiles to assess a candidate's
                practical coding experience and development habits.
              </p>
              <h3 className="text-xl font-semibold mb-3">
                Key Evaluation Metrics:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <BarChartIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Commit Consistency:</strong> Analyzing the frequency
                    and regularity of code contributions.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <BarChartIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Repository Quality:</strong> Evaluating the
                    complexity and quality of projects.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <BarChartIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Collaboration Level:</strong> Measuring
                    contributions to team projects and open-source repositories.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <BarChartIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Language Proficiency:</strong> Identifying
                    programming languages and technologies used.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">
                  Clustering Methodology
                </h3>
                <p className="text-gray-600 mb-4">
                  Our system uses K-Means clustering to categorize GitHub
                  activity patterns:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-md">
                    <h4 className="font-semibold text-green-800">
                      Highly Active Contributors
                    </h4>
                    <p className="text-green-700">
                      Frequent commits, multiple repositories, regular activity
                      patterns
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-md">
                    <h4 className="font-semibold text-blue-800">
                      Moderately Active Contributors
                    </h4>
                    <p className="text-blue-700">
                      Regular commits with some gaps, several repositories
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-md">
                    <h4 className="font-semibold text-yellow-800">
                      Occasional Contributors
                    </h4>
                    <p className="text-yellow-700">
                      Sporadic activity, fewer repositories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LinkedIn Analysis Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">
                  Scoring Methodology
                </h3>
                <p className="text-gray-600 mb-4">
                  LinkedIn profiles are scored using a comprehensive evaluation
                  system:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-1/3 font-semibold text-gray-700">
                      Work Experience
                    </div>
                    <div className="w-2/3 bg-gray-200 rounded-full h-4">
                      <div className="bg-blue-600 h-4 rounded-full" style={{
                      width: '40%'
                    }}></div>
                    </div>
                    <div className="ml-2 text-gray-700">40%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 font-semibold text-gray-700">
                      Skills Match
                    </div>
                    <div className="w-2/3 bg-gray-200 rounded-full h-4">
                      <div className="bg-blue-600 h-4 rounded-full" style={{
                      width: '30%'
                    }}></div>
                    </div>
                    <div className="ml-2 text-gray-700">30%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 font-semibold text-gray-700">
                      Education
                    </div>
                    <div className="w-2/3 bg-gray-200 rounded-full h-4">
                      <div className="bg-blue-600 h-4 rounded-full" style={{
                      width: '20%'
                    }}></div>
                    </div>
                    <div className="ml-2 text-gray-700">20%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 font-semibold text-gray-700">
                      Endorsements
                    </div>
                    <div className="w-2/3 bg-gray-200 rounded-full h-4">
                      <div className="bg-blue-600 h-4 rounded-full" style={{
                      width: '10%'
                    }}></div>
                    </div>
                    <div className="ml-2 text-gray-700">10%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="flex items-center mb-6">
                <LinkedinIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">LinkedIn Evaluation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our system extracts and analyzes professional information from
                LinkedIn profiles to assess career trajectory and industry
                relevance.
              </p>
              <h3 className="text-xl font-semibold mb-3">
                Extraction Techniques:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <DatabaseIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>NLP Processing:</strong> Extracting relevant
                    experience, education, and skills using natural language
                    processing.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <DatabaseIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Fuzzy Matching:</strong> Comparing extracted skills
                    against job requirements using fuzzy string matching
                    algorithms.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <DatabaseIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Normalization:</strong> Converting raw scores to a
                    standardized 0-100 scale for fair comparison.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Academic Transcript Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <GraduationCapIcon className="h-8 w-8 text-gray-800 mr-3" />
                <h2 className="text-3xl font-bold">
                  Academic Transcript Analysis
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our system processes academic transcripts to evaluate
                educational qualifications and relevant coursework.
              </p>
              <h3 className="text-xl font-semibold mb-3">Processing Steps:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <AwardIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>OCR Processing:</strong> Converting transcript
                    images to text using Optical Character Recognition.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <AwardIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Course Extraction:</strong> Identifying course names
                    and grades using regex patterns.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <AwardIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Relevance Matching:</strong> Comparing courses
                    against job-specific requirements.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <AwardIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>
                    <strong>Score Calculation:</strong> Assigning weights based
                    on course relevance and grade values.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Grading System</h3>
                <p className="text-gray-600 mb-4">
                  Academic performance is evaluated using a weighted scoring
                  system:
                </p>
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-left">Grade</th>
                      <th className="py-2 px-4 border-b text-left">Value</th>
                      <th className="py-2 px-4 border-b text-left">
                        Weight for Relevant Courses
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">A/A+</td>
                      <td className="py-2 px-4 border-b">4.0</td>
                      <td className="py-2 px-4 border-b">1.5x</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">A-</td>
                      <td className="py-2 px-4 border-b">3.7</td>
                      <td className="py-2 px-4 border-b">1.5x</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">B+</td>
                      <td className="py-2 px-4 border-b">3.3</td>
                      <td className="py-2 px-4 border-b">1.25x</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">B</td>
                      <td className="py-2 px-4 border-b">3.0</td>
                      <td className="py-2 px-4 border-b">1.25x</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">C+/C/C-</td>
                      <td className="py-2 px-4 border-b">2.0-2.7</td>
                      <td className="py-2 px-4 border-b">1.0x</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">D+/D/D-</td>
                      <td className="py-2 px-4 border-b">1.0-1.7</td>
                      <td className="py-2 px-4 border-b">0.5x</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">F</td>
                      <td className="py-2 px-4 border-b">0.0</td>
                      <td className="py-2 px-4 border-b">0x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* System Integration */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Integrated Evaluation System
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our system combines GitHub analysis, LinkedIn evaluation, and
            academic transcript assessment to provide a comprehensive view of
            each candidate's technical abilities, professional experience, and
            educational background.
          </p>
          <div className="flex justify-center">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-2xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                Final Score Composition
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-1/3 font-semibold">GitHub Analysis</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-6">
                    <div className="bg-blue-600 h-6 rounded-full" style={{
                    width: '35%'
                  }}></div>
                  </div>
                  <div className="ml-2">35%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 font-semibold">LinkedIn Profile</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-6">
                    <div className="bg-blue-600 h-6 rounded-full" style={{
                    width: '35%'
                  }}></div>
                  </div>
                  <div className="ml-2">35%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 font-semibold">Academic Transcript</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-6">
                    <div className="bg-blue-600 h-6 rounded-full" style={{
                    width: '30%'
                  }}></div>
                  </div>
                  <div className="ml-2">30%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ProfileEvaluation;