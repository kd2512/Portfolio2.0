import React from 'react';

export function Experience() {
  const experiences = [
    {
      company: "LTIMindtree",
      position: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Led development of enterprise applications, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      company: "Tata Consultancy Services",
      position: "System Engineer",
      period: "2019 - 2022",
      description: "Developed and maintained multiple client projects using AngularJs and Java."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold dark:text-dark-text">{exp.position}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                </div>
                <span className="text-gray-500 dark:text-dark-text/60">{exp.period}</span>
              </div>
              <p className="text-gray-600 dark:text-dark-text/80">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}