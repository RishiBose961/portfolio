import React from 'react'
import Worklist from './Worklist'

const Work = () => {
  return (
    <div className='dark:text-white mt-3 container mx-auto' id='project'>
      <p className='mb-6 text-[46px] uppercase font-semibold underline'>My Works</p>
      <Worklist/>
    </div>
  )
}

export default Work