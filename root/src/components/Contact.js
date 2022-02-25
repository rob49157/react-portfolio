

import React,{useState} from 'react'
import resumepicture from '../images/resumescreenshot.PNG'
import '../Styles/projectstyle.css'


import Header from './Header'

function Contact(){
    const [contactSelected,setcontactSelected]= useState(false)
    return(<img className='textwrap-img2' src={resumepicture}/>
    
     
     
    )
}



   

export default Contact
