import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../Navbar/NavLinks';

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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
            !top
                ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-surface-200/50'
                : 'bg-white/80 backdrop-blur-xl'
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <Link to="/" className="flex items-center gap-3 group">
                    {/* Logo icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center shadow-md shadow-primary-500/20 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300 group-hover:-translate-y-0.5">
                        <span className="text-white font-black text-lg">B</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black tracking-tight gradient-text leading-none">BlocksIndia</span>
                        <span className="text-[10px] font-medium text-surface-800/50 tracking-widest uppercase leading-none mt-0.5">Blockchain Validator</span>
                    </div>
                </Link>

                <div className="flex items-center">
                    <button className="p-2 rounded-lg lg:hidden text-surface-800" onClick={handleClick}>
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

                    <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-surface-200 shadow-lg transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                        <div className="flex flex-col space-y-1 px-6 py-4">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
