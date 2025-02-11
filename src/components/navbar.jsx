import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CodeCshekhar</h1>
        <div>
          <Link to="/" className="text-white mx-2">About</Link>
          <Link to="/skills" className="text-white mx-2">Skills</Link>
          <Link to="/projects" className="text-white mx-2">Projects</Link>
          <Link to="/education" className="text-white mx-2">Education</Link>
          <Link to="/objectives" className="text-white mx-2">Objectives</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
