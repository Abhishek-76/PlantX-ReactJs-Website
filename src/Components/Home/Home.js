import homeimg from '../Assets/home.png'
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { BsArrowDownRight } from "react-icons/bs";
import './Home.css'
import { Fade } from "react-awesome-reveal";
const Home=()=>
{
    return(
      <Fade>
      <section className='home' id='home'>
        <div className="home__container home2_container grid">
            

            <div class="home__data">
              <h1 class="home__title">
                Plants will make <br/> your life better
              </h1>
              <p class="home__description">
                Create incredible plant design for your offices or apastaments. 
                Add fresness to your new ideas.
              </p>
              <a href="#about" class="button button--flex">
                Explore <BsArrowDownRight className='button__icon'/>
              </a>
            </div>
            <img src={homeimg} alt="" className="home__img"/>

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
          </div>
      </section>
      </Fade>
    )
}
export default Home;