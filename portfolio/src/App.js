import React from 'react';
import './App.css';

function App() {
   return (
      <div className="Container">
         <div className="Terminal">
            <div className="Base-Information">
               <h2 className="Title">Alec Blakeley</h2>
               <h3 className="Title">Full-Stack Web Developer.</h3>
               <h4 className="Title">Portfolio is currently being updated.</h4>
            </div>
            <div className="Contact-Information">
               <a
                  href="https://twitter.com/AlecBlkly"
                  className="Social-Contact"
               >
                  [Twitter]
               </a>
               <a
                  href="https://www.linkedin.com/in/alecblkly/"
                  className="Social-Contact"
               >
                  [LinkedIn]
               </a>
               <a
                  href="https://github.com/alecblkly"
                  className="Social-Contact"
               >
                  [GitHub]
               </a>
            </div>
         </div>
      </div>
   );
}

export default App;
