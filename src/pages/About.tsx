// import React from "react";
// import {
//   Users,
//   BookOpen,
//   GraduationCap,
//   ArrowUpRight,
//   Sparkles,
//   Brain,
//   Code,
//   Database,
//   Palette,
//   Server,
//   ArrowUpRightIcon,
// } from "lucide-react";

// const About = () => {
//   return (
//     <div className="w-full overflow-hidden bg-gray-50">
//       {/* Hero Section with Floating Elements */}
//       <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute w-32 h-32 bg-white rounded-full top-20 left-10 bg-opacity-5 animate-pulse"></div>
//           <div className="absolute w-24 h-24 bg-white rounded-full top-40 right-20 bg-opacity-10 animate-bounce"></div>
//           <div className="absolute w-16 h-16 bg-blue-300 rounded-full bottom-20 left-1/4 bg-opacity-20 animate-pulse"></div>
//           <div className="absolute w-20 h-20 bg-white rounded-full top-1/3 right-1/3 bg-opacity-5 animate-ping"></div>
//         </div>

//         <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center text-center">
//             <div className="relative mb-8">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-200 animate-spin opacity-20"></div>
//               </div>
//               <Users className="relative w-20 h-20 mb-2 animate-bounce" />
//               <Sparkles className="absolute w-8 h-8 text-yellow-300 -top-2 -right-2 animate-pulse" />
//             </div>
//             <h1 className="mb-6 text-6xl font-black text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
//               About HireGenius
//             </h1>
//             <p className="max-w-4xl text-2xl leading-relaxed text-blue-100">
//               Discover our revolutionary AI-powered research in automated
//               interviewing for software engineers
//             </p>
//             <div className="flex mt-8 space-x-4">
//               <div className="px-6 py-3 text-sm font-medium bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
//                 🚀 Research Innovation
//               </div>
//               <div className="px-6 py-3 text-sm font-medium bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
//                 🤖 AI Technology
//               </div>
//               <div className="px-6 py-3 text-sm font-medium bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
//                 💡 Smart Solutions
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Overview with Cards */}
//       <section className="relative py-20">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
//             <div className="space-y-8">
//               <div className="relative">
//                 <h2 className="mb-8 text-5xl font-black text-gray-900">
//                   Project
//                   <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
//                     Overview
//                   </span>
//                 </h2>
//                 <div className="absolute w-12 h-12 bg-blue-100 rounded-full opacity-50 -top-4 -left-4"></div>
//               </div>

//               <div className="space-y-6">
//                 <div className="p-6 transition-all duration-300 bg-white border-l-4 border-blue-600 shadow-lg group rounded-2xl hover:shadow-xl">
//                   <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
//                     🎯 The Challenge
//                   </h3>
//                   <p className="leading-relaxed text-gray-600">
//                     Traditional manual screening methods are time-consuming,
//                     subjective, and inconsistent. For software engineering
//                     roles, thorough assessment of programming skills, academic
//                     performance, and personality traits is essential.
//                   </p>
//                 </div>

//                 <div className="p-6 transition-all duration-300 bg-white border-l-4 border-blue-700 shadow-lg group rounded-2xl hover:shadow-xl">
//                   <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
//                     🧠 Our Solution
//                   </h3>
//                   <p className="leading-relaxed text-gray-600">
//                     HireGenius leverages artificial intelligence, natural
//                     language processing, and deep learning to create a
//                     comprehensive solution that evaluates candidates across
//                     multiple dimensions.
//                   </p>
//                 </div>

//                 <div className="p-6 transition-all duration-300 bg-white border-l-4 border-blue-800 shadow-lg group rounded-2xl hover:shadow-xl">
//                   <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
//                     🚀 The Impact
//                   </h3>
//                   <p className="leading-relaxed text-gray-600">
//                     Our system provides a more accurate and efficient hiring
//                     process, revolutionizing how companies identify and recruit
//                     qualified technical talent.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Research Publication Card */}
//             <div className="relative">
//               <div className="sticky top-8">
//                 <div className="p-8 border border-gray-100 shadow-2xl bg-gradient-to-br from-gray-50 to-white rounded-3xl">
//                   <div className="flex items-center mb-6">
//                     <div className="p-3 mr-4 bg-blue-100 rounded-xl">
//                       <BookOpen className="w-8 h-8 text-blue-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">
//                       Research Publication
//                     </h3>
//                   </div>

