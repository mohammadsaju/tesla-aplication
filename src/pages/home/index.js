import React from 'react';
import Menu from '../menu/Menu';
import './Header.css';
import { Link } from 'react-router-dom';

const index = ({isMenuOpen, setMenuOpen}) => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-5 z-20">
                <div className="mr-12">
                    <Link to='/'>
                    <img className="object-contain w-20 sm:w-32 " src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" />
                    </Link>
                </div>
                <div className="mr-10 hidden lg:flex gap-6 ">
                    <a className='text-base font-bold text-gray-600' href="#">Model S</a>
                    <a className='text-base font-bold text-gray-600' href="#">Model 3</a>
                    <a className='text-base font-bold text-gray-600' href="#">Model X</a>
                    <a className='text-base font-bold text-gray-600' href="#">Model Y</a>
                    <a className='text-base font-bold text-gray-600' href="#">Solar Roof</a>
                    <a className='text-base font-bold text-gray-600' href="#">Solar Panels</a>
                </div>
                <div className="flex gap-10 md:gap-10">
                    <div className="flex gap-6">
                        <a className={`text-xs sm:text-lg font-bold text-gray-600 ${isMenuOpen && 'invisible'}`}href="#">Shop</a>
                        <Link to='/login' className={`text-xs sm:text-lg font-bold text-gray-600 visible ${isMenuOpen && 'invisible'}`}href="#">Tesla account</Link>
                    </div>
                    <div className="cursor-pointer flex items-center" onClick={() => setMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>)}
                    </div>
                </div>
            </nav>
            <header className="h-screen bg-center bg-fixed bg-no-repeat bg-cover">
                <div className="h-screen flex items-center justify-center">
                    <div className="flex flex-col gap-y-2 md:gap-80">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-700 mb-7">Model 3</h1>
                            <p className="text-xl">Order Online for <span className="text-lg border-b-2 border-gray-400 hover:border-gray-600  cursor-pointer ">Touchless Delivery</span></p>
                        </div>
                        <div className="flex gap-11 mt-72 md:mt-32">
                            <button className="bg-gray-800 w-32 sm:w-60 py-2 rounded-full text-white font-semibold text-xs sm:text-sm tracking-widest ">CUSTOM ORDER</button>
                            <button className="bg-gray-100 w-32 sm:w-60 py-2 rounded-full text-gray-900 font-semibold text-xs sm:text-sm tracking-widest ">EXISTING INVENTORY</button>
                        </div>
                    </div>
                </div>
            </header>
            {/* sidebar start */}
            {isMenuOpen && <Menu/>}
            {/* sidebar end */}
        </>
    )
}

export default index;
