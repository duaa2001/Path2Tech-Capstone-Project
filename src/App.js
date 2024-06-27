// Set up our import statements and default attributes
// Set up our fetchData functionality
// Set up useEffect functions
// return function: titles, set up search component, set up weatherdata component

// EXTRA: possibly use different images depending on if its sunny, cloudy, etc. (Conditionals)
import {useState, useEffect, useCallback} from 'react';
import Search from './components/Search';
import Weather from './components/WeatherData';
import { getWeather } from './services/weather';
import weatherImage from './weather_search.webp';
import './App.css';

const App = () => {
    const title = 'Path2Tech Weather App';
    const [searchTerm, setSearchTerm] = useState('');
    const [weatherData, setWeather] = useState([]);
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState(false);
    const [searched, setSearched] = useState(false); // New state to track if a search has been made

    const fetchDataCallback = useCallback(async() => {
        try {
          setLoading(true);
          const res = await getWeather(location); //calls API function
          setWeather(res.data.list); // updates weather data with fetched list
          setLoading(false); //loading is false after fetching data
          setError(false);
        } catch {
          setError(true) // if data fetch not successful 
          setLoading(false);
        }
      }, [location]); //const fetchDataCallback for specified location
    
    useEffect(() => {
        fetchDataCallback ();
      }, [fetchDataCallback]); 
      //every time user puts in new location, fetchDataCallback runs again

    const handleSearchSubmit = (event) => {
        event.preventDefault (); //prevents page reload
        setLocation(searchTerm); //sets location to current search term
        // console.log('User clicked submit');
        setSearched(true); // Mark that a search has been made
    };

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };


  return (
    <div className="App">
        <main>
            <h1 className = 'title-label'>{title}</h1>
            <img src={weatherImage} alt="Weather" className="title-image" />
            <Search
                onChange={handleSearchChange}
                searchTerm = {searchTerm}
                onSubmit={handleSearchSubmit}
                autoFocus={true}>
                <label htmlFor='search'>
                    <strong>Search: {searchTerm}</strong>
                </label>
            </Search>
            {searched && error ? <p>There was an error loading on your data</p>:<p><em className="welcome-message">Welcome!</em></p>}
            {searched && loading ? <p>Data loading</p> : <Weather weatherData={weatherData}/>}

        </main>    
    </div>
  );
}

export default App;
