import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Github, Video, Gamepad2, ArrowRight, BrainCircuit, BarChart3, Clock, CheckCircle, Star, Zap, Shield, ArrowRightIcon, ZapIcon } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "CV Shortlisting",
      description: "Automated resume screening using NLP and ensemble learning to rank candidates.",
      link: "/cv-shortlisting",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      title: "Profile Evaluation",
      description: "Analysis of GitHub, LinkedIn, and academic transcripts for comprehensive assessment.",
      link: "/profile-evaluation",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: Video,
      title: "Automated Interview",
      description: "AI-powered interviews with facial expression analysis and text response evaluation.",
      link: "/automated-interview",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Gamepad2,
      title: "Gamified HR",
      description: "Interactive HR interview experience with candidate classification and scoring.",
      link: "/gamified-hr",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Make hiring decisions based on objective metrics and AI-powered analysis rather than subjective impressions.",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Dramatically reduce the time spent on resume screening and preliminary interviews with automation.",
      color: "text-cyan-600"
    },
    {
      icon: CheckCircle,
      title: "Reduced Bias",
      description: "Minimize human bias in the hiring process with standardized, AI-powered evaluation methods.",
      color: "text-teal-600"
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bg-blue-100 rounded-full top-20 left-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute rounded-full top-40 right-10 w-72 h-72 bg-cyan-100 mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bg-teal-100 rounded-full bottom-20 left-1/3 w-72 h-72 mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              >
                <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:flex-row">
            <div className={`lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Recruiting Revolution
              </div>
              
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
                <span className="text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
                  HireGenius
                </span>
                <br />
                <span className="text-3xl font-medium lg:text-4xl">
                  Smart Recruiting
                </span>
              </h1>
              
              <p className="mb-8 text-xl leading-relaxed text-blue-100 lg:text-2xl">
                An automated interviewing system for software engineers that
                streamlines the hiring process using artificial intelligence.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link 
                  to="/about" 
                  className="flex items-center justify-center px-8 py-4 font-semibold text-blue-700 transition-all duration-300 transform bg-white group rounded-xl hover:bg-blue-50 hover:scale-105 hover:shadow-2xl"
                >
                  Discover More
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-transparent border-2 group border-white/30 backdrop-blur-sm rounded-xl hover:bg-white/10 hover:scale-105"
                >
                  Start Your Journey
                  <Star className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
                </Link>
              </div>
            </div>
            
            <div className={`lg:w-1/2 flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 filter blur-3xl opacity-30 animate-pulse"></div>
                <BrainCircuit className="relative text-white w-80 h-80 lg:w-96 lg:h-96 drop-shadow-2xl animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 font-medium text-blue-700 bg-blue-100 rounded-full">
              <Shield className="w-4 h-4 mr-2" />
              Comprehensive System
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Four Powerful Components
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              HireGenius integrates cutting-edge AI technology to identify the
              best software engineering talent through multiple evaluation layers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isActive ? 'scale-105 shadow-2xl' : ''}`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r group-hover:opacity-10 rounded-2xl"></div>
                  
                  <div className="relative p-8">
                    <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {feature.title}
                    </h3>
                    
                    <p className="mb-6 leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                    
                    <Link 
                      to={feature.link} 
                      className="inline-flex items-center font-semibold text-blue-600 transition-all duration-300 hover:text-blue-800 group-hover:translate-x-1"
                    >
                      Explore Feature
                      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0 transform scale-150 bg-gradient-to-r from-blue-600 to-cyan-600 rotate-6"></div>
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Why Choose HireGenius?
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              Our system offers significant advantages over traditional
              recruitment methods through advanced AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 text-center transition-all duration-500 transform bg-white shadow-lg group rounded-3xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="relative mb-8">
                    <div className="absolute inset-0 transition-opacity duration-300 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 filter blur-lg opacity-20 group-hover:opacity-40"></div>
                    <div className="relative p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  
                  <p className="leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 rounded-full top-10 left-10 bg-cyan-400 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-blue-400 rounded-full bottom-10 right-10 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
            Ready to revolutionize
            <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
              your hiring process?
            </span>
          </h2>
          
          <p className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed text-blue-100 lg:text-2xl">
            Learn how HireGenius can help you find the best software engineering
            talent efficiently and effectively with cutting-edge AI technology.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link 
              to="/contact" 
              className="flex items-center px-10 py-5 text-lg font-bold text-blue-700 transition-all duration-300 transform bg-white group rounded-xl hover:bg-blue-50 hover:scale-105 hover:shadow-2xl"
            >
              Contact Us Today
              <ZapIcon className="w-6 h-6 ml-3 transition-transform group-hover:rotate-12" />
            </Link>
            
            <div className="flex items-center space-x-4 text-blue-200">
              <span className="text-sm">Join 500+ companies already using HireGenius</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;