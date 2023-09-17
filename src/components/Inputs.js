import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs(setQuery, units, setUnits) {
  const [city, setCity] = useState('');
const handleSearchClick = () => {
  if (city !== '') setQuery({q: city})
}

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input 
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type='text'
         placeholder='Search for a city...'
         className='text-xl font-light p-2 w-full shadow-xl 
         focus:outline-none capitalize placeholder:lowercase'/>
       <UilSearch size={27} 
      className='text-white cursor-pointer transition ease-out hover:scale-125'
      onClick={handleSearchClick}/>
      
      <UilLocationPoint size={27} 
      className='text-white cursor-pointer transition ease-out hover:scale-125'/>
      </div> 

      <div className='flex flex-row w-1/4 items-center justify-center'>

         <button name='metric' 
         className='text-xl text-white font-light mx-1 hover:scale-125 transition ease-out'>
            °C</button>  

            <p className='text-xl text-white mx-1'>|</p>

         <button name='imperial' 
         className='text-xl text-white font-light mx-1 hover:scale-125 transition ease-out'>
           °F</button>
      </div>
    </div>
    
  )
}

export default Inputs;