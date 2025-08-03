import React from 'react';
import { ExternalLink, Github, Zap, TrendingUp, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Prompt Builder – GPT Prompt Assistant",
      description: "An intelligent prompt engineering tool that helps users craft effective prompts for GPT models, featuring dynamic templates and optimization suggestions.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["GPT API", "Python", "Streamlit", "NLP"],
      features: ["Prompt Optimization", "Template Library", "AI Integration"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Stock Price Prediction System",
      description: "A machine learning system that predicts stock prices using advanced algorithms and real-time market data analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      technologies: ["Python", "scikit-learn", "Matplotlib", "Pandas"],
      features: ["ML Algorithms", "Data Visualization", "Predictive Analytics"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "eGuruji – Pandit Booking App with AI Muhurta",
      description: "A comprehensive platform connecting users with spiritual advisors, featuring AI-powered auspicious timing calculations.",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["Node.js", "MongoDB", "HTML/CSS", "JavaScript", "AI APIs"],
      features: ["AI Muhurta", "Booking System", "User Authentication"],
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-6`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors duration-300 group">
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors duration-300 group">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;