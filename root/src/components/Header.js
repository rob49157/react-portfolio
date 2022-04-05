// Import useEffect from React.
import React, { useState, useEffect } from 'react';
import '../Styles/Header.css'
import Footer from './Footer';
import { Container,Nav,Link,Navbar } from 'react-bootstrap';
import { contains } from 'cheerio/lib/static';
import Projects from '../components/Projects'
import contact from '../components/Contact'
import About from './About';

const styles = {
  headerStyle: {
    background: '#0071BC'
  },
  headingStyle: {
    fontsize: '50px',
  }
}
// href={`https://CChampness.github.io/Bike-Adventure-Planning`}
// href={`#mailto:robertopaipo@hotmail.com`}

const Header = (props) => {
  const {
    portfolioselected,setPortfolioSelected,
    contactSelected,setContactSelected,
    aboutSelected, setAboutselected,
  } = props
  return (
    
      <nav>
        <header style={styles.headerStyle} className="header">
          <h1 style={styles.headingStyle}>Roberto's React Portfolio</h1>
          <div class="navbar-nav">
            <a class="nav-item nav-link" ><span onClick={() => {setPortfolioSelected(true); setContactSelected(false); setAboutselected(false)}}>Projects</span></a>
            <a class="nav-item nav-link" ><span onClick={() => {setContactSelected(true); setAboutselected(false); setPortfolioSelected(false)}}>Resume</span></a>
            <a class="nav-item nav-link" ><span onClick={() => {setAboutselected(true); setContactSelected(false); setPortfolioSelected(false)}}>About Me</span></a>
          </div>
          <body>
           
          </body>






        </header>
      </nav>
    
    
  );
}

<Navbar bg="primary" variant="dark">
<Container>
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
</Container>
</Navbar>




export default Header
