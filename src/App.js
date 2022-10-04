import React from 'react';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { HiArrowUp } from "react-icons/hi";
import AccordionTemp from './Components/Question/AccordionTemp';

function App() {

  
  
  return (
    
    <div>    
      <div >
        <Header/>
      </div>
      <div >
        <Home/>
      </div>
      <div >
        <About/>
      </div>
      <div >
        <Product/>
      </div>
      <div>
      <AccordionTemp/>
      </div>
      <div >
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
      <a href="#header" className="scrollup" id="scroll-up"> 
        <HiArrowUp className='scrollup__icon'/>
      </a>
    </div>
        
  );
}

export default App;


      


      
