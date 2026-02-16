import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import blocksindia from '../../images/clients/blocksindia.png';


const clientImage = {
    height: '3.5rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}


const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className="fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 bg-white/80 backdrop-blur-xl shadow-lg">
            <div className="flex flex-row justify-between items-center py-3">
                <HashLink smooth to="/#hero" className="flex items-center gap-3 md:px-12 md:mx-12 group">
                    {/* Logo Image */}
                    <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out group-hover:opacity-90">
                        <img src={blocksindia} alt="BlocksIndia" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-black gradient-text leading-none">
                            BlocksIndia
                        </h1>
                        <span className="text-[10px] md:text-xs font-semibold text-surface-600 uppercase tracking-widest">
                            Blockchain Validator
                        </span>
                    </div>
                </HashLink>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-zinc-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden lg:flex items-center space-x-1'>
                        <NavLinks />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
