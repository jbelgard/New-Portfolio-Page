import React from 'react';
import './App.css';
import Header from './components/header/Header'
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <div id = 'home' class = 'pt-5'>
      <About />
      </div>
      <h1 id = 'projects' class = 'text-center'>Projects</h1>
      <Projects />
      <h1 id = 'contact' class = 'text-center'>Contact Jason</h1>
      <Contact />
    </div>
  );
}

export default App;
