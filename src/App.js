import React from 'react';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import AccordionTemp from './Components/Question/AccordionTemp';
import StepsCard from './Components/About/StepsCard';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  
  
  
  return (
    
    <div>    
      
      <div >
        <Header/>
      </div>
      <ScrollToTop/>
      <div id='home'>
        <Home/>
      </div>
      <div id='about'>
        <About/>
        <StepsCard/>
      </div>
      <div id='products'>
        <Product/>
      </div>
      <div id="faqs">
      <AccordionTemp/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
      
      
    </div>
        
  );
}

export default App;


      


      
