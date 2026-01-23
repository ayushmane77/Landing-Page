
import React from 'react'

const AdditionalFeatures = () => {

  return (
    <>
    <div className="max-h-screen flex items-center">
      <div
        className="
          bg-radial from-purple-950 from-10%  to-slate-950 to-90%
          w-4/5 mx-auto mt-1 mb-4
          flex justify-between items-center
          rounded-2xl p-6
          max-sm:w-[90%] max-sm:text-center
           hover:scale-[1.02] transition-transform duration-300
        "
      >
        {/* LEFT CONTENT */}
        <div className="space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center">
          <button
            className="
              px-3 py-1 shadow-lg rounded-full bg-transparent
              hover:border hover:border-white
              flex gap-2 items-center
            "
            style={{ boxShadow: '0 4px 14px 0 rgba(236, 72, 153, 0.6)' }}
          >
            <img src="/cool.svg" alt="cool" className="w-5 h-5" />
            <span className="text-purple-300 text-sm">
              AI Powered writing tools
            </span>
          </button>

          <h1 className="tracking-wide text-3xl font-bold max-sm:text-2xl">
            Intelligent writing assistance
          </h1>

          <p className="text-gray-400 max-w-sm max-sm:text-sm">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process easier and faster.
          </p>

          <button
            className="
              hover:bg-pink-700 transition
              rounded-2xl px-5 py-2
              text-lg max-sm:text-base
              border border-purple-100
            "
          >
            Learn more →
          </button>
        </div>

        {/* RIGHT IMAGE – hidden on mobile */}
        <div className="hidden sm:block">
          <img src="/big-icon.svg" alt="feature" className="w-64" />
        </div>
      </div>
    </div>


    <div className='max-h-screen flex max-sm:flex-col max-sm:w-[90%] w-4/5 mx-auto gap-3 mb-4'>
        {/* left box */}

        <div className=' grow-5 rounded-2xl p-6 space-y-4 bg-radial from-purple-950 from-10% to-slate-950 to-90% mb-3  hover:scale-[1.02] transition-transform duration-300 '>
            <div className="  p-2 ml-3 mt-3 grid place-items-center size-16 rounded-full bg-transparent border border-white">
                <img className="mx-auto" src="/icon-02.svg" />
            </div>

            <div className=' p-2 ml-3 mt-3  space-y-4'>
                <h2 className='font-bold text-3xl max-sm:text-2xl '>Empowering writing excellence</h2>
                <p className='w-full text-gray-400'>Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process...</p>
            </div>

        </div>

        {/* right box */}

        <div className='bg-amber-400 grow-3 rounded-2xl space-y-4 p-6  bg-radial from-purple-950 from-10% to-slate-950 to-80% mb-3  hover:scale-[1.02] transition-transform duration-300'>
            <div className=" p-2 ml-3 mt-3 grid place-items-center size-16 rounded-full bg-transparent border border-white">
                <img className="mx-auto" src="/icon-03.svg" />
            </div>

            <div className='space-y-4'>
                <h2 className='font-bold text-3xl max-sm:text-2xl'>Grammer and spell check</h2>
                <p className='text-wrap text-gray-400'>Our AI writing tool is designed to empower you with exceptional writing capabilities.</p>
            </div>
        </div>
      </div>

      </>
  )
}

export default AdditionalFeatures
