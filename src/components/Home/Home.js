import React from 'react'

import Mlav from '../MHeader/Mlav'
import Mrav from '../MHeader/Mrav'
const Home = () => {
    return (
        <>
            <div className='bg-gradient-to-tr from-slate-600 to-white h-full  mb-3 relative'>
                <video autoPlay loop muted className='w-full h-full object-cover absolute mix-blend-overlay'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/waoa-f8825.appspot.com/o/NEW6.mp4?alt=media&token=e26783d1-7322-4258-8450-ccb861d1ade5' type='video/mp4'
                    />
                </video>
                <div className='container mx-auto py-2'>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div class="col-span-2">
                            <Mlav />
                        </div>
                        <div class="mx-auto">
                            <Mrav />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home