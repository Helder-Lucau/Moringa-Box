import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  // Prevents user on mobile from scrolling while menu bar is opened
  const handleChange = () => {
    setMenu(!menu)
    // if (!menu) {
    //   document.body.style.overflow = 'hidden'
    // } else {
    //   document.body.style.overflow = 'scroll'
    // }
  }

  return (
    <div className='bg-[#1e232a] w-full'>
      <div>
        <div className='flex flex-row justify-between p-4 md:px-32 px-5'>
          <div className='flex flex-row items-center cursor-pointer'>
            <h1 className='md:text-3xl text-xl font-semibold text-white'>M-<span className='text-red-600'>BOX.</span></h1>
          </div>
          <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8 tracking-widest'>
            <Link to="/" className='text-white no-underline -bottom-1 hover:h-full hover:underline-offset-8'>HOME</Link>
            <Link to="/about" className='cursor-pointer text-white no-underline -bottom-1 hover:h-full'>ABOUT</Link>
            <Link to="/contact" className='cursor-pointer text-white no-underline -bottom-1 hover:h-full'>CONTACT</Link>
            <button>
              <Link to="/login" className="px-10 py-1 no-underline rounded-2xl text-white bg-[#ba324f] hover:bg-[#9eb3c2]">LOGIN</Link>
            </button>
          </nav>
          <div className='md:hidden flex items-center'>
            {
              menu ? (<AiOutlineClose size={25} onClick={handleChange} className='text-white' />) : (<AiOutlineMenuUnfold size={25} onClick={handleChange} className='text-white' />)
            }
          </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-[#1E232A] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-screen transition-transform duration-300`}>
          <Link to="/" className='cursor-pointer py-2 tracking-widest text-white no-underline' >HOME</Link>
          <Link to="/about" className='cursor-pointer py-2 tracking-widest text-white no-underline'>ABOUT</Link>
          <Link to="/contact" className='cursor-pointer py-2 tracking-widest text-white no-underline'>CONTACT</Link>
          <button>
            <Link to="/login" className="text-white no-underline px-24 rounded-2xl bg-[#ba324f] hover:bg-[#9eb3c2]">LOGIN</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar