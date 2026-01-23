import React from 'react'

const Pricing = () => {


    const brands = [
  {
    name: "Facebook",
    src: "client-01.svg",
  },
  {
    name: "spark",
    src: "client-06.svg",
  },
  {
    name: "Airbnb",
    src: "client-03.svg",
  },
  
  
  {
    name: "Cadbury",
    src: "client-04.svg",
  },

  {
    name:"Amazon",
    src:"client-07.svg"
  },

  {
    name:"Tinder",
    src:"client-02.svg"
  }
    
  
];


  return (
    <>
    <div className='max-h-screen mt-6 text-center p-3 space-y-3 mb-6 '>
        <h1 className='font-bold text-5xl'>Our Pricing plan</h1>
        <p className='text-gray-400'>Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.</p>
    </div>

    <div className=' flex gap-2.5 max-sm:flex-col mb-6'>
        <div className='max-sm:w-4/5 mx-auto space-x-3  bg-radial from-purple-950 from-10%  to-slate-950 to-90% p-5 w-1/3  space-y-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Starter</h1>
                <img src="pricing-icon-01.svg" alt="image" />
            </div>
            <div className='flex justify-start items-center gap-4 mb-4 '>
                <span className='font-bold text-6xl '>$10</span>
                <span className='text-1xl text-gray-400 block'>/month <h4>(billed anually)</h4></span>
            </div>

            <hr  />
            <div className='space-y-4 mb-3'>
                <ul className='list-disc pl-6 text-gray-400 space-y-3'>
                    <li><span className='mx-3 tracking-wide'>Subscription with levels</span></li>
                    <li><span className='mx-3 tracking-wide'>Advanced features included</span></li>
                    <li><span className='mx-3 tracking-wide'>Shared workspaces & tools</span></li>
                    <li><span className='mx-3 tracking-wide'>Premium versions functionality</span></li>
                    <li><span className='mx-3 tracking-wide'>Customizing the outputs</span></li>
                    <li><span className='mx-3 tracking-wide'>Priority customer support</span></li>
                </ul>

                <div className='flex flex-col justify-center items-center space-y-3 mt-3'>
                    <button className='p-2 border-2 border-purple-950 w-full rounded-2xl hover:border-amber-50'>Get Plan</button>
                    <p className='text-gray-400'>No extra hidden charges</p>
                </div>
                
            </div>

            
        </div>


        <div className='max-sm:w-4/5 mx-auto space-x-3  bg-radial from-purple-950 from-10%  to-slate-950 to-90% p-5 w-1/3  space-y-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Medium</h1>
                <img src="pricing-icon-02.svg" alt="image" />
            </div>
            <div className='flex justify-start items-center gap-4 mb-4 '>
                <span className='font-bold text-6xl '>$59</span>
                <span className='text-1xl text-gray-400 block'>/month <h4>(billed anually)</h4></span>
            </div>

            <hr  />
            <div className='space-y-4 mb-3'>
                <ul className='list-disc pl-6 text-gray-400 space-y-3'>
                    <li><span className='mx-3 tracking-wide'>Subscription with levels</span></li>
                    <li><span className='mx-3 tracking-wide'>Advanced features included</span></li>
                    <li><span className='mx-3 tracking-wide'>Shared workspaces & tools</span></li>
                    <li><span className='mx-3 tracking-wide'>Premium versions functionality</span></li>
                    <li><span className='mx-3 tracking-wide'>Customizing the outputs</span></li>
                    <li><span className='mx-3 tracking-wide'>Priority customer support</span></li>
                </ul>

                <div className='flex flex-col justify-center items-center space-y-3 mt-3'>
                    <button className='p-2 border-2 border-purple-950 w-full rounded-2xl hover:border-amber-50'>Get Plan</button>
                    <p className='text-gray-400'>No extra hidden charges</p>
                </div>
                
            </div>

            
        </div>

        <div className='max-sm:w-4/5 mx-auto space-x-3  bg-radial from-purple-950 from-10%  to-slate-950 to-90% p-5 w-1/3  space-y-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Business</h1>
                <img src="pricing-icon-03.svg" alt="image" />
            </div>
            <div className='flex justify-start items-center gap-4 mb-4 '>
                <span className='font-bold text-6xl '>$289</span>
                <span className='text-1xl text-gray-400 block'>/month <h4>(billed anually)</h4></span>
            </div>

            <hr  />
            <div className='space-y-4 mb-3'>
                <ul className='list-disc pl-6 text-gray-400 space-y-3'>
                    <li><span className='mx-3 tracking-wide'>Subscription with levels</span></li>
                    <li><span className='mx-3 tracking-wide'>Advanced features included</span></li>
                    <li><span className='mx-3 tracking-wide'>Shared workspaces & tools</span></li>
                    <li><span className='mx-3 tracking-wide'>Premium versions functionality</span></li>
                    <li><span className='mx-3 tracking-wide'>Customizing the outputs</span></li>
                    <li><span className='mx-3 tracking-wide'>Priority customer support</span></li>
                </ul>

                <div className='flex flex-col justify-center items-center space-y-3 mt-3'>
                    <button className='p-2 border-2 border-purple-950 w-full rounded-2xl hover:border-amber-50'>Get Plan</button>
                    <p className='text-gray-400'>No extra hidden charges</p>
                </div>
                
            </div>

            
        </div>
    </div>

    <div className=" mt-6 relative w-4/5 overflow-hidden mx-auto p-4">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center mx-8 group"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-80 blur-xl transition duration-500"></div>

                <img
                  src={skill.src}
                  alt={skill.name}
                  className="relative z-10 h-16 w-16 md:h-20 md:w-20 object-contain"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}

export default Pricing