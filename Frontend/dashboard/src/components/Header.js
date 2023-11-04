import React from 'react';
import g20 from "../assest/g20.png";
import ed from "../assest/ED.png";
import logo from "../assest/Frame 23 (1).png"
import headerImage from "../assest/header_image.png"
function Header() {
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
                <span><img src={logo} alt='' width="150px"/></span>
                <img src={headerImage} width="200px" alt='45'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <img src={g20} width="100px" alt='45'/>
                <img src={ed} width="100px" alt='45'/>
                
            </div>
        </div>
    </div>
  )
}

export default Header;