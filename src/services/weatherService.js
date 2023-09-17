import { DateTime } from "luxon";

const API_KEY = 'df04a6426eb8c9305ebb65c9deb52f35';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';


const getWeatherData = (infoType,searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});
   
    // onsole.log(url);
    return fetch(url)
    .then((res) => res.json()) 
    };

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
         main: {temp, feels_like, temp_min, temp_max, humidity},
         name,
         dt,
         sys: {country, sunrise, sunset},
         weather,
         wind: {speed}
    } = data
    
    const { main: details, icon}  = weather[0]

     return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, 
    name, dt, country, sunrise, sunset, details, icon, speed}
    }
    
     const formatForecastWeather = (data) => {

        let { timezone, list } = data;
        
        list = list.slice(1, 6).map(list => {
            return {
                title: formatToLocalTime(list.dt, timezone, 'hh:mm a'),
                temp: list.main.temp,
                icon: list.weather[0].icon
            }
           });
           
       return { timezone, list };
};

const getFormattedWeatherData = async (searchParams) => {

    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)

    const { lat, lon } = formattedCurrentWeather

     const formattedForecastWeather = await getWeatherData('forecast', {
     lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units
   }).then(formatForecastWeather);

 return {...formattedCurrentWeather, ...formattedForecastWeather}    
}

 const formatToLocalTime = (secs, zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format); 

  const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

     export default getFormattedWeatherData;
    export {formatToLocalTime, iconUrlFromCode};
