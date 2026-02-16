import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/block-dev.png';

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-surface-950" id='hero'>
            {/* Gradient orbs for mesh effect */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-400/20 rounded-full blur-[128px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[100px]" />
            </div>

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <NavBar />

            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-zinc-900">
                            {/* We build digital solutions to help businesses scale */}
                            Blockchain validator offering Safe Authentic Trusted network.
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">High-efficiency Block Producer Systems (HBPS)</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                                {/* <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Get Started
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link> */}
                                {/* <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-gray-500 hover:bg-gray-400 shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </a> */}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
                            Blockchain validator offering
                        </h1>
                        <div className="flex flex-wrap gap-3 mb-5 justify-center lg:justify-start">
                            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xl md:text-2xl font-bold animate-[fadeSlideUp_0.6s_ease-out_0.2s_both] hover:bg-white/10 hover:border-white/20 transition-colors duration-300 cursor-default">
                                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 animate-pulse" />
                                <span className="gradient-text">Safe</span>
                            </span>
                            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xl md:text-2xl font-bold animate-[fadeSlideUp_0.6s_ease-out_0.5s_both] hover:bg-white/10 hover:border-white/20 transition-colors duration-300 cursor-default">
                                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 animate-pulse" />
                                <span className="gradient-text">Authentic</span>
                            </span>
                            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xl md:text-2xl font-bold animate-[fadeSlideUp_0.6s_ease-out_0.8s_both] hover:bg-white/10 hover:border-white/20 transition-colors duration-300 cursor-default">
                                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 animate-pulse" />
                                <span className="gradient-text">Trusted</span>
                            </span>
                        </div>
                        <p className="text-lg md:text-xl text-surface-200/60 leading-relaxed mb-8 max-w-xl font-medium">
                            High-efficiency Block Producer Systems (HBPS).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-2xl transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 group">
                                Get started
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                            <Link to="/#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-2xl transition-all duration-300">
                                Learn more
                            </Link>
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-400/20 rounded-3xl blur-2xl" />
                            <img alt="hero" className="relative rounded-3xl w-full" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
