import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-surface-950 text-surface-200/70">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <span className="text-2xl font-extrabold gradient-text">BlocksIndia</span>
                        <p className="mt-4 text-sm leading-relaxed">
                            Bangalore,<br/>
                            Karnataka,<br/>
                            India 560013.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><HashLink to="/#about" className="hover:text-white transition-colors duration-200">About</HashLink></li>
                            <li><HashLink to="/#services" className="hover:text-white transition-colors duration-200">Services</HashLink></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><HashLink to="/#services" className="hover:text-white transition-colors duration-200">Blockchain Development</HashLink></li>
                            <li><HashLink to="/#services" className="hover:text-white transition-colors duration-200">DApps Development</HashLink></li>
                            <li><HashLink to="/#services" className="hover:text-white transition-colors duration-200">Network Validators</HashLink></li>
                            <li><HashLink to="/#services" className="hover:text-white transition-colors duration-200">Blockchain Consultation</HashLink></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
                        <p className="text-sm mb-4">Follow us on social media.</p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='fill-current'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='fill-current'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-8 text-center text-sm">
                    Copyright &copy; {new Date().getFullYear()} Blocksindia. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
export default Footer;
