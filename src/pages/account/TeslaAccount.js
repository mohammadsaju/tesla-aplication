import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';
import Menu from '../menu/Menu';

const TeslaAccount = ({isMenuOpen, setMenuOpen}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const signout = (e) => {
        e.preventDefault();
        auth.signOut();
        dispatch(
            logout(),
            history.push('/')
        )
    }
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-9 bg-gray-800 text-white">
                <div className="mr-11">
                    <Link to='/'>
                    <img style={{webkitFilter: 'brightness(0) invert(1)',
                    filter: 'brightness(0) invert(1)'}} className="object-contain w-20 sm:w-32" src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"/>
                    </Link>
                </div>
                <div className="flex gap-x-14">
                        <div className="hidden lg:flex gap-6">
                            <a className="font-medium text-xs xl:text-base" href="#">Model S</a>
                            <a className="font-medium text-xs xl:text-base" href="#">Model 3</a>
                            <a className="font-medium text-xs xl:text-base" href="#">Model X</a>
                            <a className="font-medium text-xs xl:text-base" href="#">Model Y</a>
                            <a className="font-medium text-xs xl:text-base" href="#">Solar Roof</a>
                            <a className="font-medium text-xs xl:text-base" href="#">Solar Panels</a>
                            <a className="font-medium text-xs xl:text-base" href="#">Shop</a>
                            <Link to='/tesla-account' className={`font-medium text-xs xl:text-base ${isMenuOpen && 'invisible'}`} href="#">Tesla Account</Link>
                        </div>
                        <div className="flex items-center gap-6 cursor-pointer">
                            <a onClick={signout} className={`font-medium ${isMenuOpen && 'invisible'}`} href="#">Log out</a>
                            <div className={`z-20 cursor-pointer text-white ${isMenuOpen && 'text-gray-900'}`}  onClick={() => setMenuOpen(!isMenuOpen)}>
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
                </div>
            </nav>
            <div className="flex justify-between pt-10 pb-7 px-7 md:px-16 border-b-2">
                <div>
                    <h1 className="text-sm md:text-2xl font-medium text-gray-600 md:tracking-wider">Rohan's Tesla</h1>
                </div>
                <div className='flex gap-2 items-center md:gap-6'>
                    <a className="text-sm md:text-lg no-underline hover:underline" href="#">Home</a>
                    <a className="text-sm md:text-lg no-underline hover:underline" href="#">Account</a>
                    <a className="text-sm md:text-lg no-underline hover:underline" href="#">History</a>
                    <a onClick={signout} className="text-sm md:text-lg no-underline hover:underline cursor-pointer" href="#">Sign Out</a>
                </div>
            </div>
            <div className="pb-32">
                <div className="flex flex-col items-center justify-center text-center relative pb-10">
                    <div>
                        <img className="w-full  xl:w-2/3 object-contain m-auto" src="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"/>
                    </div>
                    <div className="-mt-11 sm:-mt-20 md:-mt-32 lg:-mt-48">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-700">Model S</h1>
                        <div className="flex gap-9 justify-center py-5 md:py-9">
                            <button className="transition bg-blue-500 hover:bg-blue-600 w-32 sm:w-60 py-2 rounded-full text-white text-xs sm:text-sm tracking-widest ">ORDER</button>
                            <button className="transition border-4 border-gray-800 hover:bg-gray-800 text-gray-900 hover:text-white w-32 sm:w-60 py-2 rounded-full text-white text-xs sm:text-sm tracking-widest">TEST DRIVE</button>
                        </div>
                        <p className="text-sm md:tracking-wider font-medium">
                            <span className="text-blue-700 tracking-wider">Request a Call</span> to speak with a product specialist, value <br/>
                            your trade-in or apply for leasing
                        </p>
                    </div>
                </div>
                <hr  style={{borderTop: '2px solid rgb(236, 234, 234)', width: '60%', margin: 'auto'}}/>
                <div className="flex flex-col items-center justify-center text-center relative">
                    <div>
                        <img className="w-full  xl:w-2/3 object-contain m-auto" src="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"/>
                    </div>
                    <div className="-mt-11 sm:-mt-20 md:-mt-32 lg:-mt-48">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-700">Model X</h1>
                        <div className="flex gap-9 justify-center py-5 md:py-9">
                            <button className="bg-blue-500 hover:bg-blue-600 w-32 sm:w-60 py-2 rounded-full text-white text-xs sm:text-sm tracking-widest ">ORDER</button>
                        </div>
                        <p className="text-sm md:tracking-wider font-medium">
                            <span className="text-blue-700 tracking-wider">Request a Call</span> to speak with a product specialist, value <br/>
                            your trade-in or apply for leasing
                        </p>
                    </div>
                </div>
            </div>
            {/* sidebar start */}
            {isMenuOpen && <Menu/>}
            {/* sidebar end */}
        </>
    )
}

export default TeslaAccount;
