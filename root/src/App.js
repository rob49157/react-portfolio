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

    <Navbar.Brand Classname='metalgear' href="/react-portfolio/" element={Home}>Roberto's page</Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link href="/" element={Home}></Nav.Link> */}
      <Nav.Link href="/react-portfolio/About" element={About}>About ME</Nav.Link>
      <Nav.Link href="/react-portfolio/Projects" element={Projects}>Projects</Nav.Link>
      
      {/* <Nav.Link href="/Resume" element={Contact}>Resume</Nav.Link> */}
      <Nav.Link href="https://twitter.com/" >Twitter</Nav.Link>
      <Nav.Link href="https://github.com/rob49157" >Github</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/roberto-buzeta-541688178/" >linkedin</Nav.Link>
      




    </Nav>

  </Navbar>
 
  <BrowserRouter basename='/react-portfolio'>
    <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/Projects" element={<Projects  />} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Contact" element={<Contact/>} />

    </Routes>
  </BrowserRouter>



 
    


              
              
  </div>
 )
  
}

export default App;
