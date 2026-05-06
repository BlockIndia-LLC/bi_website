import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import blocksindia from '../../images/clients/blocksindia.png';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.pageYOffset > 10);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${
            scrolled
                ? 'bg-surface-950/95 backdrop-blur-xl border-b border-white/5'
                : 'bg-transparent'
        }`}>
            <div className="flex flex-row justify-between items-center py-3 px-6 md:px-12">

                {/* Logo */}
                <HashLink smooth to="/#hero" className="flex items-center gap-3 group">
                    <div className="h-10 overflow-hidden flex items-center">
                        <img src={blocksindia} alt="BlocksIndia" className="h-10 w-auto" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black gradient-text leading-none">BlocksIndia</span>
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                            Blockchain Validator
                        </span>
                    </div>
                    {/* Live indicator */}
                    <div className="hidden md:flex items-center gap-1.5 ml-1 px-2 py-0.5 rounded border border-green-500/20 bg-green-500/5">
                        <span className="status-live" />
                        <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">live</span>
                    </div>
                </HashLink>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center space-x-1">
                    <NavLinks />
                </div>

                {/* Mobile burger */}
                <button
                    className="p-2 rounded-lg lg:hidden text-white/60 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen
                            ? <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            : <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        }
                    </svg>
                </button>

                {/* Mobile menu */}
                <div className={`fixed left-0 w-full bg-surface-950/98 backdrop-blur-xl border-b border-white/5 lg:hidden shadow-2xl top-14 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col space-y-1 p-6">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
