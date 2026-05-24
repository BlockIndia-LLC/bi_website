import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const LAST_UPDATED = 'May 24, 2026';

const sections = [
    {
        id: 'collect',
        title: 'Information We Collect',
        content: (
            <>
                <p>We collect limited information to keep our apps working well. This may include:</p>
                <ul>
                    <li><strong>Usage data</strong> — which features you use, how often, and how long sessions last.</li>
                    <li><strong>Device information</strong> — device model, operating system version, and language settings.</li>
                    <li><strong>Crash reports</strong> — error logs and diagnostics to help us fix bugs.</li>
                    <li><strong>Blockchain identifiers</strong> — if you connect a wallet, we may read your public wallet address. We never access private keys or sign transactions without your explicit action.</li>
                </ul>
                <p>We do <strong>not</strong> collect your name, email, phone number, or any personally identifiable information unless you voluntarily provide it through a contact form.</p>
            </>
        ),
    },
    {
        id: 'use',
        title: 'How We Use Your Information',
        content: (
            <>
                <p>The data we collect is used only to:</p>
                <ul>
                    <li>Improve app performance and fix crashes</li>
                    <li>Understand which features are useful to users</li>
                    <li>Diagnose technical issues</li>
                </ul>
                <p>We do not sell, rent, or trade your data to third parties. We do not use your data for advertising.</p>
            </>
        ),
    },
    {
        id: 'third-party',
        title: 'Third-Party Services',
        content: (
            <>
                <p>Our apps may use the following third-party services, each with their own privacy policies:</p>
                <ul>
                    <li>
                        <strong>Google Firebase / Analytics</strong> — for crash reporting and usage analytics.{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 underline">Google Privacy Policy →</a>
                    </li>
                    <li>
                        <strong>Google Play Services</strong> — required for Android app distribution.{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 underline">Google Privacy Policy →</a>
                    </li>
                    <li>
                        <strong>XPR Network / Blockchain RPC</strong> — for reading on-chain data. Public blockchain data is visible to anyone on the network by design.
                    </li>
                </ul>
                <p>We recommend reviewing the privacy policies of these services for full details on their data practices.</p>
            </>
        ),
    },
    {
        id: 'retention',
        title: 'Data Retention',
        content: (
            <>
                <p>Analytics and crash data is retained for up to <strong>90 days</strong> by default, as governed by our analytics providers (Firebase / Google Analytics).</p>
                <p>We do not maintain our own database of user activity beyond what third-party analytics services collect on our behalf.</p>
            </>
        ),
    },
    {
        id: 'rights',
        title: 'Your Rights',
        content: (
            <>
                <p>You have the right to:</p>
                <ul>
                    <li><strong>Opt out of analytics</strong> — disable analytics tracking in your device's app settings or through your device's advertising ID settings.</li>
                    <li><strong>Request deletion</strong> — contact us and we will request deletion of any data associated with your usage from our analytics providers.</li>
                    <li><strong>Data access</strong> — request information about what data has been collected about your usage.</li>
                </ul>
                <p>To exercise any of these rights, contact us at the email below.</p>
            </>
        ),
    },
    {
        id: 'children',
        title: "Children's Privacy",
        content: (
            <>
                <p>Our apps are not directed at children under the age of 13. We do not knowingly collect personal information from children.</p>
                <p>If you believe a child has provided us with personal information, please contact us immediately and we will take steps to delete it.</p>
            </>
        ),
    },
    {
        id: 'changes',
        title: 'Changes to This Policy',
        content: (
            <>
                <p>We may update this Privacy Policy from time to time. When we do, we will update the <strong>Last Updated</strong> date at the top of this page.</p>
                <p>We encourage you to review this policy periodically. Continued use of our apps after changes are posted constitutes acceptance of the updated policy.</p>
            </>
        ),
    },
    {
        id: 'contact',
        title: 'Contact Us',
        content: (
            <>
                <p>If you have questions or concerns about this Privacy Policy or our data practices, please reach out:</p>
                <ul>
                    <li><strong>Website:</strong> <Link to="/contact" className="text-orange-400 hover:text-orange-300 underline">blocksindia.com/contact</Link></li>
                    <li><strong>Location:</strong> Bangalore, Karnataka, India 560013</li>
                </ul>
                <p>We aim to respond to all privacy-related inquiries within 5 business days.</p>
            </>
        ),
    },
];

/* ── Accordion item ─────────────────────────────── */
const AccordionItem = ({ section, isOpen, onToggle }) => (
    <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-orange-500/25 bg-orange-500/[0.03]' : 'border-white/[0.07] bg-white/[0.02]'}`}>
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between px-5 py-4 text-left group"
        >
            <div className="flex items-center gap-3">
                <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${isOpen ? 'text-orange-400/70' : 'text-white/25'}`}>
                    {String(sections.indexOf(section) + 1).padStart(2, '0')}
                </span>
                <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                    {section.title}
                </span>
            </div>
            <svg
                className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-45 text-orange-400' : 'text-white/20 group-hover:text-white/40'}`}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
        </button>

        {isOpen && (
            <div className="px-5 pb-5 prose-policy">
                {section.content}
            </div>
        )}
    </div>
);

/* ════════════════════════════════════════════════ */
const PrivacyPolicy = () => {
    const [openId, setOpenId] = useState('collect');

    return (
        <div className="relative min-h-screen bg-surface-950">
            <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <NavBar />

            <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 max-w-4xl mx-auto px-6">
                {/* Ambient orb */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

                {/* Header */}
                <div className="relative mb-10" data-aos="fade-up">
                    <span className="section-label">$ legal --privacy-policy</span>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-1">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-white/30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-mono text-[10px] text-white/30">Last updated: {LAST_UPDATED}</span>
                        </div>
                    </div>

                    <p className="mt-4 text-sm text-white/40 font-mono leading-relaxed max-w-2xl">
                        {'>'} This policy explains what data our apps collect, how we use it, and your rights. Written in plain English — no legal jargon.
                    </p>

                    {/* Scope chips */}
                    <div className="flex flex-wrap gap-2 mt-5">
                        {['Android Apps', 'blocksindia.com', 'XPR Tools'].map((label) => (
                            <span key={label} className="px-3 py-1 rounded-full border border-white/[0.07] bg-white/[0.02] font-mono text-[10px] text-white/35 uppercase tracking-wider">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Accordion */}
                <div className="space-y-2" data-aos="fade-up">
                    {sections.map((section) => (
                        <AccordionItem
                            key={section.id}
                            section={section}
                            isOpen={openId === section.id}
                            onToggle={() => setOpenId(openId === section.id ? null : section.id)}
                        />
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-8 p-4 rounded-xl border border-green-500/10 bg-green-500/[0.03] flex items-start gap-3" data-aos="fade-up">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </span>
                    <div>
                        <p className="text-xs font-mono text-white/50 leading-relaxed">
                            This policy applies to all apps and tools published under <span className="text-white/70">BlocksIndia</span> and <span className="text-white/70">ProtonIND</span>. If you have a question not covered here, use the <Link to="/contact" className="text-orange-400 hover:text-orange-300 underline">contact page</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
