// Import useEffect from React.
import React, { useState, useEffect } from 'react';
import '../Styles/Header.css'
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import { contains } from 'cheerio/lib/static';

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




export default Header
