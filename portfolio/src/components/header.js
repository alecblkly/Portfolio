import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <nav className="nav-bar">
         {/* Logo for Initials */}
         <div className="name-logo">
            <h1>AB</h1>
         </div>
         {/* Links for About (Socials Incl here), Projects, and Contact */}
         <div className="nav-links">
            <Link to="/" className="nav-link">
               Home
            </Link>
            <Link to="/about" className="nav-link">
               About
            </Link>
            <Link to="/projects" className="nav-link">
               Projects
            </Link>
            <Link to="/contact" className="nav-link">
               Contact
            </Link>
         </div>
      </nav>
   );
}

export default Header;
