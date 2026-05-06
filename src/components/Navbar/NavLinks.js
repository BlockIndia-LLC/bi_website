import React from 'react';
import { HashLink } from 'react-router-hash-link';

const linkCls = 'px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left';

const NavLinks = () => {
    return (
        <>
            <HashLink className={linkCls} smooth to="/#about">About</HashLink>
            <HashLink className={linkCls} smooth to="/#services">Services</HashLink>
            <HashLink className={linkCls} smooth to="/#portfolio">Portfolio</HashLink>
            <HashLink className={linkCls} to="/contact">Contact</HashLink>
            <HashLink
                className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors duration-200 font-mono"
                smooth to="/get-demo#demo"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                get-demo
            </HashLink>
        </>
    );
};

export default NavLinks;
