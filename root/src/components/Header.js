// Import useEffect from React.
import React, { useState, useEffect } from 'react';

const styles={
  headerStyle:{
    background: '#0071BC'
  },
  headingStyle:{
    fontsize: '50px',
    
  }
}

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Roberto's React Portfolio</h1>
    </header>
  );
}




export default Header;
