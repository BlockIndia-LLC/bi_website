import React from 'react';

const deployments = [
    { name: 'xpr-voter-intelligence', category: 'governance',  href: 'https://xpr.voterintelligence.blocksindia.com' },
    { name: 'xpr-mcp-server',         category: 'ai-x-chain',  href: 'https://xpr-mcp.aiblock.work'                 },
    { name: 'talk-to-xpr',            category: 'ai-assistant', href: 'https://xpr.aiblock.work'                    },
    { name: 'xpr-casino',             category: 'defi-gaming',  href: 'https://xprcasino.blocksindia.com'           },
    { name: 'xpr-rmvproducer-msig',   category: 'governance',  href: 'https://xpr-rmvproducer-msig-app.vercel.app' },
];

const XprBuilds = () => {
    return (
        <section className="py-12 lg:py-16 bg-surface-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

                    {/* Left — Terminal deployments window */}
                    <div className="lg:w-1/2 w-full" data-aos="fade-up">
                        <div className="terminal-window shadow-2xl shadow-black/40">
                            {/* Window chrome */}
                            <div className="terminal-header">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs font-mono text-white/30">deployments — protonind</span>
                            </div>

                            {/* Terminal body */}
                            <div className="p-5 font-mono text-sm space-y-3">
                                <div>
                                    <span className="text-green-400">$</span>
                                    <span className="text-white/60 ml-2">blocksindia --deployments --network xpr</span>
                                </div>

                                <div className="text-white/30 text-xs">Fetching live deployments...</div>

                                <div className="space-y-1 pt-1">
                                    {deployments.map((dep, i) => (
                                        <a
                                            key={i}
                                            href={dep.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between group/row hover:bg-white/[0.03] rounded px-1 py-1 transition-colors"
                                        >
                                            <div className="flex items-center gap-2 min-w-0">
                                                <span className="text-white/20 text-xs flex-shrink-0">{'>'}</span>
                                                <span className="text-white/60 group-hover/row:text-white transition-colors text-xs truncate">
                                                    {dep.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs flex-shrink-0 ml-4">
                                                <span className="text-white/25 hidden sm:inline">{dep.category}</span>
                                                <span className="text-green-400 font-semibold">[LIVE]</span>
                                                <svg className="w-3 h-3 text-white/20 group-hover/row:text-orange-400 group-hover/row:translate-x-0.5 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                <div className="border-t border-white/5 pt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/40">
                                    <span><span className="text-green-400">deployments</span>: 5 active</span>
                                    <span><span className="text-green-400">network</span>: XPR</span>
                                    <span><span className="text-green-400">status</span>: all operational</span>
                                </div>

                                <div className="flex items-center gap-2 text-white/40 text-xs">
                                    <span className="text-green-400">$</span>
                                    <span className="terminal-cursor" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Proof of work pitch */}
                    <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="120">
                        <span className="section-label">$ protonind --proof-of-work</span>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 mt-1">
                            We don't just validate.<br />
                            <span className="gradient-text">We ship.</span>
                        </h2>

                        <p className="text-white/40 font-mono text-sm leading-relaxed mb-6">
                            {'>'} Choosing a block producer? Look at what they actually build for the network.
                        </p>

                        <div className="space-y-3 mb-8">
                            {[
                                'Governance tools to keep the network clean',
                                'AI infrastructure connecting LLMs to XPR on-chain data',
                                'Consumer apps that bring real users to XPR',
                                'Open tools for the community — shipped and maintained',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-green-400 font-mono text-sm mt-0.5 flex-shrink-0">✓</span>
                                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://proton.bloks.io/vote"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold font-mono text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/20"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                            $ vote --producer protonind
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default XprBuilds;
