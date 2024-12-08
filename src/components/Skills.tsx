import React from 'react';

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind", icon: "https://static.cdnlogo.com/logos/t/34/tailwind-css.svg" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "NestJS", icon: "https://static.cdnlogo.com/logos/n/57/nestjs.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Jenkins", icon: "https://static.cdnlogo.com/logos/j/71/jenkins.svg" },
        { name: "Azure", icon: "https://static.cdnlogo.com/logos/m/57/microsoft-azure.svg" },
        { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">Skills & Technologies</h2>
        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-xl font-semibold mb-6 text-center dark:text-dark-text">{category.category}</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center group animate-scaleIn" style={{ animationDelay: `${skillIndex * 100}ms` }}>
                    <div className="w-16 h-16 p-2 bg-white dark:bg-dark-card rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-600 dark:text-dark-text/80 group-hover:text-gray-900 dark:group-hover:text-dark-text">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}