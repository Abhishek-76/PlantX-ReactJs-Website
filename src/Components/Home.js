import homeimg from './Assets/home.png'
import fbimg from './Assets/fb_icon.png'
import instaimg from './Assets/insta-icon.png'
import twitimg from './Assets/twit_icon.png'
import './Home.css'
const Home=()=>
{
    return(
      <div className='home'>
        <div className="home__container ">
            <div className="home__data">
              <h1 className="home__title">
                Plants will make  your life better
              </h1>
              <p className="home__description">
                Create incredible plant design for your offices or apastaments. 
                Add fresness to your new ideas.
               </p>
              <a href="#about" className="button button--flex">
                Explore ↘
              </a>
          </div>
          <img src={homeimg} alt="" className="home__img"/>

              <div className="home__social">
                <span className="home__social-follow">Follow Us</span>
                  <div className="home__social-links">
                    <div className="home__social-link">
                      <a href="https://www.facebook.com/" >
                      <img src={fbimg} alt=''/>
                    </a>
                    </div>
                    <div className="home__social-link">
                      <a href="https://www.instagram.com/"  >
                      <img src={instaimg} alt=''/>
                    </a>
                    </div>
                    <div className="home__social-link">
                      <a href="https://twitter.com/"  >
                      <img src={twitimg} alt=''/>
                    </a>
                    </div>
                    
                  </div>
                </div>
              </div>
      </div>
    )
}
export default Home;