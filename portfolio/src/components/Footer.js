import React from 'react';

function Footer() {
   return (
      <div className="footer">
         <div className="social-icons">
            <a
               href="https://twitter.com/AlecBlkly"
               className="social-media"
               alt="Twitter - AlecBlkly"
               aria-label="Twitter - AlecBlkly"
            >
               <i class="fab fa-twitter-square"></i>
            </a>
            <a
               href="https://www.linkedin.com/in/alecblkly/"
               className="social-media"
               alt="LinkedIn - AlecBlkly"
               aria-label="LinkedIn - AlecBlkly"
            >
               <i class="fab fa-linkedin"></i>
            </a>
            <a
               href="https://github.com/alecblkly"
               className="social-media"
               alt="GitHub - AlecBlkly"
               aria-label="GitHub - AlecBlkly"
            >
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
