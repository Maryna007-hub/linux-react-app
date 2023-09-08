
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails
 from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';

function App() {
  const fetchWeather = async () => {
    const data= await getWeatherData('weather', { q: 'London' });
    console.log(data);
  }

  fetchWeather ();

  return (

    <div className="mx-auto max-w-screen-md mt-4 py-5 px-28 bg-gradient-to-br 
    from-cyan-600 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-[7px]">
      <TopButtons/>
      <Inputs/>
    
      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title='temperature evolution per day'/>
      <Forecast title='daily forecast'/>
    </div>
  );
}

export default App;
