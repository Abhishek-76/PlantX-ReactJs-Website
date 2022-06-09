import aboutimg from '../Assets/about.png'
import  './About.css'
const About=()=>{
    return(
      
      <section class="about section container" id="about">
        <div class="about__container grid">
          <img src={aboutimg} alt="" class="about__img"/>
          <div class="about__data">
            <h2 class="section__title about__title">
              Who we really are & <br/> why choose us
            </h2>

            <p class="about__description">
              We have over 4000+ unbiased reviews and our customers 
              trust our plant process and delivery service every time
            </p>

            <div class="about__details">
              <p class="about__details-description">
              <i class="ri-checkbox-fill about__details-icon"></i>
                                We always deliver on time.
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i>
                                We give you guides to protect and care for your plants.
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i>
                                We always come over for a check-up after sale.
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i>
                                100% money back guaranteed.
                            </p>
                        </div>

                        <a href="#" class="button--link button--flex">
                            Shop Now <i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>
                </div>
            </section>
    
    )
}
export default About;