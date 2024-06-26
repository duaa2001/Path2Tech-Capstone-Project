//access API goes here, return res 
//can use the same API as in class
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getWeather(loc) {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${API_KEY}&units=imperial`);
    console.log(res.data.list);
    return res;
}