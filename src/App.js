import React  from 'react';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import './App.css'
import Home from './Components/Home/Home';
import StepsCard from './Components/About/StepsCard';
import Product from './Components/Product/Product';
import Questions from './Components/Question/Questions';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { HiArrowUp } from "react-icons/hi";

function App() {
  return (
    <>
    
      <div >
        <Header/>
      </div>
      <div >
        <Home/>
      </div>
      <div >
        <About/>
        <StepsCard/>
      </div>
      <div >
        <Product/>
      </div>
      <div >
        <Questions/>
      </div>
      <div >
        <Contact/>
      </div>
      <div className='div-container'>
        <Footer/>
      </div>
      <a href="#header" className="scrollup" id="scroll-up"> 
        <HiArrowUp className='.scrollup__icon'/>
      </a>
    </>
        
  );
}

export default App;


      
    
      
