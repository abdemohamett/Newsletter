import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function Hero() {
  return (
    <div className='max-w-6xl mx-auto w-full mt-24'>
        <div className='flex items-center justify-center'>
        <Badge variant='destructive'>
            Beta Version
        </Badge>
        </div>
        <h1 className='lg:text-6xl md:text-6xl text-5xl text-gray-700 text-center font-bold '>A newsletter platform designed 
        <br className='hidden md:block'/> to fuel your <span className='bg-gradient-to-r from-indigo-600 via-indigo-400-500 to-indigo-300 bg-clip-text text-transparent'>Audience.</span></h1>
        <p className='mt-10 text-md text-gray-600  text-center'>
        Fuel your newsletters with our platform, it built to help you grow and stand big - and make your Audience feel special✨ .
        </p>

         <div className='mt-10 flex items-center justify-center'>
        <Button className='px-6 py-6 text-lg'>Start for free</Button>
        </div>
    </div>
  )
}

export default Hero

// Experience explosive growth with our newsletter platform, now 5x Faster
// Revolutionizing newsletters for rapid growth – 5x Faster
// Fueling Growth: The Newsletter Platform, 5x Faster!
// The growth-focused newsletter platform, designed for lightning-fast results: 5x Faster
// Fueling Growth with Our Newsletter Platform, Now 5x Faster!