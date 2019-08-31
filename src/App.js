import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Navigation from './components/navigation';
import About from './components/about';
import Copyright from './components/copyright';
import Footer from './components/footer';
import Masthead from './components/masthead';
import Modal from './components/modal';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Masthead />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <Copyright />
      <Modal />
    </div>
  );
}

export default App;
