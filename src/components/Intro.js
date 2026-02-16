import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <section className="py-20 lg:py-28 bg-white" id='about'>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16" data-aos="fade-up">

                    {/* Image side */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-accent-400/10 rounded-3xl" />
                            <img alt="about" className="relative rounded-3xl w-full" src={img} />
                        </div>
                    </div>

                    {/* Text side */}
                    <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up" data-aos-delay="200">
                        <span className="section-label">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 leading-tight mb-6">
                            What we offer?
                        </h2>
                        <p className="text-base md:text-lg text-surface-800/70 leading-relaxed mb-6">
                            We build and operate enterprise-grade blockchain infrastructure that powers the next generation of decentralized networks — driving real-world adoption one block at a time.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-left">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mt-2 flex-shrink-0" />
                                <span className="text-sm font-medium text-surface-800/80">99.9% uptime with always-on monitoring</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mt-2 flex-shrink-0" />
                                <span className="text-sm font-medium text-surface-800/80">Energy-efficient block production</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mt-2 flex-shrink-0" />
                                <span className="text-sm font-medium text-surface-800/80">Secure infrastructure with regular backups</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 mt-2 flex-shrink-0" />
                                <span className="text-sm font-medium text-surface-800/80">Real-time performance metrics</span>
                            </div>
                        </div>
                        <Link to="/contact"
                            className="inline-flex items-center mt-8 px-6 py-3 text-base font-semibold text-primary-600 hover:text-primary-700 group transition-colors">
                            Contact us
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;
