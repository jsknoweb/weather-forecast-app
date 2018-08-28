import axios from 'axios';

const API_KEY = 'ba6f290e023cf673f4eef85d6926b011';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=';
const URL = `${ROOT_URL}${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const completeUrl = `${URL}&q=${city},us`;
    const request = axios.get(completeUrl);

    console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

