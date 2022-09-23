import React from 'react';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import './App.css'
import Home from './Components/Home';
import StepsCard from './Components/About/StepsCard';
import Product from './Components/Product';
import Questions from './Components/Questions';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <div className='div-container'>
        <Header/>
      </div>
      <div className='div-container'>
        <Home/>
      </div>
      <div className='div-container'>
        <About/>
        <StepsCard/>
      </div>
      <div className='div-container'>
        <Product/>
      </div>
      <div className='div-container'>
        <Questions/>
      </div>
      <div className='div-container'>
        <Contact/>
      </div>
      <div className='div-container'>
        <Footer/>
      </div>
    </>
        
  );
}

export default App;


      
    
      
