import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({imageLink, title, description}) => {
  const navigate = useNavigate();
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full object-cover flex items-center'>
        <div className='flex flex-col md:flex-row justify-start items-center px-4 md:px-40 gap-10'>
            <div className='w-full md:w-[90%]'>
                <img alt='image1'src={imageLink} />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 text-1xl md:text-4xl'>
                <h2 className='font-semibold text-yellow-600 text-center'>{title}</h2>
                <p className=' text-slate-700 text-center'>{description}</p>
                <button onClick={() => navigate('/contact')} className='border-cyan border-2 hover:bg-gray-800 rounded-md px-2 md:px-4 py-1 md:py-2 text-white'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card