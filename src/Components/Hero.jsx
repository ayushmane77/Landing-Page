import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='mt-6 min-h-auto mb-2 pt-6'>
            <div className='mx-auto max-w-sm flex justify-center '>
                <button className='mb-3 p-1 rounded-lg bg-transparent hover:border hover:border-white   flex gap-2 items-center max-sm:mt-6 max-sm: w-3/4 '
                    style={{ boxShadow: "0 4px 14px 0 rgba(236, 72, 153, 0.6)" }}
                >
                    <img src="/cool.svg" alt="cool" />
                    <span className='text-purple-300'>Your ultimate creative companion</span>
                </button>
            </div>

            <div className='my-4 mx-auto w-4/5 flex justify-center   p-2'>
                <h2 className='text-center text-5xl font-bold max-sm:text-2xl'>
                    Elevate Your Content with Our AI-Powered Writing Tool
                </h2>
            </div>

            <div className='my-4 mx-auto w-2/4 flex flex-col gap-5 justify-center items-center   p-2 max-sm:w-4/5'>
                <span className='text-center text-gray-500 text-[20px] '>
                    Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites. Comes with everything you need - pages, features, sections, components and more that you can easily customize.
                </span>

                <button className=' hover:scale-105 transform transition-transform duration-500 ease-in-out  px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-800 hover:opacity-75'>start your free trail</button>
            </div>

            <div className='my-4 mx-auto w-4/5 flex justify-center   p-2 max-sm:w-[90%]'>
                <img src="heroImg.svg" alt="heroImage" />
            </div>

        </div>
    </>
  )
}

export default Hero