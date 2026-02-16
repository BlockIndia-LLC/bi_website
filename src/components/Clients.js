import React from 'react';
import kws from '../images/clients/xpr.jpg';
import geps from '../images/clients/telos.png';
import protergia from '../images/clients/metal.jpg';
import libre from '../images/clients/libre.jpg';
import fio from '../images/clients/fio.png';
import tron from '../images/clients/tron.png';

const Clients = () => {
    return (
        <section className="py-16 bg-surface-50 border-y border-surface-200" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="section-label">Our Networks</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 mb-4">Validator Networks</h2>
                    <p className="text-lg text-surface-800/60 max-w-2xl mx-auto">
                        We are running enterprise-grade infrastructure with industry best tech to secure our partnered networks.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
                    <img src={kws} alt="XPR" className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                    <img src={protergia} alt="Metal" className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                    <img src={geps} alt="Telos" className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                    <img src={libre} alt="Libre" className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                    <img src={fio} alt="FIO" className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                    <img src={tron} alt="TRON" className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                </div>
            </div>
        </section>
    )
}

export default Clients;
