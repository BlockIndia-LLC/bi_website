import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    {
        cmd: '--defi',
        title: 'DeFi Applications',
        tagline: 'Decentralized Finance',
        description: 'P2P lending, DEX platforms, and yield farming protocols — no intermediaries, just code and trust.',
        features: ['Smart Contracts', 'Liquidity Pools', 'Token Swaps'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        cmd: '--nft',
        title: 'NFT Marketplaces',
        tagline: 'Digital Ownership',
        description: 'Mint, trade, and showcase unique digital assets with provable scarcity and ownership.',
        features: ['Minting', 'Royalties', 'IPFS Storage'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        cmd: '--gaming',
        title: 'Blockchain Gaming',
        tagline: 'Play-to-Earn',
        description: 'In-game economies where players truly own their assets and earn real value.',
        features: ['NFT Items', 'Token Rewards', 'Marketplaces'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        cmd: '--contracts',
        title: 'Smart Contracts',
        tagline: 'Trustless Execution',
        description: 'Self-executing agreements that live on-chain. Write once, enforce forever.',
        features: ['Audited Code', 'Gas Optimized', 'Multi-Chain'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
];

const Portfolio = () => {
    return (
        <section className="py-20 lg:py-28 bg-surface-950" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-14" data-aos="fade-up">
                    <span className="section-label">$ blocksindia --products</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Built for the <span className="gradient-text">decentralized era</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="group relative bg-white/[0.02] rounded-xl border border-white/[0.07] hover:border-green-500/30 p-5 flex flex-col transition-all duration-300 overflow-hidden"
                        >
                            {/* Top glow line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Command */}
                            <span className="font-mono text-[10px] text-green-400/40 group-hover:text-green-400/70 transition-colors mb-3 uppercase tracking-widest">
                                {product.cmd}
                            </span>

                            {/* Icon */}
                            <div className="w-9 h-9 rounded-lg border border-white/10 group-hover:border-green-500/30 bg-white/5 group-hover:bg-green-500/10 flex items-center justify-center text-white/40 group-hover:text-green-400 transition-all duration-300 mb-3">
                                {product.icon}
                            </div>

                            {/* Tagline */}
                            <span className="text-[10px] font-mono font-semibold text-primary-400/70 uppercase tracking-wider mb-1">
                                {product.tagline}
                            </span>

                            {/* Title */}
                            <h4 className="font-bold text-lg text-white mb-2">
                                {product.title}
                            </h4>

                            {/* Description */}
                            <p className="text-white/40 text-sm leading-relaxed mb-4 flex-grow">
                                {product.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {product.features.map((feature, i) => (
                                    <span key={i} className="px-2 py-0.5 font-mono text-[10px] text-white/30 border border-white/[0.07] group-hover:border-green-500/20 group-hover:text-green-400/60 rounded transition-all duration-300">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link to="/get-demo"
                                className="inline-flex items-center font-mono text-xs text-green-400/60 hover:text-green-400 group/cta transition-colors">
                                $ schedule-demo
                                <svg className="w-3.5 h-3.5 ml-1.5 group-hover/cta:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
