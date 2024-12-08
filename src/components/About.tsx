import React from 'react';
import { Code, Globe, Database, FileDown } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-xl animate-fadeIn hover:transform hover:scale-105 transition-all duration-300">
            <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-dark-text">Frontend Development</h3>
            <p className="text-gray-600 dark:text-dark-text/80">
              Experienced in React, TypeScript, and modern CSS frameworks like Tailwind.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-xl animate-fadeIn animate-delay-100 hover:transform hover:scale-105 transition-all duration-300">
            <Database className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-dark-text">Backend Development</h3>
            <p className="text-gray-600 dark:text-dark-text/80">
              Proficient in Node.js, Nestjs Express, and database management with MongoDb.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-xl animate-fadeIn animate-delay-200 hover:transform hover:scale-105 transition-all duration-300">
            <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-dark-text">API Development</h3>
            <p className="text-gray-600 dark:text-dark-text/80">
              Skilled in designing and implementing RESTful APIs and GraphQL services.
            </p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 bg-gray-50 dark:bg-dark-card rounded-xl animate-fadeIn animate-delay-300">
            <h3 className="text-xl font-semibold mb-4 dark:text-dark-text">Download My Resume</h3>
            <p className="text-gray-600 dark:text-dark-text/80 mb-6">
              Get a detailed overview of my skills, experience, and qualifications.
            </p>
            <a
              href="https://drive.google.com/file/d/1hwCKz8XREkav6X3Ho49FxIlV70EQUo--/view?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FileDown className="mr-2" size={20} />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}