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
    return(<form> <ul>
      <label>
        
        <input type="text" name="name" placeholder='Name' />
      </label>
      <input type="submit" value="Submit" />
      <label>
       
        <input type="text" name="name" placeholder='last name' />
      </label>
      <input type="submit" value="Submit" />
      </ul>
    </form>
     
    )
}



   

export default Contact
