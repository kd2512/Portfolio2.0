import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fadeIn">
            <h3 className="text-xl font-bold">Kumar Divyansh</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6 animate-fadeIn animate-delay-100">
            <a href="https://github.com/kd2512" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-110 transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/kd2512" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-110 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:krdivyansh2596@gmail.com" className="hover:text-blue-400 transform hover:scale-110 transition-all">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 animate-fadeIn animate-delay-200">
          <p> {new Date().getFullYear()} Kumar Divyansh. No &copy; Copyright issues..</p>
        </div>
      </div>
    </footer>
  );
}