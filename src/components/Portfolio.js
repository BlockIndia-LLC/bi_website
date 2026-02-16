import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const products = [
        {
            title: 'DeFi Applications',
            tagline: 'Decentralized Finance',
            description: 'P2P lending, DEX platforms, and yield farming protocols — no intermediaries, just code and trust.',
            features: ['Smart Contracts', 'Liquidity Pools', 'Token Swaps']
        },
        {
            title: 'NFT Marketplaces',
            tagline: 'Digital Ownership',
            description: 'Mint, trade, and showcase unique digital assets with provable scarcity and ownership.',
            features: ['Minting', 'Royalties', 'IPFS Storage']
        },
        {
            title: 'Blockchain Gaming',
            tagline: 'Play-to-Earn',
            description: 'In-game economies where players truly own their assets and earn real value.',
            features: ['NFT Items', 'Token Rewards', 'Marketplaces']
        },
        {
            title: 'Smart Contracts',
            tagline: 'Trustless Execution',
            description: 'Self-executing agreements that live on-chain. Write once, enforce forever.',
            features: ['Audited Code', 'Gas Optimized', 'Multi-Chain']
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white" id='portfolio'>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="section-label">Our Products</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900">
                        Built for the <span className="gradient-text">decentralized era</span>
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
                    {products.map((product, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl border border-surface-200 p-6 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 flex flex-col">
                            {/* Gradient accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Tagline */}
                            <span className="inline-block text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                                {product.tagline}
                            </span>

                            {/* Title */}
                            <h4 className="font-bold text-xl text-surface-900 mb-3 group-hover:gradient-text transition-all duration-300">
                                {product.title}
                            </h4>

                            {/* Description */}
                            <p className="text-surface-800/60 text-sm leading-relaxed mb-5 flex-grow">
                                {product.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {product.features.map((feature, i) => (
                                    <span key={i} className="px-2.5 py-1 text-[11px] font-medium text-surface-600 bg-surface-50 rounded-full border border-surface-200">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link to="/get-demo"
                                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 group/cta transition-colors">
                                Schedule Demo
                                <svg className="w-4 h-4 ml-1.5 group-hover/cta:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
