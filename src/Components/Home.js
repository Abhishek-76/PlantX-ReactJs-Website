import homeimg from '../Assets/home.png'
import './Home.css'
const Home=()=>
{
    return(
      <div>
        <div className='container'>
          <div className='description'>
            <div >
            <h1>Plants Will make Your life Better</h1>
            <h4> Create incredible plant design for .....</h4>
          </div>
          <div style={{float:'right'}}>
            <img src={homeimg} height='400' alt=""/>
          </div>
        </div>
        <div>
          FollowUS ━━ Fb Insta Twitter
        </div>
        <div>
          <button>Explore ↘</button>
        </div>
      
        </div>
      </div>
    )
}
export default Home;