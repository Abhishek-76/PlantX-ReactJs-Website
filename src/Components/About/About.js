import React from 'react'
import aboutimg from '../Assets/about.png'
import './About.css'
import { IoMdCheckbox } from "react-icons/io";
import { BsArrowDownRight } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
 
const About=()=>{
    return(
      <Fade>
      <section className='about section abt_container' id='about'>
        <div className="about__container grid">

          <img src={aboutimg} className="about__img" alt="AboutIMG"/>
    
          <div className="about__data">
            <h2 className="section__title about__title">
              Who we really are & <br/> why choose us
            </h2>
            
            <p className="about__description">
              We have over 4000+ unbiased reviews and our customers 
              trust our plant process and delivery service every time
            </p>
            
            
            <div className="about__details">
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We always deliver on time.
              </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We give you guides to protect and care for your plants.
              </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We always come over for a check-up after sale.
              </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                100% money back guaranteed.
              </p>
            </div>
            
            <a href="#products" class="button--link button--flex">
              Shop Now <BsArrowDownRight className='button__icon'/>
            </a>

      </div>
    </div>
    
    </section>
    </Fade>  
    )
}
export default About;