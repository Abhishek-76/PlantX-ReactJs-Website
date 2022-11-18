import React from "react";
import "./Footer.css";
import { TbLeaf } from "react-icons/tb";
import { RiArrowRightUpLine } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";
import card4 from "../../Assets/card4.png";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <Fade top cascade duration={2500}>
          <div className="footer__content">
            <a href="#j" className="footer__logo">
              <TbLeaf className="footer__logo-icon" />
              PlantX
            </a>
            <h3 className="footer__title">
              Subscribe to our newsletter <br /> to stay update
            </h3>
            <div className="footer__subscribe">
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="footer__input"
              />
              <button className="button button--flex footer__button">
                Subscribe
                <RiArrowRightUpLine className="button__icon" />{" "}
              </button>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Address</h3>
            <ul className="footer__data">
              <li className="footer__information">4785</li>
              <li className="footer__information">krja - 203131</li>
              <li className="footer__information">123-456-789</li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__data">
              <li className="footer__information">+91 9897542234</li>
              <div className="footer__social">
                <a
                  href="https://www.facebook.com/"
                  className="footer__social-link"
                >
                  <CgFacebook />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="footer__social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.twiter.com/"
                  className="footer__social-link"
                >
                  <IoLogoTwitter />
                </a>
              </div>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer_title">We accept all credit cards</h3>
            <div className="footer__cards">
              <img src={card1} alt="" className="footer__card" />
              <img src={card2} alt="" className="footer__card" />
              <img src={card3} alt="" className="footer__card" />
              <img src={card4} alt="" className="footer__card" />
            </div>
          </div>
        </Fade>
      </div>
      <p className="footer__copy">
        &#169;{" "}
        <a href="https://abhishek-joy-boy-coder.vercel.app/">AbhishekGautam.</a>{" "}
        All rigths reserved
      </p>
    </footer>
  );
};

export default Footer;
