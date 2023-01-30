import React from 'react'

const Header = ({ options, setTheme, theme }) => {
  return (
    <div className="dark:text-white">
      <div className='container mx-auto flex justify-between'>
        <div className='bg-amber-400 h-10 lg:w-64 text-center rounded-3xl'>
          <p className='text-[25px] font-bold italic'>Rishi Bose <sup className='text-[16px] not-italic'>portfolio</sup></p>
        </div>
        <div className="mb-4 duration-100 dark:bg-slate-800 bg-gray-100 rounded-lg">
          {
            options?.map(opt => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`w-8 h-8 leading-9 text-xl rounded-full m-1 
            ${theme === opt.text && "text-sky-600"}`}>
                <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header