import React from 'react';

function Footer() {
   return (
      <div className="footer">
         <div className="social-icons">
            <a href="https://twitter.com/AlecBlkly" className="social-link">
               <i class="fab fa-twitter-square"></i>
            </a>
            <a
               href="https://www.linkedin.com/in/alecblkly/"
               className="social-link"
            >
               <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/alecblkly" className="social-link">
               <i class="fab fa-github-square"></i>
            </a>
         </div>
         <p className="copyright">
            Copyright © {new Date().getFullYear()} Alec Blakeley
         </p>
      </div>
   );
}

export default Footer;
