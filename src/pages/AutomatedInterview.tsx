import React, { Component } from 'react';
import { VideoIcon, SmileIcon, ClockIcon, BarChartIcon, BrainIcon } from 'lucide-react';
const AutomatedInterview = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <VideoIcon className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              Automated Interview System
            </h1>
            <p className="text-xl max-w-3xl">
              Our AI-powered interview system combines facial expression
              analysis, text response evaluation, and engagement metrics to
              provide a comprehensive candidate assessment.
            </p>
          </div>
        </div>
      </section>
      {/* Key Components Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Component 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <SmileIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">
                  Facial Expression Analysis
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time facial expression monitoring using a MobileNet-based
                deep learning model to assess candidate engagement and
                confidence.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>Trained on pre-processed facial images</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>Real-time attention labels using OpenCV</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>Detects engagement, confusion, and confidence</span>
                </li>
              </ul>
            </div>
            {/* Component 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <BrainIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">
                  Text Response Analysis
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Evaluates the accuracy and quality of candidate responses using
                advanced NLP techniques and semantic similarity.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>NLTK preprocessing for text normalization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>Sentence BERT embeddings for semantic comparison</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>Cosine similarity for answer accuracy measurement</span>
                </li>
              </ul>
            </div>
            {/* Component 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <BarChartIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Scoring System</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Combines multiple metrics into a comprehensive weighted score
                that accurately reflects candidate performance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>Weighted formula combining multiple metrics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>Normalization of scores to 0-100 scale</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <span>60% cutoff established through expert input</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Process Flow Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Interview Process Flow
          </h2>
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Initial Setup</h3>
                <p className="text-gray-600">
                  Candidate enters the virtual interview environment where the
                  system verifies camera and microphone access.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                1
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    System calibration and identity verification ensure a secure
                    and accurate assessment environment.
                  </p>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    Level based questions on candidate responses,
                    ensuring comprehensive skill assessment.
                  </p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 order-2">
                2
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <h3 className="text-xl font-semibold mb-2">
                  Technical Questions
                </h3>
                <p className="text-gray-600">
                  Candidates answer questions of varying levels
                  across relevant technical domains.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-2">
                  Real-time Analysis
                </h3>
                <p className="text-gray-600">
                  The system continuously monitors facial expressions, analyzes
                  response accuracy, and tracks engagement metrics.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                3
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    Advanced algorithms process multiple data streams
                    simultaneously to build a comprehensive candidate profile.
                  </p>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    Final scores are calculated and candidates are ranked, with
                    detailed performance breakdowns available to recruiters.
                  </p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 order-2">
                4
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <h3 className="text-xl font-semibold mb-2">
                  Scoring & Evaluation
                </h3>
                <p className="text-gray-600">
                  The system applies the weighted scoring formula to generate a
                  final assessment score based on all measured metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Performance Metrics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            System Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facial Recognition Performance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <SmileIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">
                  Facial Expression Recognition
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      Test Accuracy
                    </span>
                    <span className="text-blue-600 font-medium">92.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                    width: '92%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      Training Loss
                    </span>
                    <span className="text-blue-600 font-medium">0.5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                    width: '5%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      Validation Accuracy Range
                    </span>
                    <span className="text-blue-600 font-medium">
                      93%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                    width: '93%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Analysis Performance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <BrainIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">
                  Text Response Analysis
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">
                    Average Accuracy
                  </span>
                  <span className="text-blue-600 font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '60%'
                }}></div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">
                Challenges & Solutions
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-red-600"></span>
                  </div>
                  <div>
                    <span className="font-medium text-red-700">Challenge:</span>
                    <span>
                      {' '}
                      Ambiguous responses causing minor differences in
                      evaluation
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <div>
                    <span className="font-medium text-green-700">
                      Solution:
                    </span>
                    <span>
                      {' '}
                      NLP fine-tuning and contextual embedding improvements
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                    <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                  </div>
                  <div>
                    <span className="font-medium text-green-700">
                      Enhancement:
                    </span>
                    <span>
                      {' '}
                      Dataset expansion and optimization of similarity
                      thresholds
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Final Score Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Final Score Calculation</h2>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">
              Weighted Formula Components
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <BrainIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="font-semibold">Theoretical Answer Accuracy</span>
                  </div>
                  <span className="font-bold">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{
                  width: '60%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <SmileIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="font-semibold">Coding Answer Accuracy</span>
                  </div>
                  <span className="font-bold">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{
                  width: '25%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AutomatedInterview;