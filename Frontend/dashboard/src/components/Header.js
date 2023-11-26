import React from 'react';
import g20 from "../assest/g20.png";
import ed from "../assest/ED.png";
import logo from "../assest/Frame 23 (1).png";
import headerImage from "../assest/header_image.png";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header(props) {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='bg-transparent  w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <span><img src={logo} alt='' width="250px"/></span>
                <img src={headerImage} width="150px" alt='45'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <img src={g20} width="100px" alt='45'/>
                <img src={ed} width="100px" alt='45'/>
            </div>
            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex ml-3 mr-3 gap-3'>
                {   !isLoggedIn &&
                    <Link to="/Login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                {   !isLoggedIn &&
                    <Link to="/Signup">
                        <button >Signup</button>
                    </Link>
                }
                {  isLoggedIn &&
                    <Link to="/">
                        <button onClick={
                            ()=>{setIsLoggedIn(false);
                                toast.success("Logged out")}
                            }>
                            Log out
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/Schemes">
                        <button>Schemes</button>
                    </Link>
                }
            </div>
        </div>
    </div>
  )
}

export default Header;