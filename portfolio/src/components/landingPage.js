import React from 'react';

function LandingPage() {
   return (
      <div className="container">
         <div className="terminal">
            <div className="base-information">
               <h2 className="title">Alec Blakeley</h2>
               <h3 className="title">Full-Stack Web Developer.</h3>
               <h4 className="title">Portfolio is currently being updated.</h4>
            </div>
            <div className="contact-information">
               <a
                  href="https://twitter.com/AlecBlkly"
                  className="social-contact"
               >
                  [Twitter]
               </a>
               <a
                  href="https://www.linkedin.com/in/alecblkly/"
                  className="social-contact"
               >
                  [LinkedIn]
               </a>
               <a
                  href="https://github.com/alecblkly"
                  className="social-contact"
               >
                  [GitHub]
               </a>
            </div>
         </div>
      </div>
   );
}

export default LandingPage;
