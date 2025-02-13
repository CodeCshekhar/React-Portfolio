import React from "react";

function Objectives() {
  return (
      <section className="container mx-auto p-5">
        <div className="objectives-card">
          <h2 className="text-2xl font-bold">My Objectives</h2>
          <p className="mt-4">My career objectives and future goals.</p>
          <ul>
            <li>Master Java-based frameworks like Spring, Hibernate, and work with frontend technologies such as HTML, CSS, and JavaScript (React/Angular).</li><br></br> 
            <li>Gain expertise in backend development with Java, Spring Boot, and databases (MySQL, MongoDB), and build RESTful APIs.</li><br></br>  
            <li>Understand full-stack development, including integrating Java backend with frontend frameworks and cloud services (AWS, Azure).</li><br></br>   
            <li>Implement web security best practices, such as OAuth, JWT, and secure API design in Java-based applications.</li><br></br>    
            <li>Stay up-to-date with new Java technologies, improve problem-solving skills, and contribute effectively in Agile teams.</li><br></br>  
          </ul>
          <a href="https://drive.google.com/file/d/1B_bN3RvoskG59Pd6w5fr4EPRaVOnAnX7/view?usp=sharing" download className="download-btn">
            <button>Check My Resume</button>
          </a>
        </div>
      </section>
  );
}

export default Objectives;
