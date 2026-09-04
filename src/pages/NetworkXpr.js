import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { products } from '../components/Portfolio';

const nodeInfo = [
    { key: 'validator', value: 'protonind',       color: 'text-orange-400'  },
    { key: 'network',   value: 'XPR Network',      color: 'text-white/70'    },
    { key: 'status',    value: 'PRODUCING',         color: 'text-green-400'   },
    { key: 'uptime',    value: '99.94%',            color: 'text-green-400'   },
    { key: 'blocks',    value: '1,204,881',         color: 'text-white/70'    },
    { key: 'latency',   value: '<50ms',             color: 'text-white/70'    },
    { key: 'location',  value: 'Bangalore, India',  color: 'text-white/50'    },
];

const statChips = [
    { label: 'Uptime',   value: '99.94%', accent: 'text-green-400'  },
    { label: 'Blocks',   value: '1.2M+',  accent: 'text-orange-400' },
    { label: 'Tools',    value: '5 Live', accent: 'text-orange-400' },
    { label: 'Monitor',  value: '24 / 7', accent: 'text-green-400'  },
];

const whyVote = [
    { icon: '⬆', text: '99.94% uptime — consistent block production since 2021' },
    { icon: '🛠', text: '5 live community tools built and actively maintained'   },
    { icon: '🤖', text: 'AI infrastructure connecting LLMs to XPR on-chain data' },
    { icon: '🗳', text: 'Governance tools that surface and remove ghost BPs'     },
    { icon: '✅', text: 'Never missed a governance vote in 4+ years on-chain'    },
];

