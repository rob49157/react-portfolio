// import React, {useState} from "react"
 
// function Contact(props) {
//     const [contactSelected,setcontactSelected]= useState(false)
//   return (
//     <div>
//       <h1>Projectssadfasdfasdgdfgfdsgsd</h1>
//     </div>
//   )
// }
 
// export default Contact;

import React,{useState} from 'react'

import Header from './Header'

function Contact(){
    const [contactSelected,setcontactSelected]= useState(false)
    return(
        <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Greeting from state:
        </div>
        <div className="card-body">
          <p className="card-text" style={{ fontSize: '50px' }}>
            {contactSelected}
            asasd
          </p>
        </div>
      </div>
    )
}



   

export default Contact
