import react, {useState} from "react"
import '../Styles/Header.css'

function Footer(){
    return(
        <footer id="footer">
            <a href="https://github.com/rob49157">github</a>&nbsp;
            <a href="https://www.linkedin.com/in/roberto-buzeta-541688178/">linkedin</a>&nbsp;
            <a href="{`#mailto:robertopaipo@hotmail.com`}"> Email</a>
        </footer>
    )

}

export default Footer