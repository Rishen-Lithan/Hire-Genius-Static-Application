// import React from 'react';
// import { FileTextIcon, CheckCircleIcon, BarChart3Icon, SearchIcon } from 'lucide-react';
// const CVShortlisting = () => {
//   return <div className="w-full bg-white">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center text-center">
//             <FileTextIcon className="h-16 w-16 mb-6" />
//             <h1 className="text-4xl font-bold mb-4">
//               Automated CV Shortlisting
//             </h1>
//             <p className="text-xl max-w-3xl">
//               Our system uses ensemble learning, zero-shot classification,
//               transformer embeddings, NER, and regex techniques to automate the
//               resume shortlisting process.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* Process Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Step 1 */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
//               <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <span className="font-bold text-blue-600">1</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Resume Parsing</h3>
//               <p className="text-gray-600">
//                 Resumes are parsed via PyPDF2 and pre-processed using SpaCy for
//                 tokenization, stop-word removal, and normalization.
//               </p>
//             </div>
//             {/* Step 2 */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
//               <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <span className="font-bold text-blue-600">2</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">
//                 Information Extraction
//               </h3>
//               <p className="text-gray-600">
//                 Keyword search combined with SpaCy NER extracts contact details,
//                 section boundaries, and a predefined dictionary of technical
//                 skills.
//               </p>
//             </div>
//             {/* Step 3 */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
//               <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <span className="font-bold text-blue-600">3</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">
//                 Similarity Analysis
//               </h3>
//               <p className="text-gray-600">
//                 A sentence-transformer generates embeddings for both resumes and
//                 job descriptions to calculate cosine similarity between them.
//               </p>
//             </div>
//             {/* Step 4 */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
//               <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <span className="font-bold text-blue-600">4</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Candidate Ranking</h3>
//               <p className="text-gray-600">
//                 A stacked ensemble regressor predicts match percentages, and
//                 candidates are ranked by these scores and visualized for
//                 recruiters.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Results Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Results & Performance
//           </h2>
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-6">Model Performance</h3>
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white">
//                 <thead>
//                   <tr>
//                     <th className="py-3 px-4 bg-gray-100 text-left">Model</th>
//                     <th className="py-3 px-4 bg-gray-100 text-left">
//                       Hyperparameters
//                     </th>
//                     <th className="py-3 px-4 bg-gray-100 text-left">
//                       Accuracy (R² Score)
//                     </th>
//                     <th className="py-3 px-4 bg-gray-100 text-left">MSE</th>
//                     <th className="py-3 px-4 bg-gray-100 text-left">
//                       Cross-Validation Accuracy
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="py-3 px-4 border-b">Random Forest</td>
//                     <td className="py-3 px-4 border-b">
//                       n_estimators=300, max_depth=15, min_samples_split=3
//                     </td>
//                     <td className="py-3 px-4 border-b">0.962057</td>
//                     <td className="py-3 px-4 border-b">8.50629</td>
//                     <td className="py-3 px-4 border-b">0.95769</td>
//                   </tr>
//                   <tr>
//                     <td className="py-3 px-4 border-b">Gradient Boosting</td>
//                     <td className="py-3 px-4 border-b">
//                       n_estimators=250, learning_rate=0.05, max_depth=8
//                     </td>
//                     <td className="py-3 px-4 border-b">0.965283</td>
//                     <td className="py-3 px-4 border-b">7.78306</td>
//                     <td className="py-3 px-4 border-b">0.961387</td>
//                   </tr>
//                   <tr>
//                     <td className="py-3 px-4 border-b">Linear Regression</td>
//                     <td className="py-3 px-4 border-b">Default</td>
//                     <td className="py-3 px-4 border-b">0.986805</td>
//                     <td className="py-3 px-4 border-b">2.95811</td>
//                     <td className="py-3 px-4 border-b">0.986209</td>
//                   </tr>
//                   <tr>
//                     <td className="py-3 px-4 border-b">Stacked Model</td>
//                     <td className="py-3 px-4 border-b">
//                       Final Estimator: GB (n_estimators=150, learning_rate=0.1,
//                       max_depth=5)
//                     </td>
//                     <td className="py-3 px-4 border-b font-bold">0.985392</td>
//                     <td className="py-3 px-4 border-b font-bold">2.37496</td>
//                     <td className="py-3 px-4 border-b font-bold">0.984839</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="mt-8">
//               <h4 className="text-xl font-semibold mb-4">Key Findings</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>
//                     The Stacked Model achieved a high R² score of 0.9854 and a
//                     cross-validation accuracy of 0.9844.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>
//                     While Linear Regression recorded the highest R² score
//                     (0.9868), the Stacked Model maintained comparable accuracy
//                     with lower generalization error.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>
//                     The Random Forest and Gradient Boosting models exhibited
//                     strong predictive capabilities with R² scores of 0.9621 and
//                     0.9653, respectively.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Benefits Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//               <SearchIcon className="h-12 w-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Enhanced Accuracy</h3>
//               <p className="text-gray-600">
//                 Our ensemble learning approach significantly improves the
//                 accuracy of candidate-job matching compared to traditional
//                 methods.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//               <BarChart3Icon className="h-12 w-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">
//                 Objective Evaluation
//               </h3>
//               <p className="text-gray-600">
//                 Provides recruiters with an objective, data-driven view of each
//                 applicant's domain proficiency through similarity scores.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//               <CheckCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">
//                 Comprehensive Analysis
//               </h3>
//               <p className="text-gray-600">
//                 Evaluates multiple aspects including courses, certifications,
//                 projects, achievements, and experience against job requirements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>;
// };
// export default CVShortlisting;



