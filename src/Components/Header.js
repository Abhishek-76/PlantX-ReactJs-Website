import logo from './Assets/logo.png'
import buttonicon from './Assets/DayNight.png'
import './Header.css'
const Header=()=>
{
    
      return (
        <>
        <div className='is-sticky'>
        
        <div className='headerr'>   
        <div class="nav__logo">
          <img src={logo} alt=" Logo" style={{backgroundColor:'Green'}}/>
          
          Plantx
        </div>  
          
        <div class="nav__menu" >
        <div class="nav__list">
          <div class="nav__item">
            <a href="#home" class="nav__link active-link">Home</a>
          </div>
          <div class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </div>
          <div class="nav__item">
            <a href="#products" class="nav__link">Products</a>
          </div>
          <div class="nav__item">
            <a href="#faqs" class="nav__link">FAQs</a>
          </div>
          <div class="nav__item">
            <a href="#contact" class="nav__link">Contact Us</a>
          </div>
        </div>
        </div>

        <div class="nav__btns">
          <div class="nav__toggle" >
            <button><img src={buttonicon} alt="Button_icon"/></button>   
          </div>
        </div>
                  
        </div>
      </div>
        </>
      )

}
export default Header;