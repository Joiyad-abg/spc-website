import React from 'react'

const ServiceCard = ({imageUrl, title, description, bgcolor}) => {
  return (
    <div className='w-[100%] md:w-[40%] flex flex-col justify-center items-center p-4 md:p-6 gap-2 md:gap-4 shadow-2xl rounded-lg'
    style={{background: `${bgcolor}`}}
    >
        <div className='w-[100px] h-[100px] pb-2'>
            <img alt='img1' src={imageUrl} width="100%" />
        </div>
        <div className='text-center text-2xl font-bold'>{title}</div>
        <div className='text-center text-1xl'>
            {description}
        </div>
    </div>
  )
}

export default ServiceCard