//                   <div className="p-6 mb-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
//                     <h4 className="mb-3 text-lg font-bold text-gray-900">
//                       HireGenius: Automated Interviewing System for Software
//                       Engineers
//                     </h4>
//                     <p className="mb-3 text-sm text-gray-600">
//                       N. A. Hewamadduma, G. K. Nalinka, N. T. M. A. S. M.
//                       Mahawaththa, S. R.T.L Rosa, D. I. De Silva, P. Gunathilake
//                     </p>
//                     <p className="mb-3 text-sm text-gray-500">
//                       Sri Lanka Institute of Information Technology, Malabe, Sri
//                       Lanka
//                     </p>
//                     <div className="flex items-center text-sm font-medium text-blue-600">
//                       <span>📧 nuwandihewamadduma@gmail.com</span>
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="mb-4 text-lg font-bold text-gray-900">
//                       Research Focus Areas
//                     </h4>
//                     <div className="grid grid-cols-1 gap-3">
//                       {[
//                         {
//                           icon: "🧠",
//                           text: "Machine Learning & Deep Learning",
//                         },
//                         { icon: "💬", text: "Natural Language Processing" },
//                         { icon: "🔗", text: "Ensemble Learning" },
//                         { icon: "👥", text: "Human-Computer Interaction" },
//                       ].map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center p-3 transition-colors bg-blue-50 rounded-xl hover:bg-blue-100"
//                         >
//                           <span className="mr-3 text-xl">{item.icon}</span>
//                           <span className="font-medium text-gray-700">
//                             {item.text}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="mb-16 text-center">
//             <h2 className="mb-4 text-5xl font-black text-gray-900">
//               Meet Our
//               <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
//                 Research Team
//               </span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-xl text-gray-600">
//               Brilliant minds working together to revolutionize AI-powered
//               recruitment
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 initials: "NH",
//                 name: "N. A. Hewamadduma",
//                 role: "Lead Researcher",
//                 description:
//                   "Specialized in machine learning models and system architecture design.",
//                 email: "nuwandihewamadduma@gmail.com",
//                 icon: Brain,
//                 gradient: "from-blue-500 to-blue-700",
//               },
//               {
//                 initials: "GK",
//                 name: "G. K. Nalinka",
//                 role: "NLP Specialist",
//                 description:
//                   "Focused on natural language processing and text analysis components.",
//                 email: "#",
//                 icon: Code,
//                 gradient: "from-blue-600 to-blue-800",
//               },
//               {
//                 initials: "NM",
//                 name: "N. T. M. A. S. M. Mahawaththa",
//                 role: "Data Scientist",
//                 description:
//                   "Specialized in data analysis and ensemble learning techniques.",
//                 email: "#",
//                 icon: Database,
//                 gradient: "from-blue-500 to-blue-700",
//               },
//               {
//                 initials: "SR",
//                 name: "S. R.T.L Rosa",
//                 role: "UI/UX Designer",
//                 description:
//                   "Led the development of the gamified interview experience and interface design.",
//                 email: "#",
//                 icon: Palette,
//                 gradient: "from-blue-600 to-blue-800",
//               },
//               {
//                 initials: "DD",
//                 name: "D. I. De Silva",
//                 role: "Professor",
//                 description:
//                   "Responsible for system integration and database management.",
//                 email: "#",
//                 icon: Server,
//                 gradient: "from-blue-500 to-blue-700",
//               },
//               {
//                 initials: "PG",
//                 name: "P. Gunathilake",
//                 role: "Research Supervisor",
//                 description:
//                   "Faculty supervisor providing guidance and academic oversight.",
//                 email: "#",
//                 icon: GraduationCap,
//                 gradient: "from-blue-600 to-blue-800",
//               },
//             ].map((member, index) => (
//               <div key={index} className="group">
//                 <div className="p-8 transition-all duration-500 transform bg-white border border-gray-100 shadow-lg rounded-3xl hover:shadow-2xl hover:-translate-y-2">
//                   <div className="flex flex-col items-center mb-6">
//                     <div className="relative mb-4">
//                       <div
//                         className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
//                       >
//                         <span className="text-xl font-bold text-white">
//                           {member.initials}
//                         </span>
//                       </div>
//                       <div className="absolute -top-2 -right-2">
//                         <member.icon className="w-6 h-6 p-1 text-blue-600 bg-white rounded-full shadow-lg" />
//                       </div>
//                     </div>
//                     <h3 className="mb-2 text-xl font-bold text-center text-gray-900">
//                       {member.name}
//                     </h3>
//                     <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
//                       {member.role}
//                     </span>
//                   </div>

