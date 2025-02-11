import React from "react";

function About() {
  return (
    <section className="container mx-auto p-10 flex flex-col md:flex-row items-center text-center md:text-left">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-10">
      <img src="/profile.jpg" alt="Chandrashekhar Wagh" className="profile-img"/>
      </div>

      {/* About Text */}
      <div>
        <h2 className="text-3xl font-bold">About Me</h2>
        <div class="section-content">
        <div class="outer-box">
          I am Chandrashekhar Wagh, a Java Full-Stack Web Developer passionate about building web applications.
          I am a Junior Full-Stack Developer specializing in Java, with extensive experience in building scalable, 
          high-performance applications. My expertise spans across backend technologies like Spring Boot, Spring MVC, 
          Hibernate, and JPA, along with frontend technologies such as HTML5, CSS, React and JavaScript.
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
