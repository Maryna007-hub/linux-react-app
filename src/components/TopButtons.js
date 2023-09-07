import React from 'react'

function TopButtons() {
    const cities = [
        {
          id:1,
          title: 'Lisbon'
        },
        {
          id:2,
          title: 'Madrid'
        },
        {
          id:3,
          title: 'Paris'
        },
        {
          id:4,
          title: 'Berlin'
        },
        {
          id:5,
          title: 'London'
        }
    
      ]
  return (
    <div className='flex items-center justify-around my-6'>
{cities.map((city) => (
    <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
))}
    </div>
  )
}

export default TopButtons;