// Import useEffect from React.
import React, { useState, useEffect } from 'react';
import '../Styles/Header.css'
import { Container } from 'react-bootstrap';

const styles={
  headerStyle:{
    background: '#0071BC'
  },
  headingStyle:{
    fontsize: '50px',
    }
}

function Header(props) {

  return (
    <body>
    <nav>
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Roberto's React Portfolio</h1>
      <div class="navbar-nav">  
      <a class="nav-item nav-link"  Style="font-family:`serif` color=`rgb(207, 182, 182)`"href={`https://CChampness.github.io/Bike-Adventure-Planning`}>Projects</a>
      <a class="nav-item nav-link" href={`#mailto:robertopaipo@hotmail.com`}>Contact</a> </div>
      
     
        
      

   
    </header>
    </nav>
    <p>dasdasdasdasdasdasffsadfsadfasdroberofghndaofgjdlsfikg</p>
    </body>
  );
}




export default Header
