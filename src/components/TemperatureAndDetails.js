import React from 'react';
import {UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';

function TemperatureAndDetails({weather: {
details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}})
{
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex  flex-row items-center justify-between py-3 text-white'>
            <img src={iconUrlFromCode(icon)} alt='' className='w-20'/>
           
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>

              <div className='flex font-light text-sm items-center justify-center'>
               <UilTemperature size={20} className='mr-2'/>
               Real fell:<span className='font-medium ml-2'>{`${feels_like.toFixed()}°`}</span>
              </div>

              <div className='flex font-light text-sm items-center justify-center'>
               <UilTear size={20} className='mr-2'/>
               Humidity:<span className='font-medium ml-2'>{`${humidity.toFixed()}%`}</span>
              </div>

              <div className='flex font-light text-sm items-center justify-center'>
              <UilWind size={20} className='mr-2'/>
               Wind:<span className='font-medium ml-2'>{`${speed.toFixed()} km/h`} </span>
              </div>
            </div>
        </div>
          <div className='flex flex-row items-center justify-center
            space-x-2 text-white text-sm py-3'>
             <UilSun size={20}/>
             <p className='font-light'>
              Rise:{' '}
              <span className='font-medium ml-2'>
               {formatToLocalTime(sunrise, timezone, 'hh:mm a')}
                </span>
             </p>
             <p className='font-light'>|</p>

             <UilSunset size={20}/>
             <p className='font-light'>
              Set: <span className='font-medium ml-2'>
              {formatToLocalTime(sunset, timezone, 'hh:mm a')}
                </span>
             </p>
             <p className='font-light'>|</p>
             <UilSun size={20}/>
             <p className='font-light'>
              High: <span className='font-medium ml-2'>47°</span>
             </p>
             <p className='font-light'>|</p>
             <UilSun size={20}/>
             <p className='font-light'>
              Low: <span className='font-medium ml-2'>40°</span>
             </p>
             <p className='font-light'>|</p>
           </div>
    </div>
  );
}

export default TemperatureAndDetails;