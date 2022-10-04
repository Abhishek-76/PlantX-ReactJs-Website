import React from 'react';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import StepsCard from './Components/About/StepsCard';
import Product from './Components/Product/Product';
//import SingleQuestion from './Components/Question/Accordion';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { HiArrowUp } from "react-icons/hi";
import AccordionTemp from './Components/Question/AccordionTemp';
//import data from './QuestionData'
//import data1 from './QuestionData2'
//import Questions from './Components/Question/Questions';

function App() {

  //const [questions, setQuestions] = useState(data);
  //const [questions1, setQuestions1] = useState(data1);
  
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
        <StepsCard/>
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


      


      
