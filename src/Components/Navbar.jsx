import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='w-full px-4 sm:px-0 pt-5 sticky top-0 backdrop-blur-md z-50 mb-5'>
        <nav className='mx-auto flex justify-between items-center '>
          <div>
            <img src="/logo.svg" alt="logo" className='hover:scale-105 transition' />
          </div>
          <div className='hidden  sm:flex gap-4'>
            <a className='hover:scale-110 hover:opacity-60 transform transition-transform duration-500 ease-in-out' href="#" id='features'>Features</a>
            <a className='hover:scale-110 hover:opacity-60 transform transition-transform duration-500 ease-in-out' href="#" id='pricing'>Pricing</a>
            <a className='hover:scale-110 hover:opacity-60 transform transition-transform duration-500 ease-in-out' href="#" id='testimonials'>Testimonials</a>
          </div>

          <div className='md:hidden'>
            <button onClick={() => {
              setOpen((prev) => !prev);
            }}>
              {
                open ? (
                  <X />
                ) : (
                  <Menu />
                )
              }
            </button>
          </div>
        </nav>


        {open && (
          <div className='md:hidden flex flex-col gap-4 mt-3'>
            <a className='hover:scale-110 hover:opacity-60 transform transition-transform duration-500 ease-in-out' href="#" id='features'>Features</a>
            <a className='hover:scale-110 hover:opacity-60 transform transition-transform duration-500 ease-in-out' href="#" id='pricing'>Pricing</a>
            <a className='hover:scale-110 hover:opacity-60 transform transition-transform duration-500 ease-in-out' href="#" id='testimonials'>Testimonials</a>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar