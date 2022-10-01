import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import './Questions.css';

const Accordion = ({ title, info }) => {

    const [expanded, setExpanded] = useState(false);
  return (
    <div>
    
    <div className="questions__container container grid">
        <div className="questions__group">
          <Fade top cascade duration={2500}>
            <div className="questions__item">
              <div className="questions__header">
                <Icon className="questions__icon" onClick={() => setExpanded(!expanded)}>
                  {expanded ? <RiAddFill className="questions__icon" /> : <RiAddFill className="questions__icon" />}
                </Icon>

                <h3 className="questions__item-title" onClick={() => setExpanded(!expanded)} >
                  {title}
                </h3>
              </div>
              {expanded && (
                <p className="questions__description ">
                  {info}
                </p>
              )}
            </div>
          </Fade>
        </div>
      </div>
      </div>
)};
export default Accordion;

