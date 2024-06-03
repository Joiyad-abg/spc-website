import React from 'react'
import { TabChange } from '../utils/dynamic-title-function';
import { servicesData } from '../data/cards/servicesData';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Heading from '../components/Heading/Heading';

const Services = () => {
    TabChange("Sujangarh Pet Care | Services");
  return (
    <div className='py-40'>
        <Heading title='Services we offer' />
        <div className='px-4 w-full flex flex-wrap gap-16 justify-center items-center'>
            {servicesData.map(({imageUrl, title, description, bgcolor}) => (
                <ServiceCard imageUrl={imageUrl} title={title} description={description} bgcolor={bgcolor} />
            ))}
        </div>
    </div>
  )
}

export default Services