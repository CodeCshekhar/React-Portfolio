import React from "react";
import "../styles/global.css";

const Projects = () => {
  return (
    <section id="projects" className="py-5 px-2 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full">


      <div className="project-card">
          <h3 className="text-lg font-semibold text-center">My Other Portfolio (CodeCshekhar)</h3>
          <p className="text-gray-300">This is made using  basic Html, CSS and Javascript and user friendly</p>
          <div className="project-tags">
            <span>Html</span>
            <span>CSS</span>
            <span>Javascript</span>
          </div>
          <div className="project-links">
            <a href="https://codecshekhar.github.io/" target="_blank" className="ref-button">View Website</a>
          </div>
        </div>

        <div className="project-card">
          <h3 className="text-lg font-semibold text-center">Bug Tracker</h3>
          <p className="text-gray-300">This Bug Tracker System is a Spring Boot application for managing users, priorities, and bugs. It includes RESTful APIs for CRUD operations, MySQL for data storage, and supports testing via Postman.</p>
          <div className="project-tags">
            <span>Springboot</span>
            <span>Hibernate-JPA</span>
            <span>MySQL</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/CodeCshekhar/Bug-Tracker-Simple" target="_blank" className="ref-button">View on GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3 className="text-lg font-semibold text-center">Reddit App Demo</h3>
          <p className="text-gray-300">To implement this Reddit App, I have used a Java development environment (Gradle), added dependencies for OkHttp (for HTTP requests) and used Reddit API credentials (client ID, secret, username, password) for OAuth2 authentication.</p>
          <div className="project-tags">
            <span>Gradle</span>
            <span>Reddit-API's</span>
            <span>OAuth2</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/CodeCshekhar/reddit-app-demo" target="_blank" className="ref-button">View on GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image-Ecommerce"></div>
          <h3 className="text-lg font-semibold text-center">E-commerce Platform</h3>

          
          <p className="text-gray-300">Created a customer management system, where I implemented SpringBoot, Hibernate JPA and integrated it with an H2 database or using MySQL.</p>
          <div className="project-tags">
            <span>Springboot</span>
            <span>Hibernate-JPA</span>
            <span>Rest Services</span>
            <span>JSP-Servlets</span>
            <span>JDBC</span>
            <span>MySQL</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/CodeCshekhar?tab=repositories" target="_blank" className="ref-button">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
