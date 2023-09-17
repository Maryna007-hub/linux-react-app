import { DateTime } from "luxon";

const API_KEY = 'df04a6426eb8c9305ebb65c9deb52f35';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';


const getWeatherData = (infoType,searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});
   
    return fetch(url)
    .then((res) => res.json()) 
    .then((data) => data);
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
         list: {temp, feels_like, temp_min, temp_max,humidity},
         name,
         dt,
         sys:{country, sunrise, sunset},
         weather,
         wind: {speed}
    } = data
    
    const {main: details, icon} = weather[0]
    
    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, 
    name, dt, country, sunrise, sunset, details, icon, speed}
    }
    const formatForecastWeather = (data) => {
        let { timezone, list } = data;
        list = list.slice(1, 6).map(list => {
            return {
                title: formatToLocalTime(list.dt, timezone, 'ccc'),
                temp: list.temp,
                icon: list.weather[0].icon
            }
        });
       
        return { timezone, list };
};


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)
    const {lat, lon} = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData('forecast', {
        lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units
    }).then(formatForecastWeather);


    return {...formattedCurrentWeather, ...formattedForecastWeather}    
}
const formatToLocalTime = (
    secs,
    zone,
    format = "ccc, dd LLL yyyy' | Local time: 'h:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

    export default getFormattedWeatherData;

  
    
    const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

   
    export {formatToLocalTime, iconUrlFromCode};
