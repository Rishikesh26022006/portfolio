import React from 'react';
import { Brain, Code, Database, Settings, Users, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Generative AI & LLMs", level: 90 },
        { name: "Prompt Engineering", level: 95 },
        { name: "ChatGPT APIs", level: 85 },
        { name: "scikit-learn", level: 80 }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Data Science",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Data Analysis", level: 85 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "HTML/CSS/JavaScript", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "React", level: 70 }
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Google Colab", level: 90 },
        { name: "Jupyter Notebooks", level: 85 },
        { name: "Outskill AI Platform", level: 80 }
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  const softSkills = [
    { name: "Fast Learning", icon: <Zap className="w-5 h-5" /> },
    { name: "Leadership", icon: <Users className="w-5 h-5" /> },
    { name: "Communication", icon: <Users className="w-5 h-5" /> },
    { name: "Problem Solving", icon: <Brain className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-cyan-400">
                  {skill.icon}
                </div>
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;