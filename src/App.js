import React, { useState }  from 'react';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import StepsCard from './Components/About/StepsCard';
import Product from './Components/Product/Product';
import SingleQuestion from './Components/Question/Accordion';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { HiArrowUp } from "react-icons/hi";
import data from './QuestionData'

function App() {

  const [questions, setQuestions] = useState(data);

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
      <section className="questions section">
        <h2 className="section__title-center questions__title container">
            Some common questions <br/> were often asked
        </h2>
        {questions.map((question) => (
          <SingleQuestion key={question.id} {...question}/>
        ))}
      </section>
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
    </>
        
  );
}

export default App;


      
    
      
