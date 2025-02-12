import React from "react";

const Education = () => {
  return (
    <section id="education" className="education-container py-10 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full">
        <div className="education-card">
          <h3 className="text-xl font-semibold text-center">Bachelor of Technology in Electronics</h3>
          <p className="text-gray-300">Vidyalankar Institute of Technology, 2021 - 2025</p>
          <p className="text-gray-300">I pursued my B.Tech in Electronics from Vidyalankar Institute of Technology, which was instrumental in shaping my technical expertise.</p>
          <div className="education-links">
            <a href="https://vit.edu.in/" target="_blank" className="ref-button">Visit my Engineering College</a>
          </div>
        </div>
        <div className="education-card">
          <h3 className="text-xl font-semibold text-center">High School (12th Grade)</h3>
          <p className="text-gray-300">Bhusawal Arts, Science and PO Nahata College, 2017 - 2020</p>
          <p className="text-gray-300">I completed 12th grade with a score of 89%, specializing in science, emphasizing subjects like physics, chemistry, and mathematics.</p>
          <div className="education-links">
            <a href="https://basponccollege.org/" target="_blank" className="ref-button">Visit my Junior College</a>
          </div>
        </div>
        <div className="education-card">
          <h3 className="text-xl font-semibold text-center">Secondary School (10th Grade)</h3>
          <p className="text-gray-300">Tapti Public School, 2008 - 2017</p>
          <p className="text-gray-300">I completed my 10th grade with a score of 82%, showcasing dedication and focus in all subjects.</p>
          <div className="education-links">
            <a href="https://lms.tpsbsl.org/" target="_blank" className="ref-button">Visit my School</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
