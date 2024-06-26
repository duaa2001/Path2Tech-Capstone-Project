// Set up our import statements and default attributes
// Set up our fetchData functionality
// Set up useEffect functions
// return function: titles, set up search component, set up weatherdata component

// NEW: include images in search and weather 
// EXTRA: possibly use different images depending on if its sunny, cloudy, etc. (Conditionals)
import React, { useState } from 'react';
import Search from './components/Search';
import { getWeather } from './services/weather';
import './App.css';

const App = () => {
    const title = 'Path2Tech Weather App';
    const [searchTerm, setSearchTerm] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm (event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault ();
        setLoading(true);
        setError(false);
    try { 
        const res = await getWeather(searchTerm);
        setWeatherData(res.data);
        setLoading(false);
    }catch {
                setError(true);
                setLoading(false);
            }
        };

    // To pass and determine the weather condition
    const weatherCondition = weatherData?.weather?.[0].main;

  return (
    <div className="App">
        <main>
        <h1 className = 'title-label'>{title}</h1>
        <Search
        onChange={handleSearchChange}
        searchTerm = {searchTerm}
        onSubmit={handleSearchSubmit}
        autoFocus={true}>
        weatherCondition= {weatherCondition}

            {/* <label htmlFor='search'>
                <strong>Search: {searchTerm}</strong>
            </label> */}
        </Search>
        {loading && <p>Loading...</p>}
                {error && <p>Error fetching weather data.</p>}
        </main>    
    </div>
  );
}

export default App;
