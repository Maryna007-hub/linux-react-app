import React from 'react';
import {UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p> Cloudy or whatever</p>
        </div>
        <div className='flex  flex-row items-center justify-between py-3 text-white'>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-20'/>
           
            <p className='text-5xl'>30°</p>
            <div className='flex flex-col space-y-2'>
              <div className='flex font-light text-sm items-center justify-center'>
               <UilTemperature size={19} className='mr-2'/>
               Real fell:<span className='font-medium ml-2'>28°</span>
              </div>
              <div className='flex font-light text-sm items-center justify-center'>
               <UilTear size={19} className='mr-2'/>
               Humidity:<span className='font-medium ml-2'>56%</span>
              </div>
              <div className='flex font-light text-sm items-center justify-center'>
              <UilWind size={19} className='mr-2'/>
               Wind:<span className='font-medium ml-2'>12 km/h</span>
              </div>
            </div>
        </div>
          <div className='flex flex-row items-center justify-center
            space-x-2 text-white text-sm py-3'>
             <UilSun />
             <p className='font-light'>
              Rise: <span className='font-medium ml-2'>07:03 AM</span>
             </p>
             <p className='font-light'>|</p>

             <UilSunset />
             <p className='font-light'>
              Set: <span className='font-medium ml-2'>07:53 PM</span>
             </p>
             <p className='font-light'>|</p>
             <UilSun />
             <p className='font-light'>
              High: <span className='font-medium ml-2'>47°</span>
             </p>
             <p className='font-light'>|</p>
             <UilSun />
             <p className='font-light'>
              Low: <span className='font-medium ml-2'>40°</span>
             </p>
             <p className='font-light'>|</p>
           </div>
    </div>
  );
}

export default TemperatureAndDetails;