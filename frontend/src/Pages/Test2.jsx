import React from "react";
import "./test2.css";

const Test2 = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Welcome to the Hackathon!</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#schedule">Schedule</a>
            </li>
            <li>
              <a href="#themes">Themes/Challenges</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="main">
        {/* About */}
        <section id="about" className="section">
          <h2>About</h2>
          {/* Add about content */}
        </section>

        {/* Schedule */}
        <section id="schedule" className="section">
          <h2>Schedule</h2>
          {/* Add schedule content */}
        </section>

        {/* Themes/Challenges */}
        <section id="themes" className="section">
          <h2>Themes/Challenges</h2>
          {/* Add themes/challenges content */}
        </section>

        {/* Resources */}
        <section id="resources" className="section">
          <h2>Resources</h2>
          {/* Add resources content */}
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <h2>FAQ</h2>
          {/* Add FAQ content */}
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          {/* Add contact content */}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Hackathon Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Test2;
