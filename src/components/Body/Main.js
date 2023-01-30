import React from 'react'
import Photos from '../../image/Untitled-1.png'
import Info from '../Info/Info'
const Main = () => {
    return (
        <div className='container mx-auto px-2'>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="col-span-2 ...">
                    <Info/>
                </div>
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <img src={Photos} alt="Loading" className='rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Main