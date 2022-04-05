import React,{useState} from 'react'
import crypto from '../images/cryptopicture.PNG'
import roberto from '../images/Rbuzeta.jpg'
import '../Styles/Header.css'
import bike from '../images/bike.jpg'



import Header from './Header'
// const [aboutSelected,setAboutselected]= useState(" I'm a 32 yr. old regular guy who got interested in technology. About a year ago, I began dabbling with JAVA, followed by some PYTHON. It got to a point where I wasn't disciplined enough with my studies and needed some structure. That's where the GA Tech bootcamp came in. It offered me the structure that I needed to take the final step towards learning coding. I plan to finish the camp in February, and look for work in the field soon thereafter. Contact me thru Linkedin 👇")

function About(){

    return(
      <div >

        <div className='aboutmebox'> 
        <h1> About me </h1>
        <p>I'm a 32 yr. old regular guy who got interested in technology. About a year ago, I began dabbling with JAVA, followed by some PYTHON. It got to a point where I wasn't disciplined enough with my studies and needed some structure. That's where the GA Tech bootcamp came in. It offered me the structure that I needed to take the final step towards learning coding. I plan to finish the camp in February, and look for work in the field soon thereafter. Contact me thru Linkedin 👇")</p>
          
          <div >
            <img className='textwrap-img' src={roberto}></img>

          </div>
          </div>

          <div className='biking'>
            <h1>Biking</h1>
            <p> One day you’ll look ahead of you at that dreaded hill that always kills your legs, put your head down, pedal as far as you can, and then walk your bike the rest of the way, just like you always do…except this time without realizing it, you’re already going down the other side, and you didn’t even notice. There is no better feeling in the world than the day you weigh yourself and you realize you’ve lost weight.It can only be rivalled when you realize you’ve been playing with your kids for an hour straight and they’ve tired before you have. It’s a phenomenal feeling, and in my experience, better even than the runner’s high.</p>
            <div>
              <img className='bikepicture' src={bike}></img>
            </div>
          </div>

          <div className='cryptoinfo'>
            <h1>Crypto</h1>
             <p>fsajdhfkjlashdjklghdfkjlaghklda</p>

          </div>
      </div>

    
      

    
    )
}



   

export default About


  //   <div className="card text-center">
      //   <div className="card-header bg-primary text-white" >
          
      //     About Me:
            
      //   </div>
      //   <div className="card-body" >
      //     <img className='textwrap-img' src={roberto} />
      //     <p className="card-text" style={{ fontSize: '30px',fontFamily:'serif'}}>
      //       {aboutSelected}
            
      //     </p>
      //   </div>
      // </div>