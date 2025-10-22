import React from 'react'
import ProductCard from './ProductCard'
import Heading from './Heading'

const DayOfDeal = () => {
  return (
    <div className='py-16'> 
        <div className="container mx-auto px-10">
            <div className="ml-12">
            <Heading heading="Day of the " span="Deals" subheading="Don't miss out on our exclusive offers!" />

            </div>
            <ProductCard/>
        </div>
    </div>
  )
}

export default DayOfDeal