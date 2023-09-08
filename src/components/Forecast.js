import React from 'react'

function Forecast() {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
         <p className='text-white font-medium uppercase'>
          {/* {title} */}
        </p>
        </div>
        <hr className='my-2'/>
{/*  hourly  forecast */}
<div className='flex flex-row items-center justify-between text-white'>{/* main div*/} 
       
        <div className='flex flex-col items-center justify-center'> {/* 5 smalldiv inside*/} 
          <p>
           04:30 PM
         </p>
         <img src='http://openweathermap.org/img/wn/01d@2x.png'
          alt='' className='w-12 my-1'/>
         <p>30°</p>
        </div>

        <div className='flex flex-col items-center justify-center'> {/* 5 smalldiv inside*/} 
          <p>
           04:30 PM
         </p>
         <img src='http://openweathermap.org/img/wn/01d@2x.png'
          alt='' className='w-12 my-1'/>
         <p>30°</p>
        </div>

        <div className='flex flex-col items-center justify-center'> {/* 5 smalldiv inside*/} 
          <p>
           04:30 PM
         </p>
         <img src='http://openweathermap.org/img/wn/01d@2x.png'
          alt='' className='w-12 my-1'/>
         <p>30°</p>
        </div>
        <div className='flex flex-col items-center justify-center'> {/* 5 smalldiv inside*/} 
          <p>
           04:30 PM
         </p>
         <img src='http://openweathermap.org/img/wn/01d@2x.png'
          alt='' className='w-12 my-1'/>
         <p>30°</p>
        </div>

        <div className='flex flex-col items-center justify-center'> {/* 5 smalldiv inside*/} 
          <p>
           04:30 PM
         </p>
         <img src='http://openweathermap.org/img/wn/01d@2x.png'
          alt='' className='w-12 my-1'/>
         <p>30°</p>
        </div>
  </div>
</div>
  )
}

export default Forecast