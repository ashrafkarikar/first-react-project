import React from 'react'


const HeroSection = () => {
  return (
    <div className='flex flex-col bg-green-400 text-white items-center justify-center h-[80vh]' style={{
        backgroundImage:"url('/src/assets/bg-image.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'Center'
    }}>
        <h2 className='text-4xl md:text-6xl mb-4 font-bold'>Welcome to my Website</h2>
        <p className='text-lg md:text-xl mb-4'>Your Jurney start here</p>
        <button className='bg-white text-indigo-400 font-semibold py-2 px-6 rounded-xl hover:bg-gray-200 cursor-pointer'>Purches Products</button>
    </div>
  )
}

export default HeroSection