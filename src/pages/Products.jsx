import React from 'react'
import Food from '../components/Home/Food'
import { TabChange } from '../utils/dynamic-title-function';

const Products = () => {
    TabChange("Sujangarh Pet Care | Products");
  return (
    <div className='py-40'>
        <Food />
    </div>
  )
}

export default Products