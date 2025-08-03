import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech – Artificial Intelligence and Data Science",
      institution: "Engineering College",
      duration: "2023 – 2027",
      gpa: "8.56/10",
      status: "Current",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "High School",
      duration: "2023",
      gpa: "80.67%",
      status: "Completed",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Secondary School",
      duration: "2021",
      gpa: "93.64%",
      status: "Completed",
      icon: <Star className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const certifications = [
    {
      title: "Mastering Generative AI",
      provider: "Outskill AI",
      year: "2025",
      verified: true
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-cyan-400 mr-3" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start md:items-center mb-4 md:mb-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} mr-4 flex-shrink-0`}>
                        <div className="text-white">
                          {edu.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-gray-400">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center justify-end mb-2">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          edu.status === 'Current' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-cyan-400 font-semibold text-lg">{edu.gpa}</p>
                      <p className="text-gray-400 text-sm">{edu.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              Professional Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    {cert.verified && (
                      <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-purple-400 font-medium mb-1">{cert.provider}</p>
                  <p className="text-gray-400 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;