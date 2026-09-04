import React from 'react';

const stats = [
    { value: '99.9%', key: 'uptime_sla',      label: 'Uptime SLA' },
    { value: '6',     key: 'networks_live',    label: 'Networks Live' },
    { value: '10+',   key: 'years_exp',        label: 'Years Experience' },
    { value: '24/7',  key: 'monitoring',       label: 'Monitoring' },
];

const Stats = () => {
    return (
        <section className="border-y border-white/5 bg-surface-950">
            <div className="max-w-7xl mx-auto px-6">
                {/* Terminal header bar */}
                <div className="flex items-center gap-2 py-3 border-b border-white/5 font-mono text-xs text-white/20">
                    <span className="text-green-400/60">$</span>
                    <span>blocksindia --metrics --realtime</span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5" data-aos="fade-up">
                    {stats.map((stat) => (
                        <div key={stat.key} className="py-5 px-6 flex flex-col gap-1 group">
                            <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">
                                {stat.key}
                            </span>
                            <span className="text-3xl md:text-4xl font-extrabold font-mono text-orange-400 leading-none group-hover:text-orange-300 transition-colors duration-300">
                                {stat.value}
                            </span>
                            <span className="text-xs font-mono text-white/40 mt-0.5">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
