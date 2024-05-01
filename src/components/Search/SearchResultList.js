import React from "react";
import SearchResult from "./SearchResult";

const SearchResultList = ({results}) => {

    return (
        <div className="resultList">
            {
                results.map((result, id) => {
                    return <SearchResult result={result} key={id} />
                })
            }
        </div>
    )
}

export default SearchResultList;
