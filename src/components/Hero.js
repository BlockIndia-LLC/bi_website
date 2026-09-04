import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavBar from '../components/Navbar/NavBar';

const networks = [
    { name: 'XPR Network',  blocks: '1,204,881' },
    { name: 'Metal',        blocks: '893,441'   },
    { name: 'Telos',        blocks: '1,502,903' },
    { name: 'Libre',        blocks: '447,220'   },
    { name: 'FIO Protocol', blocks: '681,554'   },
    { name: 'TRON',         blocks: '2,110,004' },
];

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-surface-950" id="hero">
            {/* Dot grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Gradient orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-600/15 rounded-full blur-[100px]" />
            </div>

            <NavBar />

            <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-10 lg:pt-32 lg:pb-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* Left — Text */}
                    <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up">

                        {/* Terminal-style status line */}
                        <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-green-400/80">
                            <span className="status-live" />
                            <span>$ blocksindia --status <span className="text-white/30">{'// all networks operational'}</span></span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                            Battle-tested<br />
                            <span className="gradient-text">blockchain</span><br />
                            infrastructure.
                        </h1>

                        <p className="text-base md:text-lg text-white/40 leading-relaxed mb-8 max-w-lg font-mono">
                            {'>'} High-uptime validators &amp; full-stack blockchain development — from protocol design to mainnet.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold font-mono text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25">
                                $ get-started
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </Link>
                            <HashLink smooth to="/#services"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold font-mono text-white/60 border border-white/10 hover:border-green-500/30 hover:text-white rounded-lg transition-all duration-200">
                                --learn-more
                            </HashLink>
                        </div>
                    </div>

                    {/* Right — Terminal window */}
                    <div className="lg:w-1/2 w-full" data-aos="fade-up" data-aos-delay="150">
                        <div className="terminal-window shadow-2xl shadow-black/60">
                            {/* Window chrome */}
                            <div className="terminal-header">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs font-mono text-white/30">validator-status — blocksindia</span>
                            </div>

                            {/* Terminal body */}
                            <div className="p-5 font-mono text-sm space-y-3">
                                <div>
                                    <span className="text-green-400">$</span>
                                    <span className="text-white/60 ml-2">blocksindia --network all --status</span>
                                </div>

                                <div className="text-white/30 text-xs">Fetching node status across all networks...</div>

                                <div className="space-y-1.5 pt-1">
                                    {networks.map((net, i) => (
                                        <div key={i} className="flex items-center justify-between group/row">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"
                                                    style={{ boxShadow: '0 0 4px #4ade80' }} />
                                                <span className="text-white/70 group-hover/row:text-white transition-colors text-xs">
                                                    {net.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs">
                                                <span className="text-white/30">{net.blocks} blks</span>
                                                <span className="text-green-400 font-semibold">[PRODUCING]</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-white/5 pt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/40">
                                    <span><span className="text-green-400">uptime</span>: 99.94%</span>
                                    <span><span className="text-green-400">networks</span>: 6/6 live</span>
                                    <span><span className="text-green-400">latency</span>: &lt;50ms</span>
                                </div>

                                <div className="flex items-center gap-2 text-white/40 text-xs">
                                    <span className="text-green-400">$</span>
                                    <span className="terminal-cursor" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
