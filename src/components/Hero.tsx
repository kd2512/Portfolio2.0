import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Hi, I'm Kumar Divyansh
              <span className="block text-blue-600 dark:text-blue-400">Full Stack Developer</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-dark-text/80 mb-8">
              I build exceptional digital experiences that make people's lives easier.
              With over 5 years of experience in web development, I specialize in creating
              robust and scalable applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center animate-scaleIn"
              >
                Contact Me <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition animate-scaleIn animate-delay-100"
              >
                View Projects
              </a>
            </div>
          </div>
          <div style={{marginLeft: "6rem"}} className="relative animate-fadeIn animate-delay-200">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGkeW9RvpRafg/profile-displayphoto-shrink_400_400/B56ZOm7z7zG8Ag-/0/1733672518921?e=1739404800&v=beta&t=BX1bOiITohLD9bEcZR2iLRTQA8kGzaiLFLkHGQV4vqI"
              alt="Profile"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}