//Get 4-5 pieces of data from our API
//Set that up here

import React from 'react';
import rainImage from '../wrainy.jpeg';
import cloudsImage from '../wwcloudy.jpeg';
import clearImage from '../wsunny.jpeg';

const Weather = ({ weatherData }) => {
  const getImage = (weatherType) => {
    switch (weatherType) {
      case 'Rain':
        return rainImage;
      case 'Clouds':
        return cloudsImage;
      case 'Clear':
        return clearImage;
      default:
        return null; // Default case
    }
  };

  return (
    <ul className="weather-items-container" id="weather-items-container">
      {weatherData.map((item, i) => {
        return (
          <React.Fragment key={item.dt}>
            {i % Math.floor(weatherData.length / 5) === 0 ? ( // ensures every 5th item is displayed
              <li className="weather-items">
                <p>{item.dt_txt}</p>
                <p>{item.weather[0].main}</p>
                <img src={getImage(item.weather[0].main)} alt={item.weather[0].main} /> {/* Add meaningful alt text */}
                <p>{item.main.temp} F</p>
                <p>wind: {item.wind.speed} mph</p>
                <p>humidity: {item.main.humidity}%</p>
              </li>
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Weather;
