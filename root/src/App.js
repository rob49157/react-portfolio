import React, { useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About';
import Main from './components/Main'


// const App= () => <Header/>


// export default App;



 
function App() {
  let [portfolioSelected, setPortfolioSelected] = useState(false)
  let [contactSelected, setContactSelected] = useState(false)
  let [aboutSelected, setAboutselected]=useState(false)

  const page = () => {
    if (portfolioSelected) {
        return <Projects></Projects>
    } else if (contactSelected) {
        return <Contact></Contact>
    } else if (aboutSelected) {
        return <About></About>
    }
}

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

    {page()}
    

  <Footer />
              
              
  </div>
  );
}

export default App;

