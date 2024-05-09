import './search.scss';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar(props) {
  return (        
    <div className="search-input-wrapper">
        <HiMiniMagnifyingGlass />
        <input 
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </div>    
  );
}

export default SearchBar; 

