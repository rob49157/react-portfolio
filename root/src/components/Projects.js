import React,{useState} from "react"


import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 
function Projects() {
  const [portfolioSelected, setPortfolioSelected]= useState(false)
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
    <h4 style={{fontFamily:'serif',textAlign: 'center'}}>Projects</h4>
    <Row>
      <Col style={{
        backgroundColor: 'red',
        fontFamily: 'serif'
      }}>
        🐦Interactive-calendar
        <p>First group project! This app allows the user to create an interactive calendar</p>
    </Col>
      <Col style={{
        backgroundColor: 'yellow',
        fontFamily: 'serif'
      }}>
        🐦Bike-adventure 
        <p>First group project! The purpose of the app is to display bike trails throughout the planet.
            New trails are being added on daily basis.</p>
    </Col>
      <Col style={{
        backgroundColor: 'green',
        fontFamily: 'serif'
      }}>
        🐦Crypto-dashboard
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    </Row>
  </div>
);
}
    
  
 
export default Projects;

