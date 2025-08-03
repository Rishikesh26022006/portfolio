import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            
            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-slate-900 relative z-10">
                  <Building className="w-8 h-8 text-white" />
                </div>
                
                <div className="ml-8 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      AI & Data Science Intern
                    </h3>
                    <div className="flex items-center text-cyan-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      June 2025 – Dec 2025
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-400 mb-6">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="font-semibold">Labmentix Pvt. Ltd.</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        Engineered machine learning models for advanced pattern analysis, improving data processing efficiency by 40%
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        Delivered actionable insights from complex datasets using Python and data visualization tools
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        Collaborated with cross-functional teams on AI-powered internal tools and automation systems
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Machine Learning", "Python", "Data Analysis", "AI Tools", "Team Collaboration"].map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;