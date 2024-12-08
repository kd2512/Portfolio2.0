import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Google Search Clone",
      description: "Google Search clone application made on React. It is used to search for any query just like the google appilcation, and also produces the same results as it uses google search engine API for getting the results.",
      image: "https://krdivyansh.netlify.app/images/Project0.PNG",
      github: "https://github.com/kd2512/Google-Clone",
      demo: "https://clone-126e7.web.app/"
    },
    {
      title: "WhatsApp Clone",
      description: "This is a clone of WhatsApp web version made using React and Redux. WhatsApp Clone clone is built using - React, React-router, Material-UI, React-hooks, Context-API, Javascript - HTML, CSS, Bootstrap",
      image: "https://krdivyansh.netlify.app/images/Project_1.PNG",
      github: "https://github.com/kd2512/whatsApp-clone",
      demo: "https://whaatsapp-clone.web.app/"
    },
    {
      title: "To Do App",
      description: "ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks.",
      image: "https://krdivyansh.netlify.app/images/Project1.PNG",
      github: "https://github.com/kd2512/To-Do-App",
      demo: "https://todobanao.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-dark-card rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-dark-text">{project.title}</h3>
                <p className="text-gray-600 dark:text-dark-text/80 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text"
                  >
                    <Github size={20} className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-dark-text/80 hover:text-gray-900 dark:hover:text-dark-text"
                  >
                    <ExternalLink size={20} className="mr-2" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}