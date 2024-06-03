import React from 'react'

const FoodCard = ({imageUrl, description, price}) => {
  return (
    <div className='w-72 flex flex-col justify-center items-center p-4 md:p-4 gap-2 md:gap-4 shadow-2xl'>
        <div className='w-[250px] h-[300px]'>
            <img alt='img1' src={imageUrl} width="100%" />
        </div>
        <div className='text-center text-1xl'>
            {description}
        </div>
        <button className='w-full py-2 text-white bg-red-500 rounded-md'>View Details</button>
    </div>
  )
}

export default FoodCard