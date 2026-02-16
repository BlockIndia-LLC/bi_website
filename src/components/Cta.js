import React from 'react';
import {Link} from 'react-router-dom';

const Cta = () => {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden rounded-3xl bg-surface-950 px-8 py-16 md:px-16 md:py-20">
                    {/* Background gradient orbs */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-400/15 rounded-full blur-[80px]" />

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                Ready to build and scale your blockchain business?
                            </h2>
                            <p className="text-lg text-surface-200/70 max-w-xl">
                                Get in touch and let us build something amazing <span className="font-bold text-white">together!</span>
                            </p>
                        </div>
                        <Link to="/contact"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-surface-950 bg-white hover:bg-surface-100 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap group">
                            Send a message
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
