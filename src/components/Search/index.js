import React, {useState} from "react";
//import {FaSearch} from "react-icons/fa"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import "./search.scss"

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch('https://662898c654afcabd0736410c.mockapi.io/intuit/training/reactjs/FrequentlyAskedQuestions')
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((item) => {
                return value && item && item.question.includes(value)
            });
            console.log(results);
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (

        <div className="search-input-wrapper">
            {/* <FaSearch id="search-icon" /> */}
            <HiMiniMagnifyingGlass />
            <input 
                placeholder="Type to search..." 
                value={input} 
                onChange={(e) => handleChange(e.target.value)} 
            />
            
        </div>
    )
}

export default SearchBar;
