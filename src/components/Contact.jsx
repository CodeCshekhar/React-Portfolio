import React from "react";

function Contact() {
    return (
      <section className="container mx-auto p-20">
        <div className="contact-card">
          <h2 className="text-2xl font-bold text-center">Contact Me</h2>

            <div className="wrapper flex flex-col items-center md:flex-row">

            <a href="https://www.linkedin.com/in/chandrashekhar-wagh-240197330/" className="icon text-center"><i className="fa-brands fa-linkedin-in" style={{ fontSize: '1.7rem' }}></i></a>

            <a href="https://github.com/CodeCshekhar" className="icon text-center"><i className="fa-brands fa-github" style={{ fontSize: '1.7rem' }}></i></a>

            <a href="https://www.instagram.com/chandrashekhar_wagh_23/" className="icon text-center"><i className="fa-brands fa-instagram" style={{ fontSize: '1.7rem' }}></i></a>

            <a href="https://x.com/ChanduWagh23" className="icon text-center"><i className="fa-brands fa-x-twitter" style={{ fontSize: '1.7rem' }}></i></a>

            <a href="mailto:cwagh2309@gmail.com" className="icon text-center"><i className="fa-brands fa-google"  style={{ fontSize: '1.7rem' }}></i></a>

          </div>
        </div>
      </section>
    );
}

export default Contact;
