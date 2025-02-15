import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-5 px-2 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
      
      {/* Apply the correct class to the container */}
      <div className="skills-container">
        <div className="skill-card">
          <h3 className="text-lg font-semibold">Java</h3>
          <p className="text-gray-300">Proficient in object-oriented programming, designing scalable applications, and implementing efficient algorithms for software development and enterprise solutions.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">Spring Boot</h3>
          <p className="text-gray-300">Experienced in building RESTful APIs, microservices, and enterprise applications with dependency injection, security, and efficient request handling.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">Hibernate-Jpa</h3>
          <p className="text-gray-300">Skilled in ORM, database mapping, query optimization, and managing relational data efficiently in Java applications.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">React</h3>
          <p className="text-gray-300">Proficient in building interactive UIs with reusable components, state management, and API integration for dynamic web applications.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">JavaScript</h3>
          <p className="text-gray-300">Strong knowledge of ES6+, DOM manipulation, asynchronous programming, and creating dynamic, responsive web applications.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">HTML & CSS</h3>
          <p className="text-gray-300">Solid understanding of semantic HTML, responsive design, Flexbox, Grid, and modern styling techniques for web development.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">Git & Github</h3>
          <p className="text-gray-300">Experienced in version control, branching, pull requests, and collaborative development workflows for efficient project management.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">MySQL</h3>
          <p className="text-gray-300">Knowledgeable in database design, indexing, querying, normalization, and optimizing performance for scalable applications.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
