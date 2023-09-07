import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
function Inputs() {
  return (
    <div> className='flex flex-row justify-center my-6'
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type='text'
         placeholder='Search for a city...'
         className='text-xl font-light p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
         <UilSearch/>

      </div>
    </div>
  )
}

export default Inputs