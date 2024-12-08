import React from 'react';
import { Menu, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-gray-800 dark:text-dark-text animate-slideIn">
          Kumar Divyansh
        </a>
        <div className="hidden md:flex space-x-8 animate-fadeIn">
          <a href="#about" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">About</a>
          <a href="#skills" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">Skills</a>
          <a href="#experience" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">Experience</a>
          <a href="#projects" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">Projects</a>
          <a href="#contact" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">Contact</a>
        </div>
        <div className="flex items-center space-x-4 animate-fadeIn animate-delay-200">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="https://github.com/kd2512" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/kd2512" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">
            <Linkedin size={20} />
          </a>
          <a href="mailto:krdivyansh2596@gmail.com" className="text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text">
            <Mail size={20} />
          </a>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}