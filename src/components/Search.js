//Set up our search component here 
//set up important values 
import { useRef, useEffect } from 'react';
const Search = ({ onChange, searchTerm, onSubmit, autoFocus, weatherCondition }) => {
    const inputRef = useRef();

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);
    

    return (
        <form onSubmit={onSubmit} className="search-component">
            <br />
            <input
                id="search"
                type="text"
                value={searchTerm}
                name="city"
                onChange={onChange}
                ref={inputRef}
                placeholder="Enter name of city"
                autoFocus={autoFocus}
            />
            <button type="submit" className='search-button'>Search</button>
        </form>
    );
};

export default Search;

