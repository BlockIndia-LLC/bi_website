import React from 'react';

const services = [
    {
        cmd: '--blockchain-dev',
        title: 'Blockchain Development',
        description: 'From protocol design to mainnet deployment — production-ready distributed systems.',
        tags: ['Solidity', 'Rust', 'EVM', 'Layer 1/2'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        cmd: '--dapps-dev',
        title: 'dApps Development',
        description: 'Full-stack decentralized apps with clean interfaces and seamless wallet integration.',
        tags: ['React', 'Web3.js', 'IPFS', 'Smart Contracts'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        cmd: '--node-validator',
        title: 'Node Validator Services',
        description: '99.9% uptime across Proton, Metal, Telos, Libre, FIO, and TRON networks.',
        tags: ['Staking', 'Monitoring', 'High Availability'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
    },
    {
        cmd: '--consultation',
        title: 'Blockchain Consultation',
        description: 'Tokenomics, architecture planning, and strategic guidance for the blockchain space.',
        tags: ['Strategy', 'Architecture', 'Tokenomics'],
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <div id="services" className="py-12 lg:py-16 bg-surface-950">
            <section>
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-10" data-aos="fade-up">
                        <span className="section-label">$ blocksindia --services</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            What we <span className="gradient-text">execute</span>
                        </h2>
                    </div>

                    {/* Service cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                                className="group relative rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-orange-500/30 hover:bg-orange-500/[0.03] transition-all duration-400 p-5 flex flex-col overflow-hidden"
                            >
                                {/* Top glow line on hover */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                                {/* Command label */}
                                <span className="font-mono text-[10px] text-orange-400/50 group-hover:text-orange-400/80 transition-colors mb-3 uppercase tracking-widest">
                                    {service.cmd}
                                </span>

                                {/* Icon */}
                                <div className="w-9 h-9 rounded-lg border border-white/10 group-hover:border-orange-500/30 bg-white/5 group-hover:bg-orange-500/10 flex items-center justify-center text-white/40 group-hover:text-orange-400 transition-all duration-300 mb-4">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-bold text-white mb-2">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-white/40 leading-relaxed mb-5 flex-grow">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-0.5 rounded font-mono text-[10px] text-white/30 border border-white/[0.07] group-hover:border-orange-500/20 group-hover:text-orange-400/70 transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Build & Collaborate */}
            <section>
                <div className="max-w-7xl mx-auto px-6 pt-12">
                    <div className="grid sm:grid-cols-2 gap-4" data-aos="fade-up">
                        <div className="rounded-xl border border-white/[0.07] hover:border-orange-500/20 bg-white/[0.02] p-6 md:p-8 group transition-all duration-400">
                            <div className="font-mono text-xs text-orange-400/50 mb-3">$ we --build</div>
                            <h3 className="text-lg text-white font-bold mb-2">We Build</h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                A decade of engineering distilled into blockchain-native solutions. Systems that scale, optimized costs, no shortcuts on security.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.07] hover:border-orange-500/20 bg-white/[0.02] p-6 md:p-8 group transition-all duration-400">
                            <div className="font-mono text-xs text-orange-400/50 mb-3">$ we --collaborate</div>
                            <h3 className="text-lg text-white font-bold mb-2">We Collaborate</h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Already have a team? We embed with your engineers — scaling platforms, auditing contracts, or building new features from scratch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
