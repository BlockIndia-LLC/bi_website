import React from 'react';

const Services = () => {

    const services = [
        {
            number: '01',
            title: 'Blockchain Development',
            description: 'From protocol design to mainnet deployment — production-ready distributed systems.',
            tags: ['Solidity', 'Rust', 'EVM', 'Layer 1/2'],
        },
        {
            number: '02',
            title: 'dApps Development',
            description: 'Full-stack decentralized apps with clean interfaces and seamless wallet integration.',
            tags: ['React', 'Web3.js', 'IPFS', 'Smart Contracts'],
        },
        {
            number: '03',
            title: 'Node Validator Services',
            description: '99.9% uptime across Proton, Metal, Telos, Libre, FIO, and TRON networks.',
            tags: ['Staking', 'Monitoring', 'High Availability'],
        },
        {
            number: '04',
            title: 'Blockchain Consultation',
            description: 'Tokenomics, architecture planning, and strategic guidance for the blockchain space.',
            tags: ['Strategy', 'Architecture', 'Tokenomics'],
        },
    ];

    return (
        <div id="services" className="py-20 lg:py-28 bg-surface-800">
            <section>
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-14" data-aos="fade-up">
                        <span className="section-label !bg-white/5 !text-primary-300 !border-white/10">What We Do</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Services we <span className="gradient-text">offer</span>
                        </h2>
                    </div>

                    {/* Service cards - vertical grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-up" data-aos-delay="100">
                        {services.map((service, index) => (
                            <div key={index} className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 p-6 flex flex-col">
                                {/* Number */}
                                <span className="text-4xl font-black text-white/[0.06] group-hover:text-primary-500/20 transition-colors duration-500 leading-none select-none mb-4">
                                    {service.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-surface-200/60 leading-relaxed mb-5 flex-grow">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-medium text-surface-300/50 border border-white/10 group-hover:border-white/20 group-hover:text-primary-300 transition-all duration-300">
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
                <div className="max-w-7xl mx-auto px-6 pt-16">
                    <div className="grid sm:grid-cols-2 gap-5" data-aos="fade-up">
                        {/* Build */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
                            <h3 className="text-xl text-white font-bold mb-3">
                                We <span className='gradient-text font-black'>Build</span>
                            </h3>
                            <p className='text-sm text-surface-200/60 leading-relaxed'>
                                A decade of engineering distilled into blockchain-native solutions. Systems that scale, optimized costs, no shortcuts on security.
                            </p>
                        </div>

                        {/* Collaborate */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
                            <h3 className="text-xl text-white font-bold mb-3">
                                We <span className='gradient-text font-black'>Collaborate</span>
                            </h3>
                            <p className='text-sm text-surface-200/60 leading-relaxed'>
                                Already have a team? We embed with your engineers — scaling platforms, auditing contracts, or building new features from scratch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
