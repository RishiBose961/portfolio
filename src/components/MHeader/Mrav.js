import React from 'react'
import Phone from '../../image/phone.jpg'
import { BriefcaseIcon, HomeIcon, ClipboardDocumentIcon, ShareIcon, RectangleGroupIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-scroll'


const Mrav = () => {
  return (
    <div className='mx-4'>
      <div className='relative h-[712px] w-[350px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-amber-400'>
        <img src={Phone} alt="not found"
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute top-0 inset-x-0'>
          <div className='h-6 w-40 mx-auto bg-amber-400 rounded-b-xl'>
          </div>
        </div>
        <div className='relative'>
          <p className='text-white mt-[220px] mx-5'>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
                  <button>
                    <HomeIcon className="h-20 w-20 text-blue-500 bg-slate-300 rounded-2xl" />
                  </button>
                </Link>
              </div>
              <div className="...">
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                <button>
                  <BriefcaseIcon className="h-20 w-20 text-red-500 bg-slate-300 rounded-2xl" />
                </button>
                </Link>
              </div>
              <div className="...">
              <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}>
                <button>
                  <ClipboardDocumentIcon className="h-20 w-20 text-orange-500 bg-slate-300 rounded-2xl" />
                </button>
                </Link>
              </div>
              <div className="...">
              <Link activeClass="active" to="follow" spy={true} smooth={true} offset={50} duration={500}>
              <button>
                  <ShareIcon className="h-20 w-20 text-violet-500 bg-slate-300 rounded-2xl" />
                </button>
              </Link>  
              </div>
            </div>
            <div className='mt-[180px] text-center'>
              <button>
                <RectangleGroupIcon className="h-20 w-20 text-violet-500 bg-white rounded-2xl" />
              </button>
            </div>

          </p>
        </div>


      </div>
    </div>
  )
}

export default Mrav