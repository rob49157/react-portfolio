import React,{useState} from "react"


import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Table, Card, Button, Link, CardGroup } from "react-bootstrap";
import crypto from '../images/cryptopicture.PNG'
import bikeadventure from '../images/bikeadventure.png'
import calendar from '../images/redcalendar.PNG'
import note from '../images/notetakerpic.PNG'
import password from '../images/passgenpic.PNG'
import porfolio from '../images/porfolipic.PNG'
import quiz from '../images/quizpic.PNG'
import blog from '../images/techblogpic.PNG'
import weather from '../images/weatherdashpic.PNG'
import tech from '../images/techblogpic.PNG'
import '../Styles/projectstyle.css'

 
function Projects() {
  const [portfolioSelected, setPortfolioSelected]= useState(false)
  return (
    <div  classname= 'cards' style={{ display: 'inline', padding: 23, borderBlockColor:'black', justifyContent:' center',  }}>
    <h4 style={{fontFamily:'serif',textAlign: 'center'}}>🅿🆁🅾🅹🅴🅲🆃🆂</h4>
   <Row  xs= {1} md={2} classname="cards">
    <Card   style={{ width: '40rem' , margin:' 30px', textAlign:'center'}}>
  <Card.Img variant="top" src={calendar} />
  <Card.Body>
    <Card.Title>Interactive-calendar</Card.Title>
    <Card.Text> This app allows the user to create an interactive calendar
     
    </Card.Text>
    <Card.Link href="https://rob49157.github.io/work-day-scheduler/">Interactive-calendar</Card.Link>
    
  </Card.Body>
</Card>

<Card  style={{ width: '40rem',margin:' 30px',textAlign:'center'}}>
  <Card.Img variant="top" src={bikeadventure} />
  <Card.Body>
    <Card.Title>Bike-Adventure</Card.Title>
    <Card.Text>First group project! The purpose of the app is to display bike trails throughout the planet.
            New trails are being added on daily basis
     
    </Card.Text>
    <Card.Link href="https://CChampness.github.io/Bike-Adventure-Planning">Bike-adventure</Card.Link>
    
  </Card.Body>
</Card>
<Card   style={{ width: '40rem',margin:' 30px', textAlign:'center' }}>
  <Card.Img variant="top" src={crypto} />
  <Card.Body>
    <Card.Title>Crypto-Dashboard</Card.Title>
    <Card.Text>Second group project! The crypto--dashboard app. The app display live crypto prices and contains vast resources on crypto currencie
     
    </Card.Text>
    <Card.Link href="https://tranquil-everglades-59089.herokuapp.com/">Crypto-Dashboard</Card.Link>
    
  </Card.Body>
</Card>
<Card  style={{ width: '40rem' ,margin:' 30px', textAlign:'center'}}>
  <Card.Img variant="top" src={tech} />
  <Card.Body>
    <Card.Title>Tech-Blog</Card.Title>
    <Card.Text>The app allows the user to create a tech-related blog once Logged in into his/her account
     
    </Card.Text>
    <Card.Link href="https://cryptic-cliffs-66103.herokuapp.com/login">Tech-Blog</Card.Link>
    
  </Card.Body>
</Card>
<Card  style={{ width: '40rem', margin:' 30px', textAlign:'center' }}>
  <Card.Img variant="top" src={note} />
  <Card.Body>
    <Card.Title>Note-Taker</Card.Title>
    <Card.Text>this app connects the app note-taker from front end to the back end using GET and POST.
     
    </Card.Text>
    <Card.Link href="https://tranquil-bastion-13264.herokuapp.com/">Note-Taker</Card.Link>
    
  </Card.Body>
</Card>
<Card  style={{ width: '40rem', margin:' 30px', textAlign:'center' }}>
  <Card.Img variant="top" src={weather} />
  <Card.Body>
    <Card.Title>Weather-Dashboard</Card.Title>
    <Card.Text>The weather dashboard allows you to view the weather of any city in the world. It also gives the user the ability to have their past city searches saved and have them display on the website.Uses API calls
     
    </Card.Text>
    <Card.Link href="https://CChampness.github.io/Bike-Adventure-Planning">Weather-Dashboard</Card.Link>
    
  </Card.Body>
</Card>
<Card  style={{ width: '40rem', margin:' 30px', textAlign:'center' }}>
  <Card.Img variant="top" src={quiz} />
  <Card.Body>
    <Card.Title>Quiz</Card.Title>
    <Card.Text>A quiz app with five questions that keeps tracks of scores and gives a final grade once completed with a 32 second timer. Data is store in local storage
     
    </Card.Text>
    <Card.Link href="https://rob49157.github.io/quiz/">Quiz</Card.Link>
    
  </Card.Body>
</Card>
<Card style={{ width: '40rem', margin:'30px', textAlign:'center' }}>
  <Card.Img variant="top" src={password} />
  <Card.Body>
    <Card.Title>Password-Generator</Card.Title>
    <Card.Text>This app creates random passowords for users
     
    </Card.Text>
    <Card.Link href="https://rob49157.github.io/password-generator/">Password-Generator</Card.Link>
    
  </Card.Body>
</Card>
<Card style={{ width: '40rem', margin:'30px', textAlign:'center' }}>
  <Card.Img variant="top" src={porfolio} />
  <Card.Body>
    <Card.Title>HTML,JS,CSS Porfolio Page</Card.Title>
    <Card.Text>Portfolio page using only CSS for styling
     
    </Card.Text>
    <Card.Link href="https://rob49157.github.io/portfolio">Original Portfolio</Card.Link>
    
  </Card.Body>
</Card>
</Row>
   
  </div>
);
}
    
  
 
export default Projects;

