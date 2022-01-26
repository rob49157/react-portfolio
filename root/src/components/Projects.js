import React,{useState} from "react"


import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Table } from "react-bootstrap";
 
function Projects() {
  const [portfolioSelected, setPortfolioSelected]= useState(false)
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
    <h4 style={{fontFamily:'serif',textAlign: 'center'}}>Projects</h4>
    <Table>
      <Col style={{
        backgroundColor: 'red',
        fontFamily: 'serif'
      }}>
        <a href="https://rob49157.github.io/work-day-scheduler/">🐦Interactive-calendar</a>
        <p>First group project! This app allows the user to create an interactive calendar</p>
    </Col>
      <Col style={{
        backgroundColor: 'yellow',
        fontFamily: 'serif'
      }}>
         <a href="https://CChampness.github.io/Bike-Adventure-Planning">  🐦Bike-adventure</a>
        <p>First group project! The purpose of the app is to display bike trails throughout the planet.
            New trails are being added on daily basis.</p>
    </Col>
      <Col style={{
        backgroundColor: 'green',
        fontFamily: 'serif'
      }}>
         <a href="https://tranquil-everglades-59089.herokuapp.com/">  🐦crypto-dashboard</a>
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    <Col style={{
        backgroundColor: '',
        fontFamily: 'serif'
      }}>
        🐦Crypto-dashboard
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    <Col style={{
        backgroundColor: 'green',
        fontFamily: 'serif'
      }}>
        🐦Crypto-dashboard
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    <Col style={{
        backgroundColor: 'red',
        fontFamily: 'serif'
      }}>
        🐦Crypto-dashboard
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    <Col style={{
        backgroundColor: 'yellow',
        fontFamily: 'serif'
      }}>
        🐦Crypto-dashboard
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    <Col style={{
        backgroundColor: 'orange',
        fontFamily: 'serif'
      }}>
        🐦Crypto-dashboard
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
       <Col style={{
        backgroundColor: 'rgb(207, 182, 182)',
        fontFamily: 'serif'
      }}>
        🐦Crypto-dashboard
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    </Table>
  </div>
);
}
    
  
 
export default Projects;

