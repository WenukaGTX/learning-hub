import Accordion from '../../components/Accordion';
import './faq.scss';
//import { faqs } from '../../services/faqData.js';

import React, { useState, useEffect } from 'react';

function FrequentQuestions() {
    const [faqset, setFaqset] = useState(null);

    useEffect(() => {
        fetch('https://662898c654afcabd0736410c.mockapi.io/intuit/training/reactjs/FrequentlyAskedQuestions')
          .then(response => response.json())
          .then(data => setFaqset(data))
          .catch(error => console.error('Error fetching data:', error));    
      }, []);


    const renderFAQs = () => {
        return faqset && faqset.map((item) => {
            return (
                <Accordion  
                    key={item.id}
                    question={item.question} 
                    answer={item.answer}
                 />
            );
        })
    }


    return (
        <div className='faq-section'>
            <div className='wrapper'>
                <section className="section type0">
                    <div className='content-area'>
                        <h2>Frequently asked questions</h2>

                         {renderFAQs()}
                         
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default FrequentQuestions;