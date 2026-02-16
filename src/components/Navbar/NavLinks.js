import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 py-2 text-sm font-medium text-surface-800 hover:text-primary-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 py-2 text-sm font-medium text-surface-800 hover:text-primary-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 py-2 text-sm font-medium text-surface-800 hover:text-primary-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-zinc-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink>
        </>
    )
}

export default NavLinks;
