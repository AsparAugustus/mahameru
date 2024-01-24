import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-lime-600 w-full'>
        <div className='w-full h-64 relative'>


  <Image
    src="/images/hero1.png" // Path to your image from the "public" directory
    alt="Hero Image"
    objectFit="cover" // change to suit your needs
    className="w-full object-scale-down bg-mint text-mint fill-current"
    fill
  />


        </div>


    </div>
  )
}

export default Hero