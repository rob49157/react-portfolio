import React,{useState} from "react"


import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Table } from "react-bootstrap";
import crypto from '../images/cryptopicture.PNG'
import bikeadventure from '../images/bikeadventure.png'
import calendar from '../images/redcalendar.PNG'

 
function Projects() {
  const [portfolioSelected, setPortfolioSelected]= useState(false)
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
    <h4 style={{fontFamily:'serif',textAlign: 'center'}}>Projects</h4>
    <Table>
      <Col style={{
        backgroundColor: 'red',
        fontFamily: 'serif'
      }}><img className='textwrap-img' src={calendar} />
        <a href="https://rob49157.github.io/work-day-scheduler/">🐦Interactive-calendar</a>
        <p>First group project! This app allows the user to create an interactive calendar</p>
    </Col>
      <Col style={{
        backgroundColor: 'yellow',
        fontFamily: 'serif'
      }}><img className='textwrap-img' src={bikeadventure} />
         <a href="https://CChampness.github.io/Bike-Adventure-Planning">  🐦Bike-adventure</a>
        <p>First group project! The purpose of the app is to display bike trails throughout the planet.
            New trails are being added on daily basis.</p>
    </Col>
      <Col style={{
        backgroundColor: 'green',
        fontFamily: 'serif'
      }}> <img className='textwrap-img' src={crypto} />
         <a href="https://tranquil-everglades-59089.herokuapp.com/">  🐦crypto-dashboard</a>
        <p>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencies</p>
    </Col>
    <Col style={{
        backgroundColor: '',
        fontFamily: 'serif'
      }}>
        <a href="https://cryptic-cliffs-66103.herokuapp.com/login">  🐦Tech-Blog</a>
        <p>The app allows the user to create a tech-related blog once Logged in into his/her account</p>
    </Col>
    <Col style={{
        backgroundColor: 'green',
        fontFamily: 'serif'
      }}>
        <a href="https://tranquil-bastion-13264.herokuapp.com/">  🐦Note-Taker</a>
        <p>this app connects the app note-taker from front end to the back end using GET and POST.</p>
    </Col>
    <Col style={{
        backgroundColor: 'red',
        fontFamily: 'serif'
      }}>
      <a href="https://github.com/rob49157/weather-dashboard/commits/main">  🐦Weather-Dashboard</a>
        <p>The weather dashboard allows you to view the weather of any city in the world. It also gives the user the ability to have their past city searches saved and have them display on the website.Uses API calls</p>
    </Col>
    <Col style={{
        backgroundColor: 'yellow',
        fontFamily: 'serif'
      }}>
        <a href="https://rob49157.github.io/quiz/">  🐦Quiz</a>
        <p>A quiz app with five questions that keeps tracks of scores and gives a final grade once completed. Data is store in local storage</p>
    </Col>
    <Col style={{
        backgroundColor: 'orange',
        fontFamily: 'serif'
      }}>
        <a href="https://rob49157.github.io/password-generator/">  🐦Password-Generator</a>
        <p>This app creates random passowords for users</p>
    </Col>
       <Col style={{
        backgroundColor: 'rgb(207, 182, 182)',
        fontFamily: 'serif'
      }}>
        <a href="https://rob49157.github.io/portfolio">  🐦Portfolio page</a>
        <p>First porfolio page</p>
    </Col>
    </Table>
  </div>
);
}
    
  
 
export default Projects;

