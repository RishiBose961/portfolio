import React from 'react'
import { BriefcaseIcon, ArrowDownLeftIcon } from '@heroicons/react/24/solid'

const Worklist = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-2'>
            <div className='bg-transparent h-64 mb-4 ring-1 ring-rose-600 rounded-2xl mx-2'>
                <div>
                    <div className='bg-orange-400 h-32 rounded-t-2xl'>
                        <div className='flex justify-end'>
                            <a href=''><ArrowDownLeftIcon className="h-6 w-6 rotate-180 bg-lime-300 text-black rounded-full" /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="https://i.pinimg.com/564x/18/92/5f/18925f011b3b075a897049a3ee62f2c4.jpg" alt="loading" className="h-32 rounded-full w-32 mt-8 ring-4 dark:ring-white ring-black" />
                        </div>
                    </div>
                    {/* about */}
                    <div className='flex justify-center mt-20'>
                        <p className='uppercase font-bold'>Create Read Update Application</p>
                    </div>

                </div>
            </div>
            <div className='bg-transparent h-64 mb-4 ring-1 ring-rose-600 rounded-2xl mx-2'>
                <div>
                    <div className='bg-sky-200 h-32 rounded-t-2xl'>
                        <div className='flex justify-end'>
                            <a href='https://cryptocoins31.vercel.app/'><ArrowDownLeftIcon className="h-6 w-6 rotate-180 bg-lime-400 text-black rounded-full" /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="https://i.pinimg.com/564x/d4/dd/37/d4dd37c7579bda2fcd16589221e47659.jpg" alt="loading" className="h-32 rounded-full w-32 mt-8 ring-4 dark:ring-white ring-black" />
                        </div>
                    </div>
                    {/* about */}
                    <div className='flex justify-center mt-20'>
                        <p className='uppercase font-bold'>CryptoCoins</p>
                    </div>
                </div>
            </div>
            <div className='bg-transparent h-64 mb-4 ring-1 ring-rose-600 rounded-2xl mx-2'>
                <div>
                    <div className='bg-[#2539e9] h-32 rounded-t-2xl'>
                        <div className='flex justify-end'>
                            <a href='#'><ArrowDownLeftIcon className="h-6 w-6 rotate-180 bg-lime-400 text-black rounded-full" /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="https://i.pinimg.com/564x/12/17/ca/1217ca08b60dbd8446008ee810ddeb0b.jpg" alt="loading" className="h-32 rounded-full w-32 mt-8 ring-4 dark:ring-white ring-black" />
                        </div>
                    </div>
                    {/* about */}
                    <div className='flex justify-center mt-20'>
                        <p className='uppercase font-bold'>HairCuts Offical</p>
                    </div>
                </div>
            </div>
            <div className='bg-transparent h-64 mb-4 ring-1 ring-rose-600 rounded-2xl mx-2'>
                <div>
                    <div className='bg-[#e0cb0d] h-32 rounded-t-2xl'>
                        <div className='flex justify-end'>
                            <a href='https://thinks.cyclic.app/'><ArrowDownLeftIcon className="h-6 w-6 rotate-180 bg-lime-400 text-black rounded-full" /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img alt="loading" src="https://i.pinimg.com/564x/4f/46/21/4f462105d8b7ca053ff9d62e47c577a9.jpg" className="h-32 rounded-full w-32 mt-8 ring-4 dark:ring-white ring-black" />
                        </div>
                    </div>
                    {/* about */}
                    <div className='flex justify-center mt-20'>
                        <p className='uppercase font-bold'>Think</p>
                    </div>
                </div>
            </div>
            <div className='bg-transparent h-64 mb-4 ring-1 ring-rose-600 rounded-2xl mx-2'>
                <div>
                    <div className='bg-[#0dc7e0] h-32 rounded-t-2xl'>
                        <div className='flex justify-end'>
                            <a href='https://hnreports.up.railway.app/'><ArrowDownLeftIcon className="h-6 w-6 rotate-180 bg-lime-400 text-black rounded-full" /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img alt="loading" src="https://i.pinimg.com/564x/c5/29/d5/c529d5901872c2f0e2ac43df38c4385e.jpg" className="h-32 rounded-full w-32 mt-8 ring-4 dark:ring-white ring-black" />
                        </div>
                    </div>
                    {/* about */}
                    <div className='flex justify-center mt-20'>
                        <p className='uppercase font-bold'>Hn Report</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Worklist