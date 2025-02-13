import React from "react";

function About() {
  return (
    <div className="card">
      <section className="container mx-auto p-10 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Profile Image */}
        <div className="w-full h-auto md:w-1/3 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-10">


          <img src="/profile.jpg" alt="Chandrashekhar Wagh" className="profile-img"/>
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-2xl font-bold text-center md:text-left">CodeCshekhar</h2>


          <div className="section-content">
            <div className="outer-box">
              I am Chandrashekhar Wagh, a Java Full-Stack Web Developer passionate about building web applications.
              My expertise spans across backend technologies like Spring Boot, Spring MVC, Hibernate, and JPA, along
               with frontend technologies such as HTML5, CSS, React, and JavaScript. 
              I am a Junior Full-Stack Developer specializing in Java, with extensive experience in building scalable, 
              high-performance applications. My expertise spans across backend technologies like Spring Boot, Spring MVC, 
              Hibernate, and JPA, along with frontend technologies such as HTML5, CSS, React and JavaScript.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
