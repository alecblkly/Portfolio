import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
   return (
      <div className="error-page">
         <h1>Error 404</h1>
         <p className="error-text">
            You might have gotten lost, please return back to the
            <Link to="/" aria-label="home-page" className="home-link">
               home page
            </Link>
            .
         </p>
      </div>
   );
}

export default ErrorPage;