//                   <p className="mb-6 leading-relaxed text-center text-gray-600">
//                     {member.description}
//                   </p>

//                   <div className="flex justify-center space-x-4">
//                     <a
//                       href={member.email}
//                       className="flex items-center px-4 py-2 text-sm font-medium text-blue-700 transition-colors bg-blue-50 rounded-xl hover:bg-blue-100"
//                     >
//                       Email
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-50 rounded-xl hover:bg-gray-100"
//                     >
//                       LinkedIn
//                       <ArrowUpRight className="w-4 h-4 ml-1" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Institution Section */}
//       <section className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-blue-600 to-blue-800">
//         <div className="absolute inset-0">
//           <div className="absolute w-40 h-40 bg-white rounded-full top-10 left-10 bg-opacity-5"></div>
//           <div className="absolute w-32 h-32 bg-blue-300 rounded-full bottom-10 right-10 bg-opacity-20"></div>
//           <div className="absolute w-24 h-24 bg-white rounded-full top-1/2 left-1/4 bg-opacity-10"></div>
//         </div>

//         <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center text-center">
//             <div className="relative mb-8">
//               <div className="flex items-center justify-center w-24 h-24 mb-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm">
//                 <GraduationCap className="w-12 h-12" />
//               </div>
//             </div>
//             <h2 className="mb-6 text-5xl font-black">Research Institution</h2>
//             <p className="max-w-4xl mb-12 text-2xl leading-relaxed text-blue-100">
//               This groundbreaking research was conducted at the Sri Lanka
//               Institute of Information Technology (SLIIT), a leading
//               technology-focused higher education institution.
//             </p>

//             <div className="w-full max-w-4xl p-10 bg-white border border-white shadow-2xl bg-opacity-15 rounded-3xl backdrop-blur-lg border-opacity-20">
//               <h3 className="mb-6 text-3xl font-bold">
//                 Sri Lanka Institute of Information Technology
//               </h3>
//               <p className="mb-8 text-lg leading-relaxed text-blue-100">
//                 SLIIT is dedicated to advancing research in computing,
//                 engineering, and information technology fields, with a focus on
//                 developing practical solutions to real-world problems.
//               </p>
//               <div className="flex justify-center">
//                 <a
//                   href="https://www.sliit.lk"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-8 py-4 font-bold text-blue-700 transition-all duration-300 transform bg-white shadow-lg group rounded-2xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
//                 >
//                   Visit Institution Website
//                   <ArrowUpRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-45" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Future Research */}
//       <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
//         <div className="absolute inset-0">
//           <div className="absolute w-32 h-32 bg-white rounded-full top-20 right-20 bg-opacity-5 animate-pulse"></div>
//           <div className="absolute w-24 h-24 bg-blue-300 rounded-full bottom-20 left-20 bg-opacity-20 animate-bounce"></div>
//         </div>

//         <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//           <div className="mb-16">
//             <h2 className="mb-6 text-5xl font-black">
//               Future Research
//               <span className="text-transparent bg-gradient-to-r from-blue-200 to-white bg-clip-text">
//                 Directions
//               </span>
//             </h2>
//             <p className="max-w-4xl mx-auto text-2xl leading-relaxed text-blue-100">
//               Our team is committed to pushing the boundaries of AI-powered
//               recruitment systems
//             </p>
//           </div>

