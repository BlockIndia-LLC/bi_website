import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className="py-20 lg:py-28 bg-white" id='portfolio'>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="section-label">Our Products</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 mb-4">Products</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">

                    <div className="relative bg-white rounded-2xl border border-surface-200 p-6 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 flex flex-col">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-5" />
                        <h4 className="font-bold text-lg text-surface-900 mb-3">Defi Applications</h4>
                        <p className="text-surface-800/60 text-sm leading-relaxed mb-6 flex-grow">
                            A DeFi transaction is where two parties agree to exchange cryptocurrency for goods or services without a third party involved. In DeFi, P2P can meet an individual's loan needs, and an algorithm would match peers that agree on the lender's terms.
                        </p>
                        <Link to="/get-demo"
                            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 group transition-colors">
                            Schedule Demo
                            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>

                    <div className="relative bg-white rounded-2xl border border-surface-200 p-6 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 flex flex-col">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-5" />
                        <h4 className="font-bold text-lg text-surface-900 mb-3">NFT Marketplaces</h4>
                        <p className="text-surface-800/60 text-sm leading-relaxed mb-6 flex-grow">
                            NFT is a unit of data stored on a blockchain that certifies a digital asset to be unique and therefore not interchangeable, while offering a unique digital certificate of ownership for the NFT.
                        </p>
                        <Link to="/get-demo"
                            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 group transition-colors">
                            Schedule Demo
                            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>

                    <div className="relative bg-white rounded-2xl border border-surface-200 p-6 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 flex flex-col">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-5" />
                        <h4 className="font-bold text-lg text-surface-900 mb-3">Blockchain Gaming</h4>
                        <p className="text-surface-800/60 text-sm leading-relaxed mb-6 flex-grow">
                            Blockchain games usually involve non-fungible tokens (NFTs) or cryptocurrency in some element of the gameplay. The developers earn money through advertising and selling items, and through the game's native cryptocurrency.
                        </p>
                        <Link to="/get-demo"
                            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 group transition-colors">
                            Schedule Demo
                            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>

                    <div className="relative bg-white rounded-2xl border border-surface-200 p-6 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 flex flex-col">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-5" />
                        <h4 className="font-bold text-lg text-surface-900 mb-3">Smart Contracts</h4>
                        <p className="text-surface-800/60 text-sm leading-relaxed mb-6 flex-grow">
                            Smart contracts are a set of conditions written in the form of code that meet the agreed criteria between two involved parties. The code resides on the blockchain, distributed and highly secure, ensuring terms are met immutably.
                        </p>
                        <Link to="/get-demo"
                            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 group transition-colors">
                            Schedule Demo
                            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
