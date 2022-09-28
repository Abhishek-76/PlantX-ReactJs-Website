import { MdDarkMode } from "react-icons/md";
import { TbLeaf } from "react-icons/tb";
import './Header.css'
const Header=()=>
{
    
    return (
      <header className='header'>
        
        <nav className='nav nav_container'>   
          <a href="#logo" className="nav__logo">
            <TbLeaf className=" nav__logo-icon"/>PlantX
          </a>  
          
          <div className="nav__menu" >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link ">About</a>
              </li>
              <li className="nav__item">
                <a href="#products" className="nav__link">Products</a>
              </li>
              <li className="nav__item">
                <a href="#faqs" className="nav__link">FAQs</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">Contact Us</a>
              </li>
            </ul>
          </div>
         
          <div className="nav__btns">
            <MdDarkMode/>          
          </div>    
        </nav>
      </header>
    )

}
export default Header;