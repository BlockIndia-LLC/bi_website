import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { products } from '../components/Portfolio';

/* ── Validator node info ────────────────────────── */
const nodeInfo = [
    { key: 'validator',  value: 'protonind'        },
    { key: 'network',    value: 'XPR Network'       },
    { key: 'status',     value: 'PRODUCING'         },
    { key: 'uptime',     value: '99.94%'            },
    { key: 'blocks',     value: '1,204,881'         },
    { key: 'latency',    value: '<50ms'             },
    { key: 'location',   value: 'Bangalore, India'  },
    { key: 'since',      value: '2021'              },
];

const stats = [
    { value: '99.94%', label: 'Uptime SLA',          key: 'uptime_sla'    },
    { value: '1.2M+',  label: 'Blocks Produced',     key: 'blocks'        },
    { value: '24/7',   label: 'Monitoring',          key: 'monitoring'    },
    { value: '5',      label: 'Tools Shipped',       key: 'tools'         },
];

/* ── How to vote steps ──────────────────────────── */
const voteSteps = [
    {
        step: '01',
        title: 'Open WebAuth Wallet',
        desc: 'Visit webauth.com or open the Proton Wallet app on your device.',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        step: '02',
        title: 'Go to Vote Producers',
        desc: 'Navigate to vote.proton.org and connect your wallet.',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        step: '03',
        title: 'Search & Vote protonind',
        desc: 'Find "protonind" in the block producer list and cast your vote.',
        icon: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

/* ── Why vote points ────────────────────────────── */
const whyVote = [
    '99.94% uptime — never skip block production',
    '5 live tools built and maintained for the XPR community',
    'AI infrastructure connecting LLMs to XPR on-chain data',
    'Governance tools that keep inactive BPs accountable',
    'Active community member since 2021 — never missed a governance vote',
];

/* ════════════════════════════════════════════════ */
const NetworkXpr = () => {
    return (
        <div className="relative min-h-screen bg-surface-950">
            {/* Dot grid background */}
            <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <NavBar />

            {/* ── 1. Hero ──────────────────────────────────── */}
            <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 max-w-7xl mx-auto px-6">
                {/* Gradient orbs */}
                <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-green-500/8 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative text-center lg:text-left max-w-3xl">
                    <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-green-400/80">
                        <span className="status-live" />
                        <span>$ xpr-network --validator protonind <span className="text-white/30">{'// block producing'}</span></span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                        BlocksIndia on<br />
                        <span className="gradient-text">XPR Network</span>
                    </h1>

                    <p className="text-base md:text-lg text-white/40 font-mono leading-relaxed mb-2">
                        {'>'} Validator: <span className="text-orange-400">protonind</span>
                        <span className="text-white/20 mx-3">·</span>
                        since <span className="text-white/60">2021</span>
                        <span className="text-white/20 mx-3">·</span>
                        uptime <span className="text-green-400">99.94%</span>
                    </p>

                    <p className="text-sm text-white/30 font-mono mb-8">
                        {'>'} We validate and we build. 5 live tools shipped for the XPR community.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <a
                            href="https://vote.proton.org"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold font-mono text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25"
                        >
                            $ vote-protonind
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </a>
                        <HashLink
                            smooth
                            to="/networks/xpr#xpr-tools"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold font-mono text-white/60 border border-white/10 hover:border-orange-500/30 hover:text-white rounded-lg transition-all duration-200"
                        >
                            --explore-tools
                        </HashLink>
                    </div>
                </div>
            </section>

            {/* ── 2. Validator Stats ───────────────────────── */}
            <section className="py-12 lg:py-16 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14" data-aos="fade-up">

                    {/* Left — terminal node info */}
                    <div className="lg:w-1/2 w-full">
                        <div className="terminal-window shadow-2xl shadow-black/40">
                            <div className="terminal-header">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs font-mono text-white/30">node-info — protonind</span>
                            </div>
                            <div className="p-5 font-mono text-sm space-y-3">
                                <div>
                                    <span className="text-green-400">$</span>
                                    <span className="text-white/60 ml-2">xpr-network --node-info protonind</span>
                                </div>
                                <div className="space-y-1.5 pt-1">
                                    {nodeInfo.map((item) => (
                                        <div key={item.key} className="flex items-center justify-between text-xs border-b border-white/[0.04] pb-1.5">
                                            <span className="text-white/30">{item.key}</span>
                                            <span className={`font-semibold ${item.key === 'status' ? 'text-green-400' : item.key === 'uptime' ? 'text-green-400' : item.key === 'validator' ? 'text-orange-400' : 'text-white/70'}`}>
                                                {item.key === 'status'
                                                    ? <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 4px #4ade80' }} />{item.value}</span>
                                                    : item.value
                                                }
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-white/40 text-xs pt-1">
                                    <span className="text-green-400">$</span>
                                    <span className="terminal-cursor" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — stat boxes */}
                    <div className="lg:w-1/2">
                        <span className="section-label">$ protonind --metrics</span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 mt-1">
                            Validator <span className="gradient-text">performance</span>
                        </h2>
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((stat) => (
                                <div key={stat.key} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 flex flex-col gap-1">
                                    <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">{stat.key}</span>
                                    <span className="text-3xl font-extrabold font-mono text-orange-400 leading-none">{stat.value}</span>
                                    <span className="text-xs font-mono text-white/40 mt-0.5">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── 3. Tools Built for XPR ───────────────────── */}
            <section className="py-12 lg:py-16 border-t border-white/5" id="xpr-tools">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-10" data-aos="fade-up">
                        <span className="section-label">$ protonind --deployments</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Shipped for this <span className="gradient-text">network</span>
                        </h2>
                        <p className="mt-2 text-sm font-mono text-white/30">
                            {'>'} 5 live tools built by BlocksIndia for the XPR community.
                        </p>
                    </div>

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
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-mono text-[10px] text-orange-400/40 group-hover:text-orange-400/70 transition-colors uppercase tracking-widest">{product.cmd}</span>
                                    <span className="flex items-center gap-1 font-mono text-[9px] text-green-400/60 uppercase tracking-widest">
                                        <span className="w-1 h-1 rounded-full bg-green-400" style={{ boxShadow: '0 0 4px #4ade80' }} />
                                        LIVE
                                    </span>
                                </div>

                                <div className="w-9 h-9 rounded-lg border border-white/10 group-hover:border-orange-500/30 bg-white/5 group-hover:bg-orange-500/10 flex items-center justify-center text-white/40 group-hover:text-orange-400 transition-all duration-300 mb-3">
                                    {product.icon}
                                </div>

                                <span className="text-[10px] font-mono font-semibold text-orange-400/50 uppercase tracking-wider mb-1">{product.tagline}</span>
                                <h4 className="font-bold text-base text-white mb-2">{product.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed mb-4 flex-grow">{product.description}</p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {product.features.map((feature, i) => (
                                        <span key={i} className="px-2 py-0.5 font-mono text-[10px] text-white/30 border border-white/[0.07] group-hover:border-orange-500/20 group-hover:text-orange-400/60 rounded transition-all duration-300">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <span className="inline-flex items-center font-mono text-xs text-green-400/60 group-hover:text-green-400 transition-colors">
                                    $ visit-live
                                    <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. Why Vote ──────────────────────────────── */}
            <section className="py-12 lg:py-16 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16" data-aos="fade-up">

                        <div className="lg:w-1/2">
                            <span className="section-label">$ protonind --why-vote</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6 mt-1">
                                Why vote <span className="gradient-text">ProtonIND?</span>
                            </h2>
                            <div className="space-y-3">
                                {whyVote.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-green-400 font-mono text-sm mt-0.5 flex-shrink-0">✓</span>
                                        <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── 5. How to Vote ── */}
                        <div className="lg:w-1/2">
                            <span className="section-label">$ protonind --how-to-vote</span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 mt-1">
                                Cast your <span className="gradient-text">vote</span>
                            </h2>
                            <div className="space-y-3">
                                {voteSteps.map((step, i) => (
                                    <div
                                        key={i}
                                        data-aos="fade-up"
                                        data-aos-delay={i * 80}
                                        className="flex gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300 group"
                                    >
                                        <div className="flex-shrink-0 w-9 h-9 rounded-lg border border-white/10 group-hover:border-orange-500/30 bg-white/5 group-hover:bg-orange-500/10 flex items-center justify-center text-white/40 group-hover:text-orange-400 transition-all duration-300">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-mono text-[10px] text-orange-400/50 uppercase tracking-widest">{step.step}</span>
                                                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                                            </div>
                                            <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://vote.proton.org"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 text-sm font-semibold font-mono text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25"
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
