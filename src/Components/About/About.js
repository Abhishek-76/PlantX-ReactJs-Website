import React from 'react'
import aboutimg from '../Assets/about.png'
import './About.css'
import StepsCard from './StepsCard'
const About=()=>{
    return(
      
      <div className='sec'>
        <div className="about__container">
          <div className="about__img">
            <img src={aboutimg} alt=""/>
          </div>
          
          <div className="about__data">
            <div className="about__title">
              <h2>Who we really are & <br/> why choose us</h2>
            </div>
            
            <div className="about__description">
            <p >
              We have over 4000+ unbiased reviews and our customers 
              trust our plant process and delivery service every time
            </p>
            </div>
            
            <div className="about__details">
              <div className="about__details-description">
              <ul>
                <li>We always deliver on time.</li>
                <li>We give you guides to protect and care for your plants.</li>
                <li>We always come over for a check-up after sale.</li>
                <li>100% money back guaranteed.</li>
              </ul>
              </div>
              <div >
              <a href="Product" class="button--link button--flex">
                Shop Now ↘
              </a>
            </div>
              
            </div>
          </div>
        </div>
        <StepsCard/>
        </div>
        
    )
}
export default About;