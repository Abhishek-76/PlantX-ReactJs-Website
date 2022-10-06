import React from 'react'
import  Accordion  from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import'./Questions.css';
import './accordion.scss';

const Accordion_temp = () => {
  return (
    <section className="questions section" id="faqs">
      <h2 className="section__title-center  ">
        Some common questions <br/> were often asked
      </h2>
      <div className="questions__container container grid">
        <div className="questions__group">
        <Accordion>
        <div className="questions__item">
            <AccordionItem eventKey="0" >
            <Accordion.Header>
            <h3 className="questions__item-title">
              My flowers are falling off or dying?
            </h3>
            </Accordion.Header>
              <Accordion.Body> 
                <p className="questions__description">
                    Plants are easy way to add color energy and transform your 
                    space but which planet is for you. Choosing the right plant.
                </p>
              </Accordion.Body>
            </AccordionItem>
          </div>
          <br/>
          <div className="questions__item">
            <AccordionItem eventKey="1" >
            <Accordion.Header>
            <h3 className="questions__item-title">
              What causes leaves to become pale?
            </h3>
            </Accordion.Header>
              <Accordion.Body>
                <p className="questions__description">
                    Plants are easy way to add color energy and transform your 
                    space but which planet is for you. Choosing the right plant.
                </p>
              </Accordion.Body>
            </AccordionItem>
          </div>
          <br/>
          <div className="questions__item">
            <AccordionItem eventKey="2" >
            <Accordion.Header>
            <h3 className="questions__item-title">
              What causes brown crispy leaves?
            </h3>
            </Accordion.Header>
              <Accordion.Body>
                <p className="questions__description">
                    Plants are easy way to add color energy and transform your 
                    space but which planet is for you. Choosing the right plant.
                </p>
              </Accordion.Body>
            </AccordionItem>
          </div>
        </Accordion>
        
        </div>
        <div className="questions__group">
        <Accordion >
        <div className="questions__item">
            <AccordionItem eventKey="0" >
            <Accordion.Header>
            <h3 className="questions__item-title">
              How do i choose a plant?
            </h3>
            </Accordion.Header>
              <Accordion.Body>
                <p className="questions__description">
                    Plants are easy way to add color energy and transform your 
                    space but which planet is for you. Choosing the right plant.
                </p>
              </Accordion.Body>
            </AccordionItem>
          </div>
          <br/>
          <div className="questions__item">
            <AccordionItem eventKey="1" >
            <Accordion.Header>
            <h3 className="questions__item-title">
              How do I change the pots?
            </h3>
            </Accordion.Header>
              <Accordion.Body>
                <p className="questions__description">
                    Plants are easy way to add color energy and transform your 
                    space but which planet is for you. Choosing the right plant.
                </p>
              </Accordion.Body>
            </AccordionItem>
          </div>
          <br/>
          <div className="questions__item">
            <AccordionItem eventKey="2" >
            <Accordion.Header>
            <h3 className="questions__item-title">
              Why are gnats flying around my plant?
            </h3>
            </Accordion.Header>
              <Accordion.Body >
                <p  className="questions__description ">
                    Plants are easy way to add color energy and transform your 
                    space but which planet is for you. Choosing the right plant.
                </p>
              </Accordion.Body>
            </AccordionItem>
          </div>
        </Accordion>
        
        </div>
      </div>
    </section >
  )
}

export default Accordion_temp