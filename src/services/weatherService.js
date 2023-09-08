const API_KEY = 'df04a6426eb8c9305ebb65c9deb52f35';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

//weather?q={city name}&appid={API key}';

// https://api.openweathermap.org/data/3.0/onecall?
//lat={lat}&lon={lon}&exclude={part}&appid={API key}
const getWeatherData = (infoType,serchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...serchParams, appid:API_KEY});

   
    return fetch(url)
    .then((res) => res.json())
    
}
export default getWeatherData;