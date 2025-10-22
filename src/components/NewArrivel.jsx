 
import React from 'react'
import Heading from './Heading'
import ProductCard from './ProductCard'

const NewArrivel = () => {
  return (
    <div className=''> 
        <div className="container mx-auto px-24">
            <Heading heading="New " span="Arrivals" subheading="Check out the latest additions to our collection!" />

            <div className="">
                <ProductCard/>
            </div>
        </div>
    </div>
  )
}

export default NewArrivel