const voteSteps = [
    {
        step: '01',
        title: 'Open Wallet',
        desc: 'webauth.com or Proton Wallet app',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        step: '02',
        title: 'Vote Page',
        desc: 'vote.proton.org — connect wallet',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        step: '03',
        title: 'Vote protonind',
        desc: 'Search and cast your vote',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

/* ════════════════════════════════════════════════ */
const NetworkXpr = () => {
    return (
        <div className="relative min-h-screen bg-surface-950">
            <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <NavBar />

            {/* ══ SECTION 1: Hero + terminal (2-col) ══════════ */}
            <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 max-w-7xl mx-auto px-6">
                {/* Ambient orbs */}
                <div className="absolute -top-20 -left-32 w-[500px] h-[500px] bg-orange-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-green-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

                <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

                    {/* Left — identity + stats chips + CTAs */}
                    <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up">

                        {/* Chain badge */}
                        <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5">
                            <span className="w-2 h-2 rounded-full bg-orange-400" style={{ boxShadow: '0 0 6px #fb923c' }} />
                            <span className="font-mono text-xs text-orange-400/80 tracking-wider">XPR Network · protonind</span>
                        </div>

                        {/* Status line */}
                        <div className="inline-flex items-center gap-2 mb-5 font-mono text-xs text-green-400/70 block">
                            <span className="status-live" />
                            <span>$ xpr-network --validator protonind <span className="text-white/25">{'// block producing'}</span></span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                            BlocksIndia on<br />
                            <span className="gradient-text">XPR Network</span>
                        </h1>

                        <p className="text-sm text-white/35 font-mono mb-5 leading-relaxed">
                            {'>'} We validate and we build. 5 live tools shipped for the community.
                        </p>

                        {/* Stat chips row */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7">
                            {statChips.map((chip) => (
                                <div key={chip.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03]">
                                    <span className={`font-mono text-sm font-bold ${chip.accent}`}>{chip.value}</span>
                                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-wider">{chip.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <a
                                href="https://vote.proton.org"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold font-mono text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25"
                            >
                                $ vote-protonind
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </a>
                            <HashLink
                                smooth to="/networks/xpr#xpr-tools"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold font-mono text-white/55 border border-white/10 hover:border-orange-500/30 hover:text-white rounded-lg transition-all duration-200"
                            >
                                --explore-tools
                            </HashLink>
                        </div>
                    </div>

                    {/* Right — compact terminal */}
                    <div className="lg:w-1/2 w-full" data-aos="fade-up" data-aos-delay="130">
                        <div className="terminal-window shadow-2xl shadow-black/50">
                            <div className="terminal-header">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs font-mono text-white/30">node-info — protonind</span>
                            </div>
                            <div className="p-4 font-mono text-xs space-y-2.5">
                                <div className="text-white/40">
                                    <span className="text-green-400">$</span>
                                    <span className="ml-2">xpr-network --node-info protonind</span>
                                </div>
                                <div className="space-y-1">
                                    {nodeInfo.map((item) => (
                                        <div key={item.key} className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                                            <span className="text-white/25 w-20">{item.key}</span>
                                            <span className={`font-semibold ${item.color} flex items-center gap-1.5`}>
                                                {item.key === 'status' && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" style={{ boxShadow: '0 0 4px #4ade80' }} />
                                                )}
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-white/30 pt-1">
                                    <span className="text-green-400">$</span>
                                    <span className="terminal-cursor" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ══ SECTION 2: Tools — compact list ════════════ */}
            <section className="py-10 lg:py-12 border-t border-white/5" id="xpr-tools">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3" data-aos="fade-up">
                        <div>
                            <span className="section-label">$ protonind --deployments</span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                                5 tools. All <span className="gradient-text">live.</span>
                            </h2>
                        </div>
                        <span className="font-mono text-xs text-white/25">{'> built for XPR community'}</span>
                    </div>

                    {/* Compact list — each row is a tool */}
                    <div className="space-y-2" data-aos="fade-up">
                        {products.map((product, index) => (
                            <a
                                key={index}
                                href={product.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.03] transition-all duration-300 overflow-hidden relative"
                            >
                                {/* Left glow on hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Icon */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-white/10 group-hover:border-orange-500/30 bg-white/5 group-hover:bg-orange-500/10 flex items-center justify-center text-white/35 group-hover:text-orange-400 transition-all duration-300">
                                    {product.icon}
                                </div>

                                {/* Name + tagline */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-sm font-semibold text-white group-hover:text-white transition-colors truncate">{product.title}</span>
                                        <span className="font-mono text-[9px] text-orange-400/50 uppercase tracking-wider hidden sm:inline">{product.tagline}</span>
                                    </div>
                                    {/* Feature tags — hidden on mobile */}
                                    <div className="hidden md:flex gap-1.5 mt-1 flex-wrap">
                                        {product.features.map((f, i) => (
                                            <span key={i} className="font-mono text-[9px] text-white/25 group-hover:text-orange-400/50 transition-colors">{f}{i < product.features.length - 1 ? ' ·' : ''}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* LIVE + arrow */}
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="hidden sm:flex items-center gap-1 font-mono text-[9px] text-green-400/60 uppercase tracking-widest">
                                        <span className="w-1 h-1 rounded-full bg-green-400" style={{ boxShadow: '0 0 4px #4ade80' }} />
                                        LIVE
                                    </span>
                                    <svg className="w-4 h-4 text-white/20 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3: Why vote + How to vote ══════════ */}
            <section className="py-10 lg:py-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14" data-aos="fade-up">

                        {/* Why vote */}
                        <div className="lg:w-1/2">
                            <span className="section-label">$ protonind --why-vote</span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 mt-1">
                                Why vote <span className="gradient-text">ProtonIND?</span>
                            </h2>
                            <div className="space-y-2.5">
                                {whyVote.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-white/[0.05] bg-white/[0.02] hover:border-orange-500/15 transition-colors duration-300">
                                        <span className="text-base flex-shrink-0 mt-px">{item.icon}</span>
                                        <span className="text-sm text-white/55 leading-relaxed">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How to vote */}
                        <div className="lg:w-1/2">
                            <span className="section-label">$ protonind --how-to-vote</span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 mt-1">
                                3 steps to <span className="gradient-text">vote</span>
                            </h2>

                            {/* Horizontal step flow */}
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                {voteSteps.map((step, i) => (
                                    <React.Fragment key={i}>
                                        <div className="flex flex-col items-center text-center p-3 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-orange-500/25 hover:bg-orange-500/[0.03] transition-all duration-300 group">
                                            <div className="w-9 h-9 rounded-lg border border-white/10 group-hover:border-orange-500/30 bg-white/5 group-hover:bg-orange-500/10 flex items-center justify-center text-white/35 group-hover:text-orange-400 transition-all duration-300 mb-2">
                                                {step.icon}
                                            </div>
                                            <span className="font-mono text-[9px] text-orange-400/40 uppercase tracking-widest mb-0.5">{step.step}</span>
                                            <span className="text-xs font-semibold text-white leading-tight mb-1">{step.title}</span>
                                            <span className="font-mono text-[9px] text-white/25 leading-tight">{step.desc}</span>
                                        </div>
                                        {i < voteSteps.length - 1 && (
                                            <div className="hidden" /> /* spacer handled by grid-cols-3 */
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Flow arrows overlay — visual decoration */}
                            <div className="relative -mt-2 mb-4 hidden sm:flex items-center justify-around px-12 pointer-events-none">
                                <svg className="w-5 h-5 text-orange-500/20 -mt-12 ml-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                <svg className="w-5 h-5 text-orange-500/20 -mt-12 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </div>

                            <a
                                href="https://vote.proton.org"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 text-sm font-semibold font-mono text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/20"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                $ vote --producer protonind
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NetworkXpr;
