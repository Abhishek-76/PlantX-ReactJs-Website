import React from "react";
import'./Contact.css';
import { HiOutlinePhone } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { RiArrowRightUpLine } from "react-icons/ri";
import Fade from 'react-reveal/Fade';
const Contact=()=>
{
    return(
        <section className="contact section container" id="contact">
            
            <div className="contact_container grid">
            <Fade left duration={2500}>
                <div className="contact__box">
                    <h2 className="section__title">
                        Reach out to us today <br/> via any of the given <br/> information
                    </h2>

                    <div className="contact__data">
                        <div className="contact__information">
                            <h3 className="contact__subtitle">Call us for instant support</h3>
                            <span className="contact__description">
                                <HiOutlinePhone className="contact__icon"/>
                                +91 9897542234
                            </span>
                        </div>
                        
                        <div className="contact__information">
                            <h3 className="contact__subtitle">
                                Write us by mail
                            </h3>
                            <span className="contact__description">
                                <FiMail className="contact__icon"/>
                                abhigautam5824@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                </Fade>
            <form action="" className="contact__form">
            <Fade right duration={2500}>
                <div className="contact__inputs">
                    <div className="contact__content">
                        <input type="email" placeholder=" " className="contact__input"/>
                        <label  className="contact__label">Email</label>
                    </div>
                    <div className="contact__content">
                        <input type="text" placeholder=" " className="contact__input"/>
                        <label  className="contact__label">Subject</label>
                    </div>

                    <div className="contact__content contact__area">
                        <textarea name="message" placeholder=" " className="contact__input"></textarea>                              
                        <label  className="contact__label">Message</label>
                    </div>
                </div>
                <button className="button button--flex">
                    Send Message
                    <RiArrowRightUpLine className="button__icon"/>
                </button>
            </Fade>
            </form>
            </div>
        </section>
    )
}

export default Contact;