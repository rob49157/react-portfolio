import React, { useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About';
import Home from './components/Home';

import './Styles/Header.css'
import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";


// const App= () => <Header/>


// export default App;



 
function App() {
 return(

 
  <div className="App">
      






  <Navbar className="navbar" bg="dark" variant="dark">

    <Navbar.Brand Classname='metalgear' href="#home">Roberto's page</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/" element={Home}>Home</Nav.Link>
      <Nav.Link href="/Projects" element={Projects}>Projects</Nav.Link>
      <Nav.Link href="/About" element={About}>About</Nav.Link>
      <Nav.Link href="/Contact" element={Contact}>Contact</Nav.Link>




    </Nav>

  </Navbar>
  
  <Router>
    <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/Projects" element={<Projects  />} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Contact" element={<Contact/>} />

    </Routes>
  </Router>

  <Footer />
    


              
              
  </div>
 )
  
}

export default App;

