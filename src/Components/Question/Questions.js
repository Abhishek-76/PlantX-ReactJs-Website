import React from "react";
import'./Questions.css';
import { RiAddFill } from "react-icons/ri";
import Fade from 'react-reveal/Fade';
const Questions=()=>
{
    
return(
    <section className="questions section" >
                <h2 className="section__title-center questions__title container">
                    Some common questions <br/> were often asked
                </h2>

                <div className="questions__container container grid">
                <Fade top cascade duration={2500}>
                    <div className="questions__group">
                    
                        <div className="questions__item">
                            <div className="questions__header">
                                <RiAddFill className="questions__icon" />
                                
                                <h3 className="questions__item-title">
                                    My flowers are falling off or dying?
                                </h3>
                            </div>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <div className="questions__header">
                            <RiAddFill className="questions__icon"/>
                                <h3 className="questions__item-title">
                                    What causes leaves to become pale?
                                </h3>
                            </div>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <div className="questions__header">
                                <RiAddFill className="questions__icon"/>
                                <h3 className="questions__item-title">
                                    What causes brown crispy leaves?
                                </h3>
                            </div>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade top cascade duration={2500}>
                    <div className="questions__group">
                        <div className="questions__item">
                            <div className="questions__header">
                                <RiAddFill className="questions__icon"/>
                                <h3 className="questions__item-title">
                                    How do i choose a plant?
                                </h3>
                            </div>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <div className="questions__header">
                                <RiAddFill className="questions__icon"/>
                                <h3 className="questions__item-title">
                                    How do I change the pots?
                                </h3>
                            </div>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <div className="questions__header">
                                <RiAddFill className="questions__icon"/>
                                <h3 className="questions__item-title">
                                    Why are gnats flying around my plant?
                                </h3>
                            </div>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </section>
)
}
export default Questions;
