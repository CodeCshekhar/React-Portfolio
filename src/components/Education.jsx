import React from "react";

const Education = () => {
  return (
    <section id="education" className="education-container">
        <div class="section-content">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

      {/* Engineering Section */}
      <div className="education-card">
        <h3 className="text-xl font-semibold">Bachelor of Engineering (B.E.)</h3>
        <p className="education-institution">Vidyalankar Institute of Technology</p>
        <p className="education-duration">2021 - 2025</p>
        <p className="education-description">
        I pursued my B.Tech in Electronics from Vidyalankar Instituete of Technology, which was instrumental in shaping my technical expertise.
        </p>
        <div class="education-links">
            <a href="https://vit.edu.in/" target="_blank" class="ref-button">Visit my Engineering College</a>
            </div>
      </div>

      {/* Junior College Section */}
      <div className="education-card">
        <h3 className="text-xl font-semibold">Higher Secondary Education (12th Grade)</h3>
        <p className="education-institution">Bhusawal Arts, Science and PO Nahata College</p>
        <p className="education-duration">2017 - 2019</p>
        <p className="education-description">
        I completed 12th grade with a score of 89% , I specialized in science, emphasizing subjects like physics, chemistry, mathematics.
        </p>
        <div class="education-links">
            <a href="https://basponccollege.org/" target="_blank" class="ref-button">Visit my Junior College</a>
            </div>
      </div>

      {/* School Section */}
      <div className="education-card">
        <h3 className="text-xl font-semibold">Secondary School (10th Grade)</h3>
        <p className="education-institution">Tapti Public School</p>
        <p className="education-duration">2007 - 2017</p>
        <p className="education-description">
        I completed my 10th score with 82% and a strong academic performance, showcasing dedication and focus in all subjects.
        </p>
        <div class="education-links">
            <a href="https://lms.tpsbsl.org/" target="_blank" class="ref-button">Visit my School</a>
            </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
