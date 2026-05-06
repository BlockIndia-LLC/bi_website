import React from 'react';
import { Link } from 'react-router-dom';

const networkMetrics = [
    { name: 'XPR Network',  uptime: '99.94%', blocks: '1,204,881', status: 'PRODUCING' },
    { name: 'Metal',        uptime: '99.91%', blocks: '893,441',   status: 'PRODUCING' },
    { name: 'Telos',        uptime: '99.88%', blocks: '1,502,903', status: 'PRODUCING' },
    { name: 'Libre',        uptime: '99.95%', blocks: '447,220',   status: 'PRODUCING' },
    { name: 'FIO Protocol', uptime: '99.92%', blocks: '681,554',   status: 'PRODUCING' },
    { name: 'TRON',         uptime: '99.98%', blocks: '2,110,004', status: 'PRODUCING' },
];

const Intro = () => {
    return (
        <section className="py-12 lg:py-16 bg-surface-950" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row items-start gap-10" data-aos="fade-up">

                    {/* Left — Performance metrics panel */}
                    <div className="lg:w-1/2 w-full">
                        <div className="terminal-window">
                            {/* Window chrome */}
                            <div className="terminal-header">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs font-mono text-white/30">performance-metrics</span>
                            </div>

                            {/* Table header */}
                            <div className="px-5 pt-4 pb-2">
                                <div className="grid grid-cols-4 text-[10px] font-mono text-white/25 uppercase tracking-widest border-b border-white/5 pb-2">
                                    <span>Network</span>
                                    <span className="text-right">Uptime</span>
                                    <span className="text-right">Blocks</span>
                                    <span className="text-right">Status</span>
                                </div>
                            </div>

                            {/* Table rows */}
                            <div className="px-5 pb-4 space-y-1">
                                {networkMetrics.map((net, i) => (
                                    <div key={i} className="grid grid-cols-4 text-xs font-mono py-1.5 border-b border-white/[0.03] group/row hover:bg-white/[0.02] rounded transition-colors">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"
                                                style={{ boxShadow: '0 0 4px #4ade80' }} />
                                            <span className="text-white/70 group-hover/row:text-white transition-colors truncate">{net.name}</span>
                                        </div>
                                        <span className="text-right text-green-400/80">{net.uptime}</span>
                                        <span className="text-right text-white/30">{net.blocks}</span>
                                        <span className="text-right text-green-400 text-[10px] font-semibold">{net.status}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer summary */}
                            <div className="border-t border-white/5 px-5 py-3 flex items-center justify-between font-mono text-xs text-white/30">
                                <span>avg uptime: <span className="text-green-400">99.93%</span></span>
                                <span>total blocks: <span className="text-green-400">6,840,003</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Text */}
                    <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up" data-aos-delay="150">
                        <span className="section-label">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                            Enterprise-grade<br />
                            <span className="gradient-text">validator infrastructure</span>
                        </h2>
                        <p className="text-base text-white/50 leading-relaxed mb-7">
                            We build and operate blockchain infrastructure that powers decentralized networks at scale — with the uptime, security, and reliability that enterprise clients demand.
                        </p>

                        <div className="space-y-3 text-left">
                            {[
                                '99.9% uptime SLA with always-on monitoring',
                                'Energy-efficient, optimized block production',
                                'Redundant infrastructure with automated failover',
                                'Real-time alerts and performance dashboards',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-green-400 font-mono text-sm mt-0.5 flex-shrink-0">✓</span>
                                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact"
                            className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-green-400 hover:text-green-300 group transition-colors">
                            $ contact --us
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Intro;