//           <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
//             {[
//               {
//                 icon: "🌐",
//                 title: "Expanded Career Paths",
//                 description:
//                   "Extending our system to support cybersecurity, data science, and cloud computing roles.",
//               },
//               {
//                 icon: "⚡",
//                 title: "Enhanced Skill Analysis",
//                 description:
//                   "Improving assessment of technical and soft skills through sophisticated AI models.",
//               },
//               {
//                 icon: "🎯",
//                 title: "Adaptive Questioning",
//                 description:
//                   "Dynamic question generation based on real-time candidate performance analysis.",
//               },
//               {
//                 icon: "🗣️",
//                 title: "Multilingual Support",
//                 description:
//                   "Developing capabilities to support multiple languages for global recruitment.",
//               },
//             ].map((item, index) => (
//               <div key={index} className="group">
//                 <div className="p-8 transition-all duration-300 transform bg-white border border-white bg-opacity-10 rounded-3xl backdrop-blur-lg border-opacity-20 hover:bg-opacity-20 hover:-translate-y-2">
//                   <div className="mb-4 text-4xl">{item.icon}</div>
//                   <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-200">
//                     {item.title}
//                   </h3>
//                   <p className="text-lg leading-relaxed text-blue-100">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import {
  Users,
  BookOpen,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  Brain,
  Code,
  Database,
  Palette,
  Server,
} from "lucide-react";

import Image01 from "../components/assests/Nuwandi.jpg";
import Image02 from "../components/assests/kushan.jpg";
import Image03 from "../components/assests/poojani.jpg";
import Image04 from "../components/assests/sewmini.jpg";
import Image05 from "../components/assests/rishen.jpg";
import Image06 from "../components/assests/dilshan.jpg";

