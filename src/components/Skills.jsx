import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-5 px-2 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="skill-card">
          <h3 className="text-lg font-semibold">Java</h3>
          <p className="text-gray-300">Proficient in Java programming and object-oriented design.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">Spring Boot</h3>
          <p className="text-gray-300">Experience in building RESTful APIs and microservices.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">Hibernate</h3>
          <p className="text-gray-300">Skilled in ORM and database management.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">JavaScript</h3>
          <p className="text-gray-300">Proficient in JavaScript and modern frameworks like React.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">HTML & CSS</h3>
          <p className="text-gray-300">Strong understanding of web development standards.</p>
        </div>
        <div className="skill-card">
          <h3 className="text-lg font-semibold">MySQL</h3>
          <p className="text-gray-300">Experience in database design and management.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
