import homeimg from '../Assets/home.png'
const Home=()=>
{
    return(
        <>
        <div style={{overflow:'auto'}}>
        <div style={{float:'left'}} >
          <h1>Plants Will make Your life Better</h1>
          <h4> Create incredible plant design for .....</h4>
        </div>
        <div style={{float:'right'}}>
          <img src={homeimg} height='400'/>
        </div>
      </div>
      <div>
        FollowUS ━━ Fb Insta Twitter
      </div>
      <div>
        <button>Explore ↘</button>
      </div>
      
        </>
    )
}
export default Home;