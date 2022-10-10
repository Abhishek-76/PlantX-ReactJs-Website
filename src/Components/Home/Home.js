import React from 'react'
import homeimg from '../../Assets/home.png'
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { BsArrowDownRight } from "react-icons/bs";
import './Home.css'
import Fade from 'react-reveal/Fade';
const Home=()=>
{
    return(
      
      <section className='home' >
        <div className="home__container container grid">
        <Fade top duration={2500}>
          <img src={homeimg} alt="" className="home__img"/>
        </Fade>
        <Fade top duration={2000}>
            <div className="home__data">
              <h1 className="home__title">
                Plants will make <br/> your life better
              </h1>
              <p className="home__description">
                Create incredible plant design for your offices or apastaments. 
                Add fresness to your new ideas.
              </p>
              <a href="#about" className="button button--flex">
                Explore <BsArrowDownRight className='button__icon'/>
              </a>
            </div>
            </Fade>
            
            <Fade top duration={2200}>
              <div className="home__social">
                <span className="home__social-follow">Follow Us</span>
                  
                    <div className="home__social-links">
                      <a href="https://www.facebook.com/" className="home__social-link" >
                        <CgFacebook/>
                      </a>
                    
                      <a href="https://www.instagram.com/" className="home__social-link" >
                        <FaInstagram/>
                      </a>
                    
                      <a href="https://twitter.com/" className="home__social-link" >
                        <IoLogoTwitter/>
                      </a>
                    </div>
              </div>
              </Fade>
          </div>
      </section>
      
    )
}
export default Home;