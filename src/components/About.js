import React,{useState} from 'react'
import crypto from '../images/cryptopicture.PNG'
import roberto from '../images/Rbuzeta.jpg'
import '../Styles/Header.css'
import bike from '../images/bike.jpg'
import backgroundimage from '../images/backgroundimage.jpg'




import Header from './Header'
// const [aboutSelected,setAboutselected]= useState(" I'm a 32 yr. old regular guy who got interested in technology. About a year ago, I began dabbling with JAVA, followed by some PYTHON. It got to a point where I wasn't disciplined enough with my studies and needed some structure. That's where the GA Tech bootcamp came in. It offered me the structure that I needed to take the final step towards learning coding. I plan to finish the camp in February, and look for work in the field soon thereafter. Contact me thru Linkedin 👇")

function About(){
  // const myStyle={
  //   backgroundImage: `url(${backgroundimage})`,
  //   height:'200vh',
    
  //   fontSize:'20px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
    
  // }

    return(
      <div >
        {/* <div  id='bgpic'style={myStyle}> */}
        
        <div className='aboutmebox'> 
        <h1 id='title'> About me </h1>
        {/* <div >
         
         <img className='textwrap-img' src={roberto}></img>

       </div> */}
        <p id='aboutparagrahp'>   My career as a programmer began 2 years during the early stages of 2019. The business I work for suffered greatly during the Covid pandemic and almost went bankrupt. My brother, a software engineer, suggested I should try out coding and bought me  a few books on the subject.
           I began learning basic commands on java to more advanced features like  data structures and Object oriented programing concepts. Once I felt comfortable solving coding  problems with Java on leet code I began  learning Python.
          I love this new career path I took but  never looked for work in the field until  now because I did not have a college degree.
          Going back to school was out of the question due financial reasons, but i found the Ga Tech coding  bootcamp which was a 6 month program where i learned everything from Front-end technologies
          (HTML5,CSS,JAVASCRIPT,REACT) to backend technologies(NODEJS, EXPRESS,REST API,GRAPHQL, MySQL, and MONGODB). I graduated from the program in February 2022 and earned a Certificate.
          I’m constantly learning and reading different documentation to keep improving my skill set.
 </p>
          
         
          <h1 >Biking</h1>
            <p className='paragraph'> One day you’ll look ahead of you at that dreaded hill that always kills your legs, put your head down, pedal as far as you can, and then walk your bike the rest of the way, just like you always do…except this time without realizing it, you’re already going down the other side, and you didn’t even notice. There is no better feeling in the world than the day you weigh yourself and you realize you’ve lost weight.
              It can only be rivalled when you realize you’ve been playing with your kids for an hour straight and they’ve tired before you have. It’s a phenomenal feeling, and in my experience, better even than the runner’s high.
              This state mind opens my mind to think outside the box and solve the problems I have in front of me</p>
            <div>
              <img className='bikepicture' src={bike}></img>
            </div>
               <div >
         
         <img className='textwrap-img' src={roberto}></img>

       </div> 
            
          
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