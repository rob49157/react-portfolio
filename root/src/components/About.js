import React,{useState} from 'react'

import Header from './Header'

function About(){
    const [aboutSelected,setAboutselected]= useState(false)
    return(
        <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Greeting from state:
        </div>
        <div className="card-body">
          <p className="card-text" style={{ fontSize: '50px' }}>
            {aboutSelected}
          </p>
        </div>
      </div>
    )
}



   

export default About
