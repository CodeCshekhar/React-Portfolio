import React from "react";


const skillsData = [
  { name: "Java", icon: "☕", category: "backend", description: "OOP and enterprise applications", progress: 85 },
  { name: "Spring Boot", icon: "🍃", category: "backend", description: "Scalable web applications", progress: 80 },
  { name: "Python", icon: "🐍", category: "backend", description: "Data processing & backend", progress: 50 },
  { name: "React", icon: "⚛️", category: "frontend", description: "Modern UI development", progress: 30 },
  { name: "JavaScript", icon: "📜", category: "frontend", description: "Frontend & DOM manipulation", progress: 60 },
  { name: "HTML & CSS", icon: "🎨", category: "frontend", description: "Responsive web layouts", progress: 90 },
  { name: "Git & Github", icon: "📚", category: "tools", description: "Version control & collaboration", progress: 80 },
];

function Skills() {
  return (
    <section id="skills">
      <div class="section-content">
      <h2>Skills</h2>
      
      <div className="grid-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            
            <div className={`skill-icon ${skill.category}`}>
              {skill.icon}
            </div>

            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>

            <div className="skill-progress-container">
              <div className="skill-progress-bar" style={{ width: `${skill.progress}%` }}></div>
            </div>

            <p className="skill-progress-text">{skill.progress}%</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Skills;