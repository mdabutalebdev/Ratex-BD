import React from 'react'
import Image from 'next/image'
import Button from './Button'

const MiddleBanner = () => {
  return (
   <div className="pb-10">
     <div className="relative  w-[1370px] mx-auto h-[400px] md:h-[500px]">
      <Image
        src="/banner_four.jpg"
        alt="Summer Collection"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0   bg-opacity-30"></div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-right text-white">
        <p className="text-lg md:text-xl font-semibold mb-2">30% Off Sale</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Latest Exclusive</h2>
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">Summer Collection</h3>
      
        <Button>
          Shop Now
        </Button>
      </div>
    </div>
   </div>
  )
}

export default MiddleBanner
