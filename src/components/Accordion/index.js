import { useState } from 'react';
import './accordion.scss';

const Accordion = ({question, answer}) => {
    const[isVisible, setIsVisble] = useState(false);

    const toggleAccordion = () => {
        setIsVisble(!isVisible);
    }

      
    return (
        <div className='accordion' onClick={toggleAccordion}>
            <div className='item'>
                <div className='text'>
                    <p>{question}</p>

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className={`icon ${isVisible? "rotate" : ""}`}
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                        />
                    </svg>

                </div>
                
                <div className={`hidden-box ${isVisible? "active-box" : ""}`}>
                    <p>{answer}</p>
                </div>

            </div>
        </div>
    )
  };

  export default Accordion;