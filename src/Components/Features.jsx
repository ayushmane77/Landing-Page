import React from 'react'

const Features = () => {
    return (
        <div className='mt-6 min-h-screen mb-1'>
            <div className='mx-auto max-w-sm flex justify-center'>
                <button className='p-1 shadow-lg rounded-4xl bg-transparent hover:border hover:border-white   flex gap-2 items-center '
                    style={{ boxShadow: "0 4px 14px 0 rgba(236, 72, 153, 0.6)" }}
                >
                    <img src="/cool.svg" alt="cool" />
                    <span className='text-purple-300'>Some of main Features</span>
                </button>
            </div>

            <div className='my-4 mx-auto w-4/5 flex justify-center   p-2'>
                <h2 className='text-center text-4xl font-bold max-sm:text-2xl'>
                    Key Features of Our Tools
                </h2>
            </div>

            <div className='my-4 mx-auto w-2/4 flex flex-col gap-5 justify-center items-center   p-2 max-sm:w-4/5'>
                <span className='text-center text-gray-400 text-[20px] max-sm:text-sm '>
                    Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
                </span>
            </div>


            <div className='flex flex-wrap justify-center w-4/5 max-sm:w-[95%] mx-auto p-1'>

                {/** CARD 1 */}
                <div className="
                feature-card
                w-[30%] max-sm:w-full
                flex flex-col gap-3 justify-center p-6
                border border-gray-800/40 max-sm:border-0
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                 hover:border-blue-500/40
                rounded-2xl">

                    <div className="mx-auto grid place-items-center size-16 rounded-full bg-transparent border border-white">
                        <img className="mx-auto" src="/icon-01.svg" />
                    </div>
                    <h3 className="text-center font-bold">Intelligent Writing Assistance</h3>
                    <p className="text-center text-gray-400">
                        Our AI writing tool analyzes your content, suggests improvements,
                    </p>
                </div>

                {/** CARD 2 */}
                <div className="
                feature-card
                w-[30%] max-sm:w-full
                flex flex-col gap-3 justify-center p-6
                border border-gray-800/40 max-sm:border-0
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                 hover:border-blue-500/40
                rounded-2xl">

                    <div className="mx-auto grid place-items-center size-16 rounded-full bg-transparent border border-white">
                        <img className="mx-auto" src="/icon-02.svg" />
                    </div>
                    <h3 className="text-center font-bold">Grammar and Spell Check</h3>
                    <p className="text-center text-gray-400">Say goodbye to embarrassing typos and grammar mistakes</p>
                </div>

                {/** CARD 3 */}
                <div className="
                feature-card
                w-[30%] max-sm:w-full
                flex flex-col gap-3 justify-center p-6
                border border-gray-800/40 max-sm:border-0
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                 hover:border-blue-500/40
                rounded-2xl">

                    <div className="mx-auto grid place-items-center size-16 rounded-full bg-transparent border border-white">
                        <img className="mx-auto" src="/icon-03.svg" />
                    </div>
                    <h3 className="text-center font-bold">Plagiarism Detection</h3>
                    <p className="text-center text-gray-400">Originality is key, and our AI writing tool helps you maintain it</p>
                </div>

                {/** CARD 4 */}
                <div className="
                feature-card
                w-[30%] max-sm:w-full
                flex flex-col gap-3 justify-center p-6
                border border-gray-800/40 max-sm:border-0
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                 hover:border-blue-500/40
                rounded-2xl">

                    <div className="mx-auto grid place-items-center size-16 rounded-full bg-transparent border border-white">
                        <img className="mx-auto" src="/icon-04.svg" />
                    </div>
                    <h3 className="text-center font-bold">Voice to Text Conversion</h3>
                    <p className="text-center text-gray-400">Transform your spoken words into written text</p>
                </div>

                {/** CARD 5 */}
                <div className="
                feature-card
                w-[30%] max-sm:w-full
                flex flex-col gap-3 justify-center p-6
                border border-gray-800/40 max-sm:border-0
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                 hover:border-blue-500/40
                rounded-2xl">

                    <div className="mx-auto grid place-items-center size-16 rounded-full bg-transparent border border-white">
                        <img className="mx-auto" src="/icon-05.svg" />
                    </div>
                    <h3 className="text-center font-bold">Style and Tone Adaptation</h3>
                    <p className="text-center text-gray-400">Whether you need a professional or positive tone</p>
                </div>

                {/** CARD 6 */}
                <div className="
                feature-card
                w-[30%] max-sm:w-full
                flex flex-col gap-3 justify-center p-6
                border border-gray-800/40 max-sm:border-0
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                 hover:border-blue-500/40
                rounded-2xl">

                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-transparent border border-white">
                        <img className="mx-auto" src="/icon-06.svg" />
                    </div>
                    <h3 className="text-center font-bold">Content Generation</h3>
                    <p className="text-center text-gray-400">Need inspiration or help generating content?</p>
                </div>

            </div>

        </div>
    )
}

export default Features