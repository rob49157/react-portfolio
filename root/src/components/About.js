import React,{useState} from 'react'
import crypto from '../images/cryptopicture.PNG'


import Header from './Header'

function About(){
    const [aboutSelected,setAboutselected]= useState(" I'm a 32 yr. old regular guy who got interested in technology. About a year ago, I began dabbling with JAVA, followed by some PYTHON. It got to a point where I wasn't disciplined enough with my studies and needed some structure. That's where the GA Tech bootcamp came in. It offered me the structure that I needed to take the final step towards learning coding. I plan to finish the camp in February, and look for work in the field soon thereafter.")
    return(
        <div className="card text-center">
        <div className="card-header bg-primary text-white">
          
          About Me:
            
        </div>
        <div className="card-body">
          <img className='textwrap-img' src={crypto} />
          <p className="card-text" style={{ fontSize: '50px' }}>
            {aboutSelected}
            
          </p>
        </div>
      </div>
    )
}



   

export default About