const About = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-50">
      {/* Hero Section with Floating Elements */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 bg-white rounded-full top-20 left-10 bg-opacity-5 animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-white rounded-full top-40 right-20 bg-opacity-10 animate-bounce"></div>
          <div className="absolute w-16 h-16 bg-blue-300 rounded-full bottom-20 left-1/4 bg-opacity-20 animate-pulse"></div>
          <div className="absolute w-20 h-20 bg-white rounded-full top-1/3 right-1/3 bg-opacity-5 animate-ping"></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-200 animate-spin opacity-20"></div>
              </div>
              <Users className="relative w-20 h-20 mb-2 animate-bounce" />
              <Sparkles className="absolute w-8 h-8 text-yellow-300 -top-2 -right-2 animate-pulse" />
            </div>
            <h1 className="mb-6 text-6xl font-black text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
              About HireGenius
            </h1>
            <p className="max-w-4xl text-2xl leading-relaxed text-blue-100">
              Discover our revolutionary AI-powered research in automated
              interviewing for software engineers
            </p>
            <div className="flex mt-8 space-x-4">
              <div className="px-6 py-3 text-sm font-medium bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
                🚀 Research Innovation
              </div>
              <div className="px-6 py-3 text-sm font-medium bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
                🤖 AI Technology
              </div>
              <div className="px-6 py-3 text-sm font-medium bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
                💡 Smart Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview with Cards */}
      <section className="relative py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="mb-8 text-5xl font-black text-gray-900">
                  Project
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
                    Overview
                  </span>
                </h2>
                <div className="absolute w-12 h-12 bg-blue-100 rounded-full opacity-50 -top-4 -left-4"></div>
              </div>

              <div className="space-y-6">
                <div className="p-6 transition-all duration-300 bg-white border-l-4 border-blue-600 shadow-lg group rounded-2xl hover:shadow-xl">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    🎯 The Challenge
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    Traditional manual screening methods are time-consuming,
                    subjective, and inconsistent. For software engineering
                    roles, thorough assessment of programming skills, academic
                    performance, and personality traits is essential.
                  </p>
                </div>

                <div className="p-6 transition-all duration-300 bg-white border-l-4 border-blue-700 shadow-lg group rounded-2xl hover:shadow-xl">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    🧠 Our Solution
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    HireGenius leverages artificial intelligence, natural
                    language processing, and deep learning to create a
                    comprehensive solution that evaluates candidates across
                    multiple dimensions.
                  </p>
                </div>

                <div className="p-6 transition-all duration-300 bg-white border-l-4 border-blue-800 shadow-lg group rounded-2xl hover:shadow-xl">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    🚀 The Impact
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    Our system provides a more accurate and efficient hiring
                    process, revolutionizing how companies identify and recruit
                    qualified technical talent.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Publication Card */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="p-8 border border-gray-100 shadow-2xl bg-gradient-to-br from-gray-50 to-white rounded-3xl">
                  <div className="flex items-center mb-6">
                    <div className="p-3 mr-4 bg-blue-100 rounded-xl">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Research Publication
                    </h3>
                  </div>

                  <div className="p-6 mb-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
                    <h4 className="mb-3 text-lg font-bold text-gray-900">
                      HireGenius: Automated Interviewing System for Software
                      Engineers
                    </h4>
                    <p className="mb-3 text-sm text-gray-600">
                      N. A. Hewamadduma, G. K. Nalinka, N. T. M. A. S. M.
                      Mahawaththa, S. R.T.L Rosa, D. I. De Silva, P. Gunathilake
                    </p>
                    <p className="mb-3 text-sm text-gray-500">
                      Sri Lanka Institute of Information Technology, Malabe, Sri
                      Lanka
                    </p>
                    <div className="flex items-center text-sm font-medium text-blue-600">
                      <span>📧 nuwandihewamadduma@gmail.com</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-lg font-bold text-gray-900">
                      Research Focus Areas
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        {
                          icon: "🧠",
                          text: "Machine Learning & Deep Learning",
                        },
                        { icon: "💬", text: "Natural Language Processing" },
                        { icon: "🔗", text: "Ensemble Learning" },
                        { icon: "👥", text: "Human-Computer Interaction" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 transition-colors bg-blue-50 rounded-xl hover:bg-blue-100"
                        >
                          <span className="mr-3 text-xl">{item.icon}</span>
                          <span className="font-medium text-gray-700">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-black text-gray-900">
              Meet Our
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
                Research Team
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Brilliant minds working together to revolutionize AI-powered
              recruitment
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                initials: "NH",
                name: "N. A. Hewamadduma",
                role: "Researcher",
                description:
                  "Specialized in machine learning models and system architecture design.",
                email: "nuwandihewamadduma@gmail.com",
                icon: Brain,
                gradient: "from-blue-500 to-blue-700",
                image: Image01,
              },
              {
                initials: "GK",
                name: "G. K. Nalinka",
                role: "Researcher",
                description:
                  "Focused on natural language processing and text analysis components.",
                email: "#",
                icon: Code,
                gradient: "from-blue-600 to-blue-800",
                image: Image02,
              },
              {
                initials: "NM",
                name: "N. T. M. A. S. M. Mahawaththa",
                role: "Researcher",
                description:
                  "Specialized in data analysis and ensemble learning techniques.",
                email: "#",
                icon: Database,
                gradient: "from-blue-500 to-blue-700",
                image: Image04,
              },
              {
                initials: "SR",
                name: "S. R.T.L Rosa",
                role: "Researcher",
                description:
                  "Led the development of the gamified interview experience and interface design.",
                email: "#",
                icon: Palette,
                gradient: "from-blue-600 to-blue-800",
                image: Image05,
              },
              {
                initials: "DD",
                name: "D. I. De Silva",
                role: "Professor",
                description:
                  "Responsible for system integration and database management.",
                email: "#",
                icon: Server,
                gradient: "from-blue-500 to-blue-700",
                image: Image06,
              },
              {
                initials: "PG",
                name: "P. Gunathilake",
                role: "Research Supervisor",
                description:
                  "Faculty supervisor providing guidance and academic oversight.",
                email: "#",
                icon: GraduationCap,
                gradient: "from-blue-600 to-blue-800",
                image: Image03,
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="p-8 transition-all duration-500 transform bg-white border border-gray-100 shadow-lg rounded-3xl hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      <div className="relative w-20 h-20 mb-3 overflow-hidden rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to gradient background with initials if image fails to load
                            // e.target.style.display = "none";
                            // e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div
                          className={`absolute inset-0 w-full h-full bg-gradient-to-br ${member.gradient} items-center justify-center text-xl font-bold text-white hidden`}
                        >
                          {member.initials}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <member.icon className="w-6 h-6 p-1 text-blue-600 bg-white rounded-full shadow-lg" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-center text-gray-900">
                      {member.name}
                    </h3>
                    <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                      {member.role}
                    </span>
                  </div>

                  <p className="mb-6 leading-relaxed text-center text-gray-600">
                    {member.description}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.email}
                      className="flex items-center px-4 py-2 text-sm font-medium text-blue-700 transition-colors bg-blue-50 rounded-xl hover:bg-blue-100"
                    >
                      Email
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-50 rounded-xl hover:bg-gray-100"
                    >
                      LinkedIn
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institution Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute w-40 h-40 bg-white rounded-full top-10 left-10 bg-opacity-5"></div>
          <div className="absolute w-32 h-32 bg-blue-300 rounded-full bottom-10 right-10 bg-opacity-20"></div>
          <div className="absolute w-24 h-24 bg-white rounded-full top-1/2 left-1/4 bg-opacity-10"></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="flex items-center justify-center w-24 h-24 mb-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm">
                <GraduationCap className="w-12 h-12" />
              </div>
            </div>
            <h2 className="mb-6 text-5xl font-black">Research Institution</h2>
            <p className="max-w-4xl mb-12 text-2xl leading-relaxed text-blue-100">
              This groundbreaking research was conducted at the Sri Lanka
              Institute of Information Technology (SLIIT), a leading
              technology-focused higher education institution.
            </p>

            <div className="w-full max-w-4xl p-10 bg-white border border-white shadow-2xl bg-opacity-15 rounded-3xl backdrop-blur-lg border-opacity-20">
              <h3 className="mb-6 text-3xl font-bold">
                Sri Lanka Institute of Information Technology
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-blue-100">
                SLIIT is dedicated to advancing research in computing,
                engineering, and information technology fields, with a focus on
                developing practical solutions to real-world problems.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.sliit.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-8 py-4 font-bold text-blue-700 transition-all duration-300 transform bg-white shadow-lg group rounded-2xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
                >
                  Visit Institution Website
                  <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Research */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 bg-white rounded-full top-20 right-20 bg-opacity-5 animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-blue-300 rounded-full bottom-20 left-20 bg-opacity-20 animate-bounce"></div>
        </div>

        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="mb-6 text-5xl font-black">
              Future Research
              <span className="text-transparent bg-gradient-to-r from-blue-200 to-white bg-clip-text">
                Directions
              </span>
            </h2>
            <p className="max-w-4xl mx-auto text-2xl leading-relaxed text-blue-100">
              Our team is committed to pushing the boundaries of AI-powered
              recruitment systems
            </p>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            {[
              {
                icon: "🌐",
                title: "Expanded Career Paths",
                description:
                  "Extending our system to support cybersecurity, data science, and cloud computing roles.",
              },
              {
                icon: "⚡",
                title: "Enhanced Skill Analysis",
                description:
                  "Improving assessment of technical and soft skills through sophisticated AI models.",
              },
              {
                icon: "🎯",
                title: "Adaptive Questioning",
                description:
                  "Dynamic question generation based on real-time candidate performance analysis.",
              },
              {
                icon: "🗣️",
                title: "Multilingual Support",
                description:
                  "Developing capabilities to support multiple languages for global recruitment.",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="p-8 transition-all duration-300 transform bg-white border border-white bg-opacity-10 rounded-3xl backdrop-blur-lg border-opacity-20 hover:bg-opacity-20 hover:-translate-y-2">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-200">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-blue-100">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
