import React from "react";

const SearchResult = ({result}) => {

    return (
        <div className="search-result" onClick={(e) => alert(`You selected ${result.question}!`)} >
            {result.question}
        </div>
    )
}

export default SearchResult;
