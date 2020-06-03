import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <nav className="nav-bar">
         {/* Logo for Initials */}
         <h1>AB</h1>
         {/* Links for About (Socials Incl here), Projects, and Contact */}
         <Link to="/" className="social-contact">
            Home
         </Link>
         <Link to="/about" className="social-contact">
            About
         </Link>
         <Link to="/projects" className="social-contact">
            Projects
         </Link>
         <Link to="/contact" className="social-contact">
            Contact
         </Link>
      </nav>
   );
}

export default Header;
