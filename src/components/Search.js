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

    // Function to get the image based on the weather condition;

    const getImageSrc = () => {
        switch (weatherCondition) {
            case 'Rain':
                return '/assets/images/wrainy.jpeg';
            case 'Clear':
                return '/assets/images/wsunny.jpeg';
            case 'Clouds':
                return '/assets/images/wwcloudy.jpeg';
            default:
                return null;
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <br />
            {weatherCondition && <img src={getImageSrc()} alt={weatherCondition} style={{ width: '100px', height: '100px' }} />}
            <br/>
            <input
                id="search"
                type="text"
                value={searchTerm}
                name="city"
                onChange={onChange}
                ref={inputRef}
                placeholder="Zip code"
                autoFocus={autoFocus}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;

