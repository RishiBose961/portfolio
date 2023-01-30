import React from 'react'

const Info = () => {
  return (
    <div className='bg-amber-200 container mx-auto rounded-2xl mt-12' id="personal">
        <p className='text-[40px] underline underline-offset-4 font-semibold text-red-500 mx-2'>PERSONAL INFO</p>
        <div className='text-2xl mt-3 lg:mt-15 py-3 mx-4 mb-3'>
            <p>Name : Rishi Bose</p>
            <p>Age : 20 years</p>
            <p>Study At : Birla Institute of Technology, Extension Center,Lalpur.</p>
            <p>State : Jharkhand</p>
            <p>District : Ranchi</p>
            <p>professional : WEB DEVELOPER,MERN STACK DEVELOPER,Front End Designer , Content Creator Youtube.</p>
        </div>
    </div>
  )
}

export default Info