import React from 'react';

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center m-6'>
        <p className='text-white text-xl font-light'>
              Monday, 7 September 2023   |   Local time: 12:55 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
         <p className='text-white text-3xl font-medium'> Lisbon, PT 
              </p>
        </div>
    </div>
  )
}

export default TimeAndLocation;