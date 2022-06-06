import logo from '../Assets/logo.png'
import buttonicon from '../Assets/DayNight.png'

import './Header.css'
const Header=()=>
{
    
      return (
        <>
        <div>
        <img src={logo} style={{backgroundColor:'Green'}}/>
        Plantx 
          Home
          About
          Products
          FAQs
          Contact US
          <button><img src={buttonicon}/></button>
      </div>
        </>
      )

}
export default Header;