import homeimg from '../Assets/home.png'
import './Home.css'
const Home=()=>
{
    return(
      <div className='home'>
        <div className="home__container container grid">
          <img src={homeimg} alt="" className="home__img"/>

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

              <div className="home__social">
                <span className="home__social-follow">Follow Us</span>
                  <div className="home__social-links">
                    <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                      Fb
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                      Insta
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="home__social-link">
                      twitter
                    </a>
                  </div>
                </div>
              </div>
      </div>
    )
}
export default Home;