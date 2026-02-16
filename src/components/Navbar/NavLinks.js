import React from 'react';
import { Link } from 'react-router-dom';
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
            <HashLink className="px-4 py-2 text-sm font-medium text-surface-800 hover:text-primary-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" to="/contact">
                Contact Us
            </HashLink>
            <Link className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 ml-2" to="/get-demo">
                Demo our products
            </Link>
        </>
    )
}

export default NavLinks;
