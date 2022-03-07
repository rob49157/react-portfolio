import react, {useState} from "react"
import '../Styles/Header.css'
import github from  '../images/github.png'
import linkedin from '../images/linkedin.png'

const styles={
    footerstyle:{position: "fixed",
    right: "0",
    bottom: "0px",
    width: "100%",
    background: "red",
    color: "white",
    textalign: "center"}
    
 }


function Footer(){
    return(
        <footer  className="footer">
            <a  src={github} href="https://github.com/rob49157">Github</a>&nbsp;
            <a  href="https://www.linkedin.com/in/roberto-buzeta-541688178/">linkedin</a>&nbsp;
            
        </footer>
    )

}

export default Footer