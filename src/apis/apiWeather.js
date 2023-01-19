import axios from "axios";


export const apiWeather = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?aqi=no'
});