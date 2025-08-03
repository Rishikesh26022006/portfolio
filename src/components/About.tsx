import React from 'react';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Innovation",
      description: "Specializing in Generative AI and LLM integration for real-world applications"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern web technologies"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Extracting insights and building predictive models from complex datasets"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Fast learner with strong analytical and leadership capabilities"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Innovative and driven AI Generalist with a strong foundation in Generative AI, Data Science, and Full Stack Development. 
              I'm passionate about leveraging cutting-edge technologies to solve complex problems and create meaningful impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently pursuing B.Tech in Artificial Intelligence and Data Science with a stellar 8.56/10 GPA, I combine academic excellence 
              with practical experience gained through internships and hands-on projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans from prompt engineering and LLM integration to building scalable web applications and predictive ML models. 
              I thrive in collaborative environments and am always eager to learn and adapt to emerging technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-cyan-400 mb-4 transform transition-transform duration-300 hover:scale-110">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{highlight.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;