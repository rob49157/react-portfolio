// import react, {useState} from "react"
// // import '../Styles/Header.css'
// import github from  '../images/github.png'
// import linkedin from '../images/linkedin.png'
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const styles={
//     footerstyle:{position: "fixed",
//     right: "0",
//     bottom: "0px",
//     width: "100%",
//     background: "red",
//     color: "white",
//     textalign: "center"}
    
//  }


// function Footer(){
//     return(
//         <footer  className="footer">
//             <a  src={github} href="https://github.com/rob49157">Github</a>&nbsp;
//             <a  href="https://www.linkedin.com/in/roberto-buzeta-541688178/">linkedin</a>&nbsp;
            
//         </footer>
//     )

// }

// export default Footer

import react from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./footerStyles";




    
  const Footer = () => {
    return (
      <Box>
      
        <Container>
          <Row>
           
            <Column>
              
              <FooterLink href="https://www.facebook.com/">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "1022px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://github.com/rob49157">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Github
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://twitter.com/home">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/roberto-buzeta-541688178/">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    linkedin
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };
  export default Footer;





