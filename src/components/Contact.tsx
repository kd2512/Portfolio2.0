import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4 dark:text-dark-text">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span className="dark:text-dark-text">krdivyansh2596@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span className="dark:text-dark-text">+91-9455604450</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span className="dark:text-dark-text">Bangalore, KA, India</span>
              </div>
            </div>
          </div>
          <form className="space-y-4 animate-fadeIn animate-delay-200">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text/80 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-dark-text"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text/80 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-dark-text"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text/80 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-dark-text"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}