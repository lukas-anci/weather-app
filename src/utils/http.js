import axios from 'axios';
import API_KEY from '../config/config.js';

const baseUrl = 'https://api.openweathermap.org/data/2.5/';

const getWeather = async (query) => {
  const response = await axios.get(
    `${baseUrl}weather?q=${query}&units=metric&APPID=${API_KEY}`
  );
  // console.log('responsedata', response.data);
  return response.data;
};
export default getWeather;
