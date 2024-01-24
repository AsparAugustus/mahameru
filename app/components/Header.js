import React from 'react'

const Header = () => {
  return (
    <div className='bg-black p-2 md:p-4 lg:p-8 xl:p-8'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between '>
        {/* Logo or Branding */}
        <div className='text-white text-lg font-bold'>
          Your Logo
        </div>

        {/* Navigation Links */}
        <nav className='hidden md:flex space-x-4'>
          <a href='#' className='text-white hover:text-gray-300'>Home</a>
          <a href='#' className='text-white hover:text-gray-300'>About</a>
          <a href='#' className='text-white hover:text-gray-300'>Services</a>
          <a href='#' className='text-white hover:text-gray-300'>Contact</a>
        </nav>

        {/* Mobile Menu Button (Hidden on larger screens) */}
        <button className='md:hidden text-white focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Header