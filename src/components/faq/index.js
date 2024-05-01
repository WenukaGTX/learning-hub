import Accordion from '../Accordion';
//import SearchBar from '../Search';

import "./faq.scss"

import React, { useState, useEffect } from 'react';
//import SearchResultList from '../Search/SearchResultList';

function FAQs() {
    const [faqset, setFaqset] = useState(null);
    const [results, setResults] = useState([]);

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
        <section className='section-padding bt-ash'>
            <div className='container'>
                <h2 className='mb-4 text-center'>Frequently asked questions</h2>
                {/* <div className='search-bar-container'>
                    <SearchBar setResults={setResults} />

                    <div>
                        <SearchResultList results={results} />
                    </div>
                </div>
                 */}
                {renderFAQs()}
            </div>
        </section>
    )
}

export default FAQs;