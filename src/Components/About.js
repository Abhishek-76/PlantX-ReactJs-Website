import aboutimg from '../Assets/about.png'
import classes from './About.css'
const About=()=>{
    return(
      
      <div className='conatiner'>
      <div className='description'>
        <div>
          <img src={aboutimg} height='400' alt='about'/>
        </div>
      
        <div>
        <h1><p>Who we really are & why choose us</p></h1>
        <h3><p> We have over 4000+ unbiased reviews and 
          customers trust our plant process and delivery service every time.</p></h3>
        
        <ul className={classes.ul}>
          <li>We always deliver on time.;</li>
          <li>We give you guides to protect and care for your plants.</li>
          <li>We always come over for a check-up after sale.</li>
          <li>100% money back guarantees.</li>
               
        </ul>
        <p>&ensp;</p>
        <button>Shop Now ↘</button>
        </div>
        </div>
        <div className='card'>
        <div className="parent">
          <div className="card_title">
            <h2>Steps to start your plans off right</h2>
          </div>
          
          <div className="div1"> 
            <div className='number_box'>
              01
            </div>
            <div className='Card_description'>
              <h3><p>Choose Plant </p></h3>
              <p>  We have severla variants plants you can choose from</p>
            </div>
          
          </div>
          <div className="div2"> 
            <div className='number_box'>
             02
            </div>
            <div  className='Card_description'>
              <h3><p>Place Order&ensp;</p></h3>
              <p>Once your Order is set ,we move to the next step which is the shipping</p>
            </div>
          </div>
          <div className="div3"> 
            <div className='number_box'>
              03
            </div >
              <div className='Card_description'>
              <h3><p>Get Plants delivered </p></h3>
              <p>Our delivery process is easy , you recieve the plant direct to your door</p>
              </div>
              
           </div>
        </div>
      
      </div>
  
      </div>
    
    )
}
export default About;