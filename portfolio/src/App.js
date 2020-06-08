import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
   return (
      <div className="App">
         <Header />
         <Route exact path="/" component={LandingPage}></Route>
         <Route path="/about" component={About}></Route>
         <Route path="/projects" component={Projects}></Route>
         <Route path="/contact" component={Contact}></Route>
         <Footer />
      </div>
   );
}

export default App;
