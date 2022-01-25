import React, { useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Contact'

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false)
  const [aboutSelected, setAboutselected]=useState(false)


  return (
  <div>
    <Header 
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      aboutSelected={aboutSelected}
      setAboutselected={setAboutselected}
    />
    {portfolioSelected ? (
      <>
        <Projects />
        
      </>
    ) : contactSelected ? (
      <>
        <Contact 
          setPortfolioSelected={!setPortfolioSelected}
        />
      </>
    ) : aboutSelected  (
      <>
        <About />
      </>
    )
  }
  <Footer />
              
              
  </div>
  );
}

export default App;