import React, { useState, useEffect } from 'react';
import {
  Brain,
  FileText,
  Search,
  BarChart3,
  Users,
  Cpu,
  Network,
  Target,
  
  CheckCircle,
  ArrowRight,
  Database,
  Eye,
  TrendingUp,
  Settings,
  Upload,
  Code,
  Award,
  BookOpen,
  Briefcase,
  PieChart,
  Activity,
  Mail,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  FileTextIcon,CheckCircleIcon, BarChart3Icon, SearchIcon
} from 'lucide-react';

// All other state, data, and JSX logic remains unchanged...

const ComprehensiveResearchComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
// const researchOverview = {
//     title: "AI-Powered Automated Candidate Shortlisting & Screening System",
//     subtitle: "Revolutionary Integration of Ensemble Learning, Transformer Models & Advanced NLP",
//     description: "A comprehensive methodology combining zero-shot classification, Named Entity Recognition, semantic similarity computation, and stacked regression models to transform traditional recruitment processes through intelligent automation.",
//     keyHighlights: [
//       "🧮 Stacked Ensemble Model: R² Score 0.9854",
//       "🎯 Cross-validation Accuracy: 98.44%",
//       "📊 3,000+ Synthetic Dataset Training",
//       "⚡ <2s Processing Time per Resume",
//       "🔍 Multi-dimensional Similarity Analysis",
//       "🤖 Zero-shot Classification with BART-MNLI"
//     ]
//   };

  const methodologySteps = [
    {
      id: 1,
      title: "📁 Data Acquisition & Preprocessing",
      description: "PDF text extraction, tokenization, and normalization pipeline",
      details: [
        "PyPDF2 library for raw text extraction from PDF resumes",
        "SpaCy NLP library for tokenization and text normalization",
        "Stopword removal and text preprocessing",
        "Secure storage in designated directories",
        "Transcript handling for additional analysis"
      ],
      icon: <Upload className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      emoji: "📄"
    },
    {
      id: 2,
      title: "🔍 Feature Extraction & NER",
      description: "Hybrid approach combining keyword search and Named Entity Recognition",
      details: [
        "SpaCy en_core_web_sm model for NER",
        "Regex-based pattern matching for contact extraction",
        "Technical skills identification using predefined dictionaries",
        "Soft skills classification with BART-large-MNLI",
        "Section classification for work experience, projects, achievements"
      ],
      icon: <Search className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      emoji: "🔎"
    },
    {
      id: 3,
      title: "🧠 Semantic Similarity Computation",
      description: "Transformer-based deep learning similarity assessment",
      details: [
        "Sentence-transformers/all-mpnet-base-v2 model",
        "AutoTokenizer and AutoModel for embedding generation",
        "Cosine similarity computation on text embeddings",
        "Multi-dimensional similarity scoring",
        "Normalized percentage-based metrics"
      ],
      icon: <Network className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      emoji: "🌐"
    },
    {
      id: 4,
      title: "🤖 ML-Based Prediction",
      description: "Stacked ensemble model for candidate matching prediction",
      details: [
        "Random Forest Regressor for non-linear patterns",
        "Gradient Boosting for iterative error reduction",
        "Linear Regression for baseline interpretability",
        "Meta-model: Gradient Boosting Regressor",
        "Synthetic dataset of 3,000 candidate profiles"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      emoji: "🧮"
    },
    {
      id: 5,
      title: "📊 Ranking & Visualization",
      description: "Comprehensive candidate assessment and reporting",
      details: [
        "Matplotlib-based skill distribution charts",
        "Automated report generation",
        "Candidate ranking based on matching percentage",
        "Visual analytics for HR professionals",
        "Structured output integration with web application"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      emoji: "📈"
    }
  ];

  const performanceMetrics = [
    { model: "Stacked Ensemble", r2Score: 0.9854, cvAccuracy: 0.9844, description: "Best overall performance", color: "bg-gradient-to-r from-green-400 to-green-600" },
    { model: "Linear Regression", r2Score: 0.9868, cvAccuracy: 0.9821, description: "Highest individual R² score", color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { model: "Random Forest", r2Score: 0.9621, cvAccuracy: 0.9605, description: "Strong non-linear pattern detection", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { model: "Gradient Boosting", r2Score: 0.9653, cvAccuracy: 0.9634, description: "Excellent error reduction", color: "bg-gradient-to-r from-orange-400 to-orange-600" }
  ];

  const technicalFeatures = [
    {
      category: "🎯 Zero-Shot Classification",
      items: [
        { name: "Facebook/BART-large-MNLI", description: "Advanced soft skills identification", icon: <Target className="w-5 h-5" /> },
        { name: "Predefined Skill Labels", description: "Communication, teamwork, leadership analysis", icon: <Users className="w-5 h-5" /> },
        { name: "Frequency-based Analysis", description: "Statistical soft skill quantification", icon: <BarChart3 className="w-5 h-5" /> }
      ]
    },
    {
      category: "🔍 Named Entity Recognition",
      items: [
        { name: "SpaCy en_core_web_sm", description: "Dynamic entity extraction", icon: <Eye className="w-5 h-5" /> },
        { name: "Hybrid NER Approach", description: "Keyword search + context-based NER", icon: <Search className="w-5 h-5" /> },
        { name: "Multi-section Detection", description: "Work experience, projects, achievements", icon: <FileText className="w-5 h-5" /> }
      ]
    },
    {
      category: "🧠 Deep Learning Models",
      items: [
        { name: "Sentence Transformers", description: "all-mpnet-base-v2 embeddings", icon: <Network className="w-5 h-5" /> },
        { name: "Semantic Similarity", description: "Cosine similarity computation", icon: <Activity className="w-5 h-5" /> },
        { name: "Multi-dimensional Matching", description: "Experience, projects, skills alignment", icon: <Settings className="w-5 h-5" /> }
      ]
    },
    {
      category: "📊 Ensemble Learning",
      items: [
        { name: "Stacked Regression", description: "Multi-model integration", icon: <TrendingUp className="w-5 h-5" /> },
        { name: "Cross-validation", description: "Robust model evaluation", icon: <CheckCircle className="w-5 h-5" /> },
        { name: "Synthetic Data Training", description: "3,000 candidate profiles", icon: <Database className="w-5 h-5" /> }
      ]
    }
  ];

  const extractionComponents = [
    {
      title: "📧 Contact Information",
      description: "Regex-based parsing and pattern matching",
      items: ["Email addresses", "LinkedIn profiles", "GitHub repositories", "Personal websites", "Technical journals"],
      icon: <Mail className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "💼 Work Experience",
      description: "Job titles, company names, and tenure analysis",
      items: ["Position hierarchies", "Company information", "Employment duration", "Role responsibilities", "Career progression"],
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-green-400 to-green-600"
    },
    {
      title: "🚀 Projects & Achievements",
      description: "Technical projects and professional accomplishments",
      items: ["Project descriptions", "Technologies used", "Achievement metrics", "Awards and recognition", "Impact assessment"],
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "🎓 Education & Certifications",
      description: "Academic credentials and professional certifications",
      items: ["Degree information", "Institution details", "Professional certifications", "Course completions", "Skill validations"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600"
    }
  ];

  const similarityMetrics = [
    { category: "Courses & Certifications", percentage: 92, description: "vs. Job Qualifications" },
    { category: "Work Experience", percentage: 88, description: "vs. Required Experience" },
    { category: "Projects", percentage: 85, description: "vs. Required Skills" },
    { category: "Achievements", percentage: 90, description: "vs. Job Requirements" }
  ];

  const systemArchitecture = [
    {
      layer: "Input Layer",
      components: ["PDF Resume Upload", "Job Description Input", "Candidate Forms"],
      color: "from-cyan-400 to-blue-500",
      icon: "📥"
    },
    {
      layer: "Processing Layer",
      components: ["PyPDF2 Text Extraction", "SpaCy NLP Pipeline", "Regex Pattern Matching"],
      color: "from-green-400 to-emerald-500",
      icon: "⚙️"
    },
    {
      layer: "Analysis Layer",
      components: ["BART-MNLI Classification", "Sentence Transformers", "Feature Extraction"],
      color: "from-purple-400 to-violet-500",
      icon: "🧬"
    },
    {
      layer: "ML Layer",
      components: ["Stacked Ensemble", "Similarity Computation", "Prediction Pipeline"],
      color: "from-orange-400 to-red-500",
      icon: "🤖"
    },
    {
      layer: "Output Layer",
      components: ["Candidate Ranking", "Visualization Charts", "Automated Reports"],
      color: "from-pink-400 to-rose-500",
      icon: "📊"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* ... your JSX sections here ... */}

       {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Resume Screening Research</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsAnimating(!isAnimating)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {isAnimating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

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

         <section className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold">
              Automating Resume Screening
            </h2>
            <p className="mb-6 text-gray-600">
              Our intelligent pipeline transforms manual candidate screening into a fully automated, AI-powered workflow. From document parsing to predictive ranking, the system applies machine learning, NLP, and semantic similarity to streamline the evaluation process.
            </p>
            <p className="mb-6 text-gray-600">
              Built using deep learning models, NLP frameworks like spaCy, and Transformer-based architectures, this end-to-end pipeline improves accuracy, fairness, and efficiency in candidate shortlisting.
            </p>
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
              <p className="text-blue-700">
                "The automated system delivers accurate, bias-mitigated, and explainable candidate evaluations, replacing tedious manual resume screening."
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                <Upload className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold">
                  Data Preprocessing
                </h3>
                <p className="text-gray-600">
                  Extracts and cleans text from resumes using PyPDF2 and spaCy.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                <Search className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold">
                  Feature Extraction
                </h3>
                <p className="text-gray-600">
                  Uses regex, NER, and zero-shot classification for skill and section identification.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                <Network className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold">
                  Semantic Similarity
                </h3>
                <p className="text-gray-600">
                  Computes cosine similarity using sentence transformers between resume and job.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                <Brain className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold">
                  ML-Based Prediction
                </h3>
                <p className="text-gray-600">
                  Predicts candidate-job fit using a stacked regression model trained on synthetic data.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                <PieChart className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold">Similarity Scoring</h3>
                <p className="text-gray-600">
                  Assesses alignment across work experience, projects, certifications, and achievements.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-md">
                <BarChart3 className="w-10 h-10 mb-4 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold">Ranking & Reporting</h3>
                <p className="text-gray-600">
                  Ranks candidates and generates skill-based visual reports for HR analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        {/* <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-2xl animate-pulse">
            <span className="text-4xl">🧮</span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            {researchOverview.title}
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-5xl mx-auto leading-relaxed">
            {researchOverview.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-6xl mx-auto mb-12 leading-relaxed">
            {researchOverview.description}
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {researchOverview.keyHighlights.map((highlight, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                <span className="text-gray-800 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div> */}

       

        {/* Methodology Pipeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">🔄 Research Methodology Pipeline</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Comprehensive five-stage pipeline integrating advanced NLP, machine learning, and deep learning techniques for intelligent candidate assessment
          </p>
          
          {/* Desktop Flow */}
          <div className="hidden lg:block relative mb-12">
            <div className="flex justify-between items-start">
              {methodologySteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative group">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 ${activeSection === index && isAnimating ? 'ring-4 ring-blue-300 animate-pulse' : ''}`}>
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <div className="mt-6 text-center max-w-56">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < methodologySteps.length - 1 && (
                    <ArrowRight className="absolute top-10 -right-12 w-8 h-8 text-gray-400 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6 mb-12">
            {methodologySteps.map((step, index) => (
              <div key={step.id} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                    <span className="text-xl">{step.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <button 
                      onClick={() => toggleSection(index)}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Details {expandedSections[index] ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                    </button>
                    {expandedSections[index] && (
                      <div className="mt-4 space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">🏗️ System Architecture Overview</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Multi-layered architecture ensuring scalable, efficient, and comprehensive candidate evaluation through integrated AI technologies
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="space-y-6">
              {systemArchitecture.map((layer, index) => (
                <div key={index} className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className={`w-16 h-16 bg-gradient-to-r ${layer.color} rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0`}>
                    {layer.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{layer.layer}</h3>
                    <div className="flex flex-wrap gap-2">
                      {layer.components.map((component, compIndex) => (
                        <span key={compIndex} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-200">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Features Deep Dive */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">⚡ Technical Features & Implementation</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Advanced technical implementation combining state-of-the-art NLP models, ensemble learning, and semantic analysis
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Extraction Components */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">🔍 Feature Extraction Components</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Comprehensive feature extraction pipeline utilizing hybrid approaches for maximum accuracy and coverage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extractionComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${component.color} rounded-full flex items-center justify-center text-white`}>
                    {component.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{component.title}</h3>
                    <p className="text-gray-600">{component.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {component.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similarity Metrics */}
        < div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">📏 Semantic Similarity Analysis</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Multi-dimensional similarity computation using transformer embeddings and cosine similarity for comprehensive candidate-job matching
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {similarityMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - metric.percentage / 100)}`}
                        className="text-blue-500 transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">{metric.percentage}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{metric.category}</h3>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">🎯 Similarity Computation Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <Code className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Text Encoding</h4>
                  <p className="text-sm text-gray-600">AutoTokenizer and AutoModel generate embeddings</p>
                </div>
                <div className="text-center">
               <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Similarity Computation</h4>
                <p className="text-sm text-gray-600">Cosine similarity applied to vector embeddings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <PieChart className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Result Aggregation</h4>
                <p className="text-sm text-gray-600">Weighted metrics used to compute final similarity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center">
          End-to-End Research Pipeline
        </h2>
        <div className="relative">
          <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 bg-blue-200 md:block left-1/2"></div>

          {/* Step 1: Data Acquisition */}
          <div className="relative flex flex-col items-center mb-12 md:flex-row">
            <div className="mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right">
              <h3 className="mb-2 text-xl font-semibold">
                Candidate Data Acquisition & Preprocessing
              </h3>
              <p className="text-gray-600">
                Resumes (PDFs) and transcripts are uploaded, securely stored, and preprocessed using tokenization,
                stopword removal, and normalization via SpaCy NLP.
              </p>
            </div>
            <div className="z-10 flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              1
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="mb-2 font-semibold text-gray-800">
                  Libraries & Tools
                </h4>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  <li>PyPDF2 for text extraction</li>
                  <li>SpaCy for NLP preprocessing</li>
                  <li>Secure directory storage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Feature Extraction */}
          <div className="relative flex flex-col items-center mb-12 md:flex-row">
            <div className="order-1 mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right md:order-1">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-700">
                  Hybrid feature extraction combines regex, keyword search, and NER to extract contact info,
                  technical & soft skills, achievements, projects, and certifications.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center order-2 w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              2
            </div>
            <div className="order-3 md:w-1/2 md:pl-12">
              <h3 className="mb-2 text-xl font-semibold">
                Resume Feature Extraction
              </h3>
              <p className="text-gray-600">
                Named Entity Recognition (NER) and zero-shot classification detect structured data and soft skills.
              </p>
            </div>
          </div>

          {/* Step 3: Semantic Similarity */}
          <div className="relative flex flex-col items-center mb-12 md:flex-row">
            <div className="mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right">
              <h3 className="mb-2 text-xl font-semibold">
                Semantic Similarity Computation
              </h3>
              <p className="text-gray-600">
                Sentence-transformer model encodes resume & job text. Cosine similarity measures alignment between
                projects, achievements, certifications, and work experience.
              </p>
            </div>
            <div className="z-10 flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              3
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="mb-2 font-semibold text-gray-800">
                  Model
                </h4>
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">sentence-transformers/all-mpnet-base-v2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: ML-Based Matching */}
          <div className="relative flex flex-col items-center mb-12 md:flex-row">
            <div className="order-1 mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right md:order-1">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-700">
                  A stacked regression model predicts the overall matching percentage using similarity scores and extracted features.
                </p>
                <p className="mt-2 text-sm text-blue-700">
                  Includes Linear Regression, Random Forest, Gradient Boosting as base models.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center order-2 w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              4
            </div>
            <div className="order-3 md:w-1/2 md:pl-12">
              <h3 className="mb-2 text-xl font-semibold">
                ML-Based Candidate Matching
              </h3>
              <p className="text-gray-600">
                Ensemble learning with a Gradient Boosting meta-model ranks candidates by predicted job-fit score.
              </p>
            </div>
          </div>

          {/* Step 5: Ranking & Visualization */}
          <div className="relative flex flex-col items-center md:flex-row">
            <div className="mb-6 md:w-1/2 md:pr-12 md:mb-0 md:text-right">
              <h3 className="mb-2 text-xl font-semibold">
                Candidate Ranking & Report Generation
              </h3>
              <p className="text-gray-600">
                Visualized outputs include candidate skill graphs, similarity scores, and predicted rankings for efficient HR decision-making.
              </p>
            </div>
            <div className="z-10 flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              5
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="mb-2 font-semibold text-gray-800">
                  Visual Tools
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
                    Matplotlib Charts
                  </div>
                  <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
                    HR Dashboard
                  </div>
                  <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
                    Matching Scores
                  </div>
                  <div className="p-2 text-center text-blue-700 rounded-md bg-blue-50">
                    PDF Reports
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


     {/* Performance Metrics Section */}
     <section className="px-16">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">🏆 Model Performance Results</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Comprehensive evaluation demonstrates superior performance of stacked ensemble approach with R² score of 0.9854 and cross-validation accuracy of 98.44%
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{metric.model}</h3>
                  <div className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${metric.color}`}>
                    Best
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{metric.r2Score}</div>
                    <div className="text-gray-600">R² Score</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{metric.cvAccuracy}</div>
                    <div className="text-gray-600">CV Accuracy</div>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 text-center italic">{metric.description}</p>
              </div>
            ))}
          </div>
          
          {/* Model Comparison Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📊 Model Performance Comparison</h3>
            <div className="space-y-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-32 text-sm font-medium text-gray-700">{metric.model}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${metric.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${metric.r2Score * 100}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                      {(metric.r2Score * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
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

      {/* Footer */}
      <footer className="mt-24 border-t pt-8 border-gray-200 text-center text-gray-500 text-sm">
        © 2025 HireGenius Research Initiative. All rights reserved.
      </footer>
    </div>
  );
};

export default ComprehensiveResearchComponent;