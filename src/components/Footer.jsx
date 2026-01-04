import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="left">
          <div className="brand">TS</div>
          <div className="copyright">
            Made with passion, from an Indian in the UAE. © All rights reserved.
          </div>
        </div>
        <div className="right">
          <nav className="mini-nav">
            <a href="#home">Home</a>
            <a href="#work">What I Do</a>
            <a href="#case-studies">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
