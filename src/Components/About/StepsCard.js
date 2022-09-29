import React from 'react';
import Fade from 'react-reveal/Fade';
import './StepsCard.css'
const StepsCard=()=>{
    return(
        
        <section className="steps section container">
            
                <div className="steps__bg">
                    <h2 className="section__title-center steps__title">
                        Steps to start your <br/> plants off right
                    </h2>
                    
                    <div className="steps__container grid">
                        <Fade top duration={1800}>
                        <div  className="steps__card">
                            <div className="steps__card-number">01</div>
                            <h3 className="steps__card-title">Choose Plant</h3>
                            <p className="steps__card-description">
                                We have several varieties plants you can choose from.
                            </p>
                        </div>
                        </Fade>
                        <Fade top duration={2000}>
                        <div className="steps__card">
                            <div className="steps__card-number">02</div>
                            <h3 className="steps__card-title">Place an order</h3>
                            <p className="steps__card-description">
                                Once your order is set, we move to the next step which is the shipping.
                            </p>
                        </div>
                        </Fade>
                        
                        <Fade top duration={2500}>
                        <div className="steps__card">
                            <div className="steps__card-number">03</div>
                            <h3 className="steps__card-title">Get plants delivered</h3>
                            <p className="steps__card-description">
                                Our delivery process is easy, you receive the plant direct to your door.
                            </p>
                        </div>
                        </Fade>
                        
                    </div>
                </div>
            
        </section>
        
    )

}
export default StepsCard;

//