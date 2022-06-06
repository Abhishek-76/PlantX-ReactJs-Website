import aboutimg from '../Assets/about.png'
import classes from './About.css'
const About=()=>{
    return(
        <div>
      
        <div style={{float:'left'}}>
          <img src={aboutimg} height='400'/>
      </div>
      <div style={{float:'right'}}>
          
      </div>
     <h1><p> Who we really are & why choose us</p></h1>
      <p>We have over 4000+ unbiased reviews and customers trust our plant process and delivery service every time.</p>
      <ul className={classes.ul}>
        <li>We always deliver on time.</li>
        <li>We give you guides to protect and care for your plants.</li>
        <li>We always come over for a check-up after sale.</li>
        <li>100% money back guarantees.</li>
      </ul>
      <div>
        <button>Shop Now ↘</button>
      </div>

      <div class="parent">
          
        <div class="div1"> 
        <p>Steps to Start Your palns Off right</p>
        </div>
        <div class="div2">
            <div >
                01
            </div>
            
        </div>
        <div class="div3"> </div>
        <div class="div4"> </div>
        </div>
  
      </div>
    )
}
export default About;