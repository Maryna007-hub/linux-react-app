
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails
 from './components/TemperatureAndDetails';
 
function App() {
  return (

    <div className="mx-auto max-w-screen-md mt-4 py-5 px-28 bg-gradient-to-br 
    from-cyan-600 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-[7px]">
      <TopButtons/>
      <Inputs/>
    
      <TimeAndLocation/>
      <TemperatureAndDetails/>
    </div>
  );
}

export default App;
