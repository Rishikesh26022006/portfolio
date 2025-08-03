import React from 'react';
import { ArrowDown, Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/WhatsApp Image 2025-08-02 at 14.58.07_c13fd3d8.jpg" 
                  alt="Rishikesh Sonawane"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-md opacity-30 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Rishikesh Sonawane
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp animation-delay-200">
          AI Generalist , Data Scientist & Full Stack Developer
        </p>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp animation-delay-400">
          Innovative and driven AI professional with expertise in Generative AI, Data Science, and Full Stack Development. 
          Passionate about building intelligent solutions that bridge the gap between cutting-edge AI research and practical applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp animation-delay-600">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Explore My Work
          </button>
          
          <a 
            href="#contact"
            className="border border-cyan-500 hover:bg-cyan-500 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6 animate-fadeInUp animation-delay-800">
          <a href="mailto:rishikeshsonawane530@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={32} 
            className="text-cyan-400 cursor-pointer hover:text-purple-500 transition-colors duration-300"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;