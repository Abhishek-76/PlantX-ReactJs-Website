import { useEffect, useState } from "react";
import useLocalStorage from 'use-local-storage'
import { Link } from 'react-scroll';
import { TbLeaf } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './Header.css'

const Header = () => {
  const[isNavOpen,setNavOpen]= useState(false);

  const defaultLight = window.matchMedia('(prefers-color-scheme: light-theme)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'dark' : 'light');

  const toggleNav =()=>{
    setNavOpen(!isNavOpen);
  };

  const toggleTheme = (e) => {
    e.preventDefault();
    theme === "dark-theme" ? setTheme('light-theme') : setTheme('dark-theme');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (

    <header className='header'>

      <nav className='nav container'>
        <a href="#logo" className="nav__logo">
          <TbLeaf className=" nav__logo-icon" />Plant X
        </a>
          <div className={isNavOpen ? "nav__menu active" : "nav__menu"} >
          <ul className="nav__list">
            <li className="nav__item">
              <Link activeClass="active" spy to="home" className="nav__link ">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="products" className="nav__link">
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="faqs" className="nav__link">
                FAQs
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="contact" className="nav__link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <AiOutlineClose onClick={toggleNav}/>
          </div>
        </div>
        <div className="nav__btns">
          <a href="darkMode " onClick={toggleTheme}>
            <MdDarkMode className='change-theme' id="theme-button" />
          </a>

          <div className="nav__toggle" >
            <AiOutlineMenu onClick={toggleNav}/> 
          </div>
        </div>


      </nav>
    </header>

  )

}
export default Header;

