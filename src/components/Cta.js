import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <section className="py-20 lg:py-28 bg-surface-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] px-8 py-16 md:px-16 md:py-20">
                    {/* Background orbs */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-600/10 rounded-full blur-[80px]" />
                    {/* Top glow line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />

                    <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div>
                            <div className="font-mono text-xs text-green-400/50 mb-3">$ blocksindia --contact --start-project</div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                                Ready to build your<br />
                                <span className="gradient-text">blockchain business?</span>
                            </h2>
                            <p className="text-white/40 font-mono text-sm max-w-lg">
                                {'>'} Get in touch and let's build something that scales.
                            </p>
                        </div>
                        <Link to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold font-mono text-black bg-green-400 hover:bg-green-300 rounded-lg transition-all duration-200 shadow-lg shadow-green-400/20 whitespace-nowrap flex-shrink-0 group">
                            $ send-message
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
