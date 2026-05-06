import React from 'react';
import kws      from '../images/clients/xpr.jpg';
import geps     from '../images/clients/telos.png';
import protergia from '../images/clients/metal.jpg';
import libre    from '../images/clients/libre.jpg';
import fio      from '../images/clients/fio.png';
import tron     from '../images/clients/tron.png';

const logos = [
    { src: kws,       alt: 'XPR Network' },
    { src: protergia, alt: 'Metal'       },
    { src: geps,      alt: 'Telos'       },
    { src: libre,     alt: 'Libre'       },
    { src: fio,       alt: 'FIO'         },
    { src: tron,      alt: 'TRON'        },
];

// Duplicated for seamless CSS marquee loop
const track = [...logos, ...logos];

const Clients = () => {
    return (
        <section className="py-10 bg-surface-950 border-y border-white/5" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-6 mb-6">
                <span className="section-label">$ blocksindia --networks</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                    Validator <span className="gradient-text">Networks</span>
                </h2>
                <p className="mt-2 text-sm font-mono text-white/30">
                    Enterprise-grade infrastructure securing partnered networks — 24/7.
                </p>
            </div>

            {/* Scrolling ticker */}
            <div className="overflow-hidden relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-950 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee gap-16 items-center w-max px-8">
                    {track.map((logo, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 group">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.07] bg-white/[0.03] group-hover:border-green-500/30 group-hover:bg-green-500/5 transition-all duration-300">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-8 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
                                />
                                <span className="font-mono text-xs text-white/30 group-hover:text-white/70 transition-colors whitespace-nowrap">
                                    {logo.alt}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-green-400" style={{ boxShadow: '0 0 4px #4ade80' }} />
                                <span className="font-mono text-[9px] text-green-400/50">LIVE</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
