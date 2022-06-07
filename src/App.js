import React from 'react';
import About from './Components/About';
import Header from './Components/Header';
import './App.css'
import Home from './Components/Home';
import Product from './Components/Product';
function App() {
  return (
    <div className='container'>
      <div>
        <Header/>
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Product/>
      </div>
      
    </div>
        
  );
}

export default App;
