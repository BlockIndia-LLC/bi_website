import React from 'react';

const products = [
    {
        cmd: '--voter-intel',
        title: 'XPR Voter Intelligence',
        tagline: 'Governance Tool',
        description: 'Track your vote health and surface ghost block producers — keep the network accountable.',
        features: ['Vote Health', 'Ghost BP Detection', 'Analytics'],
        href: 'https://xpr.voterintelligence.blocksindia.com',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        cmd: '--mcp-server',
        title: 'XPR MCP Server',
        tagline: 'AI × Blockchain',
        description: 'AI agents that talk directly to the XPR blockchain — query state, send transactions, build on-chain automations.',
        features: ['AI Agents', 'Blockchain API', 'MCP Protocol'],
        href: 'https://xpr-mcp.aiblock.work',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        cmd: '--talk-xpr',
        title: 'Talk to XPR',
        tagline: 'AI Assistant',
        description: 'Ask anything about XPR Network — protocol, staking, validators — powered by an AI trained on XPR knowledge.',
        features: ['AI Chat', 'XPR Knowledge Base', 'Real-time'],
        href: 'https://xpr.aiblock.work',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        cmd: '--xpr-casino',
        title: 'XPR Casino',
        tagline: 'DeFi Gaming',
        description: 'The first casino built natively on XPR Network — provably fair, fully on-chain, no intermediaries.',
        features: ['On-chain RNG', 'XPR Native', 'Provably Fair'],
        href: 'https://xprcasino.blocksindia.com',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        cmd: '--msig-tool',
        title: 'XPR Msig Tool',
        tagline: 'Governance',
        description: 'Multi-sig governance tool to propose and execute removal of inactive block producers from the network.',
        features: ['Multi-sig', 'BP Management', 'On-chain Gov'],
        href: 'https://xpr-rmvproducer-msig-app.vercel.app',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

const Portfolio = () => {
    return (
        <section className="py-12 lg:py-16 bg-surface-950" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-10" data-aos="fade-up">
                    <span className="section-label">$ blocksindia --xpr-ecosystem</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Shipped for the <span className="gradient-text">XPR Network</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product, index) => (
                        <a
                            key={index}
                            href={product.href}
                            target="_blank"
                            rel="noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={index * 70}
                            className="group relative bg-white/[0.02] rounded-xl border border-white/[0.07] hover:border-orange-500/30 p-5 flex flex-col transition-all duration-300 overflow-hidden"
                        >
                            {/* Top glow line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Command + LIVE badge */}
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-[10px] text-orange-400/40 group-hover:text-orange-400/70 transition-colors uppercase tracking-widest">
                                    {product.cmd}
                                </span>
                                <span className="flex items-center gap-1 font-mono text-[9px] text-green-400/60 uppercase tracking-widest">
                                    <span className="w-1 h-1 rounded-full bg-green-400" style={{ boxShadow: '0 0 4px #4ade80' }} />
                                    LIVE
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="w-9 h-9 rounded-lg border border-white/10 group-hover:border-orange-500/30 bg-white/5 group-hover:bg-orange-500/10 flex items-center justify-center text-white/40 group-hover:text-orange-400 transition-all duration-300 mb-3">
                                {product.icon}
                            </div>

                            {/* Tagline */}
                            <span className="text-[10px] font-mono font-semibold text-orange-400/50 uppercase tracking-wider mb-1">
                                {product.tagline}
                            </span>

                            {/* Title */}
                            <h4 className="font-bold text-base text-white mb-2 group-hover:text-white transition-colors">
                                {product.title}
                            </h4>

                            {/* Description */}
                            <p className="text-white/40 text-sm leading-relaxed mb-4 flex-grow">
                                {product.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {product.features.map((feature, i) => (
                                    <span key={i} className="px-2 py-0.5 font-mono text-[10px] text-white/30 border border-white/[0.07] group-hover:border-orange-500/20 group-hover:text-orange-400/60 rounded transition-all duration-300">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <span className="inline-flex items-center font-mono text-xs text-green-400/60 group-hover:text-green-400 transition-colors">
                                $ visit-live
                                <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
