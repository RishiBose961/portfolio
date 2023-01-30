import React from 'react'

const FollowFor = () => {
  return (
    <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3' id='follow'>
    <div className='flex justify-center hover:bg-amber-400 mx-2 rounded-2xl'>
    <img src="https://i.pinimg.com/236x/ab/b9/72/abb972f60e6b6f29d0f25bd4c1c6f4f6.jpg" alt="Follow"
            className='h-20 w-20 rounded-full'
        />
        <a href="https://github.com/RishiBose961"><p className='mt-6 mx-3 dark:text-white'>Github</p></a>       
    </div>
    <div className='flex justify-center hover:bg-amber-400 mx-2 rounded-2xl'>
    <img src="https://i.pinimg.com/564x/70/da/29/70da29e0cd3e98f2ba4bb67bd0bde726.jpg" alt="Follow"
            className='h-20 w-20 rounded-full'
        />
        <a href='https://www.facebook.com/rishi.bose.1119/'><p className='mt-6 mx-3 dark:text-white'>Facebook</p></a>
        
    </div>
    <div className='flex justify-center hover:bg-amber-400 mx-2 rounded-2xl'>
    <img src="https://i.pinimg.com/564x/0b/10/4b/0b104bb37cd2dc6b00c327c69bd3ac53.jpg" alt="Follow"
            className='h-20 w-20 rounded-full'
        />
        <a href='https://www.linkedin.com/in/rishi-bose-4934ba252/'><p className='mt-6 mx-3 dark:text-white'>Linkin</p></a>
    </div>
        
    </div>
  )
}

export default FollowFor