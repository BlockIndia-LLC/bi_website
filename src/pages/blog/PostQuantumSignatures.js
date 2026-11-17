import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { usePageTitle } from '../../components/CustomHook';
import { posts } from '../../data/posts';

const post = posts.find((p) => p.slug === 'post-quantum-blockchain-signatures');

/* ── Helpers ─────────────────────────────────────── */

const usePrefersReducedMotion = () => {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        if (!window.matchMedia) return undefined;
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReduced(mq.matches);
        update();
        if (mq.addEventListener) {
            mq.addEventListener('change', update);
            return () => mq.removeEventListener('change', update);
        }
        mq.addListener(update);
        return () => mq.removeListener(update);
    }, []);
    return reduced;
};

const LockIcon = ({ open = false, className = '' }) => (
    <svg className={className} viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
            d={open ? 'M18 30V16a14 14 0 0 1 27-5' : 'M18 32V20a14 14 0 0 1 28 0v12'}
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            style={{ transition: 'all 0.4s ease' }}
        />
        <rect x="8" y="32" width="48" height="36" rx="8" fill="currentColor" />
        <circle cx="32" cy="47" r="5" fill="#020617" />
        <rect x="30" y="49" width="4" height="10" rx="2" fill="#020617" />
    </svg>
);

const Figure = ({ label, caption, children }) => (
    <figure className="my-8">
        <div className="terminal-window">
            <div className="terminal-header">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="ml-2 font-mono text-[10px] text-white/30 uppercase tracking-widest">{label}</span>
            </div>
            <div className="p-5 md:p-6">{children}</div>
        </div>
        {caption && (
            <figcaption className="mt-2 font-mono text-[11px] text-white/30 leading-relaxed">{'// '}{caption}</figcaption>
        )}
    </figure>
);

/* ── Animation 1: cracking a signature ───────────── */

const CRACK_RUN_MS = 4500;
const CRACK_HOLD_MS = 2800;

const CrackingRace = () => {
    const reduced = usePrefersReducedMotion();
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        if (reduced) return undefined;
        const total = CRACK_RUN_MS + CRACK_HOLD_MS;
        const start = Date.now();
        const id = setInterval(() => setElapsed((Date.now() - start) % total), 80);
        return () => clearInterval(id);
    }, [reduced]);

    const raw = reduced ? 1 : Math.min(1, elapsed / CRACK_RUN_MS);
    const eased = raw * raw * (3 - 2 * raw);
    const classical = 0.05 * raw;
    const cracked = eased >= 0.999;

    const panels = [
        {
            name: 'Classical computer',
            progress: classical,
            bar: 'bg-white/40',
            border: 'border-white/[0.08]',
            lock: 'text-green-400',
            open: false,
            status: 'Practically impossible',
            statusCls: 'text-white/50',
        },
        {
            name: 'Large quantum computer',
            progress: eased,
            bar: cracked ? 'bg-red-400' : 'bg-orange-400',
            border: cracked ? 'border-red-400/40' : 'border-orange-500/25',
            lock: cracked ? 'text-red-400' : 'text-green-400',
            open: cracked,
            status: cracked ? 'KEY DERIVED' : 'Searching…',
            statusCls: cracked ? 'text-red-400' : 'text-orange-400/80',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {panels.map((p) => (
                <div key={p.name} className={`rounded-lg border ${p.border} bg-white/[0.02] p-4 transition-colors duration-300`}>
                    <p className="text-sm font-semibold text-white">{p.name}</p>
                    <div className="mt-3 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className={`h-full rounded-full ${p.bar}`} style={{ width: `${Math.round(p.progress * 100)}%` }} />
                    </div>
                    <p className="mt-2 font-mono text-[10px] text-white/30">
                        deriving private key: {Math.round(p.progress * 100)}%
                    </p>
                    <div className="mt-4 flex flex-col items-center gap-2">
                        <LockIcon open={p.open} className={`w-12 h-14 ${p.lock} transition-colors duration-300`} />
                        <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${p.statusCls}`}>{p.status}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

/* ── Animation 2: key rotation ───────────────────── */

const rotationSteps = [
    { label: 'Old key (ECC)',          note: 'Today: the account is secured by an elliptic-curve key.', lock: 'text-orange-400', badge: null },
    { label: 'Old key retired',        note: 'Step 1: the old key is removed from the account.',        lock: 'text-white/20',   badge: null },
    { label: 'New key (post-quantum)', note: 'Step 2: a quantum-safe key is installed.',                lock: 'text-green-400',  badge: 'PROTECTED' },
];

const KeyRotation = () => {
    const reduced = usePrefersReducedMotion();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (reduced) {
            setStep(2);
            return undefined;
        }
        const id = setTimeout(() => setStep((s) => (s + 1) % rotationSteps.length), step === 2 ? 3200 : 1900);
        return () => clearTimeout(id);
    }, [step, reduced]);

    const current = rotationSteps[step];

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-xs rounded-lg border border-green-500/25 bg-green-500/[0.03] p-5 text-center">
                <p className="font-mono text-sm text-white">account: <span className="text-orange-400">@alice</span></p>
                <p className="font-mono text-[10px] text-white/30 mt-0.5">identity never changes</p>
                <div className="mt-4 flex flex-col items-center gap-2 min-h-[120px]">
                    <LockIcon className={`w-12 h-14 ${current.lock} transition-colors duration-500`} />
                    <span className={`font-mono text-xs ${step === 2 ? 'text-green-400' : 'text-white/50'} transition-colors duration-500`}>
                        {current.label}
                    </span>
                    <span
                        className={`px-3 py-0.5 rounded-full bg-green-400 text-surface-950 font-mono text-[10px] font-bold tracking-widest transition-opacity duration-500 ${current.badge ? 'opacity-100' : 'opacity-0'}`}
                    >
                        PROTECTED
                    </span>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                {rotationSteps.map((s, i) => (
                    <span key={s.label} className={`h-1 w-8 rounded-full transition-colors duration-300 ${i <= step ? 'bg-green-400' : 'bg-white/10'}`} />
                ))}
            </div>
            <p className="mt-3 font-mono text-xs text-white/50 text-center min-h-[2rem]">{current.note}</p>
        </div>
    );
};

/* ── Static visuals ──────────────────────────────── */

const riskCards = [
    {
        title: 'Digital signatures',
        what: 'Prove you own your funds (ECDSA / EdDSA).',
        tag: 'High risk',
        tagCls: 'bg-red-400/15 text-red-300 border-red-400/30',
        border: 'border-red-400/25',
        why: "Shor's algorithm could derive a private key from a public key.",
    },
    {
        title: 'Hashing',
        what: 'Fingerprints data and links blocks together.',
        tag: 'Lower risk',
        tagCls: 'bg-orange-400/15 text-orange-300 border-orange-400/30',
        border: 'border-orange-500/25',
        why: "Grover's algorithm gives only a partial speedup. Longer hashes help.",
    },
    {
        title: 'Your wallet habits',
        what: 'Reusing addresses, exposing public keys.',
        tag: 'You control this',
        tagCls: 'bg-green-400/15 text-green-300 border-green-400/30',
        border: 'border-green-500/25',
        why: 'Good key hygiene shrinks the target.',
    },
];

const comparison = [
    { topic: 'Where the risk lives', banks: 'Embedded across decades of legacy systems', chains: 'Concentrated in signatures and keys' },
    { topic: 'How upgrades happen',  banks: 'Slow, internal, vendor by vendor',          chains: 'Open proposals, testing, community consensus' },
    { topic: 'Visibility',           banks: 'Weaknesses often hidden',                   chains: 'Code and progress visible to everyone' },
    { topic: 'Moving to new crypto', banks: 'Multi-year migrations',                     chains: 'Possible via key rotation and upgrades' },
];

const checklist = [
    { title: 'Stay crypto-agile',    desc: 'Design systems so signature schemes can be swapped.' },
    { title: 'Enable key rotation',  desc: 'Let accounts change keys without changing identity.' },
    { title: 'Track the standards',  desc: "Follow NIST's post-quantum algorithms as they mature into production tools." },
    { title: 'Practice key hygiene', desc: 'Avoid address reuse and minimize public key exposure.' },
    { title: 'Plan the migration',   desc: 'Test, communicate, and rehearse before it becomes urgent.' },
];

/* ════════════════════════════════════════════════ */
const PostQuantumSignatures = () => {
    usePageTitle(`${post.title} | BlocksIndia Blog`);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-surface-950">
            <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <NavBar />

            <article className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 max-w-3xl mx-auto px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

                {/* Header */}
                <header className="relative mb-8">
                    <Link to="/blog" className="font-mono text-xs text-white/40 hover:text-green-400 transition-colors duration-200">
                        ← cd ../blog
                    </Link>
                    <div className="mt-5">
                        <span className="section-label">$ blog --read post-quantum</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mt-1">
                        Your digital signature may have an <span className="gradient-text">expiry date</span>
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-white/50 leading-relaxed">
                        What quantum computers could mean for blockchains, and what we can do about it.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-white/30">
                        <span>BlocksIndia</span>
                        <span className="text-white/15">/</span>
                        <time dateTime={post.isoDate}>{post.date}</time>
                        <span className="text-white/15">/</span>
                        <span>{post.readTime}</span>
                    </div>
                </header>

                <div className="relative prose-blog">
                    <p>
                        When the banks go offline, blockchains stay online. It's a popular line, and there is truth in it. But there is a bigger question underneath: what happens to the <strong>security</strong> of both systems when quantum computers arrive?
                    </p>
                    <p>
                        You don't need a physics degree to follow this. Think of it as a story about locks, keys, and how quickly we can change them.
                    </p>

                    <h2>What protects your money on a blockchain?</h2>
                    <p>
                        On a blockchain, you prove you own something using a <strong>digital signature</strong>. You have a private key (a secret only you know) and a public key (something everyone can see). The private key signs a transaction, and anyone can use your public key to check the signature is genuine, without ever learning your secret.
                    </p>
                    <p>
                        Today this works because of a hard maths problem. Working out a private key from a public key would take today's computers an impractically long time.
                    </p>

                    <h2>Where quantum computers change the story</h2>
                    <p>
                        Quantum computers solve certain maths problems in a fundamentally different way. A method called <strong>Shor's algorithm</strong> could, on a large enough quantum computer, work out a private key from its public key. That is the core risk for most blockchains today, which rely on elliptic-curve signatures such as ECDSA and EdDSA.
                    </p>
                </div>

                <Figure label="cracking a digital signature" caption="Illustrative only, not to scale. A large quantum computer could shortcut a problem that is practically impossible for classical machines.">
                    <CrackingRace />
                </Figure>

                <div className="relative prose-blog">
                    <p>Two points keep this in perspective:</p>
                    <ul>
                        <li><strong>Nobody knows exactly when</strong> a quantum computer powerful enough to do this will exist. Estimates vary widely, and it is not here today.</li>
                        <li><strong>"Not today" is not a plan.</strong> Cryptography migrations take years, so the time to prepare is before it is urgent.</li>
                    </ul>

                    <h2>What is actually at risk, and what isn't?</h2>
                    <p>Not everything on a blockchain is equally exposed.</p>
                </div>

                <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {riskCards.map((card) => (
                        <div key={card.title} className={`rounded-xl border ${card.border} bg-white/[0.02] p-5`}>
                            <h3 className="text-base font-bold text-white">{card.title}</h3>
                            <p className="mt-1 text-xs text-white/40 leading-relaxed">{card.what}</p>
                            <span className={`inline-block mt-3 px-2.5 py-1 rounded-full border font-mono text-[10px] font-semibold uppercase tracking-wider ${card.tagCls}`}>
                                {card.tag}
                            </span>
                            <p className="mt-3 text-sm text-white/70 leading-relaxed">{card.why}</p>
                        </div>
                    ))}
                </div>

                <div className="relative prose-blog">
                    <p>
                        <strong>Digital signatures are the main concern.</strong> They prove ownership, and they are what Shor's algorithm targets.
                    </p>
                    <p>
                        <strong>Hashing is in better shape.</strong> Hashes act like fingerprints for data and link blocks together. A different quantum method, Grover's algorithm, offers only a partial speedup against them, and using longer hashes helps. Hashing is widely considered much less at risk than signatures.
                    </p>
                    <p>
                        <strong>Your habits matter.</strong> A public key becomes visible on-chain once you transact from an address. Reusing addresses and leaving funds sitting behind exposed public keys makes you an easier target. High-value targets, such as bridges, large treasuries, and the keys that validators and block producers use, would likely be attacked first.
                    </p>

                    <h2>What about banks?</h2>
                    <p>
                        Banks face the same underlying problem. Much of their security (websites, payment networks, certificates, devices) relies on similar public-key cryptography, spread across decades of systems built by many vendors. There is also a risk called <strong>"harvest now, decrypt later"</strong>: encrypted data stolen today could be unlocked once quantum computers mature.
                    </p>
                </div>

                <div className="my-8 rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                    <div className="hidden md:grid grid-cols-[1.1fr_1.4fr_1.4fr] gap-4 px-5 py-3 border-b border-white/[0.07] font-mono text-[10px] uppercase tracking-widest">
                        <span className="text-white/25">{'// compare'}</span>
                        <span className="text-orange-400/80">Traditional banking</span>
                        <span className="text-green-400/80">Blockchains</span>
                    </div>
                    {comparison.map((row, i) => (
                        <div key={row.topic} className={`grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.4fr] gap-1 md:gap-4 px-5 py-4 ${i > 0 ? 'border-t border-white/[0.05]' : ''}`}>
                            <span className="text-sm font-semibold text-white">{row.topic}</span>
                            <span className="text-sm text-white/50">
                                <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-orange-400/70 mr-2">Banks</span>
                                {row.banks}
                            </span>
                            <span className="text-sm text-white/50">
                                <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-green-400/70 mr-2">Chains</span>
                                {row.chains}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="relative prose-blog">
                    <p>
                        To be clear, <strong>neither banks nor blockchains are quantum-proof today.</strong> The real difference is how each can respond. Legacy banking infrastructure tends to change slowly and behind closed doors. Open blockchain networks can propose, test, and roll out upgrades in public, with the community able to see the work.
                    </p>

                    <h2>The fix: change the lock, keep the identity</h2>
                    <p>
                        The encouraging news is that the cryptography world is already moving. In 2024, the US standards body NIST published its first post-quantum standards, including <strong>ML-DSA</strong> and <strong>SLH-DSA</strong> for digital signatures.
                    </p>
                    <p>
                        For a blockchain, the practical goal is <strong>crypto-agility</strong>: being able to swap out the signature scheme without breaking everything else. A key part of this is <strong>key rotation</strong>, where an account can move to a new, stronger key without changing who the account is.
                    </p>
                </div>

                <Figure label="key rotation" caption="Same account, same identity, stronger lock.">
                    <KeyRotation />
                </Figure>

                <div className="relative prose-blog">
                    <p>
                        Not every blockchain supports this smoothly. On networks where an address is derived directly from a key, moving to a new scheme can mean moving funds to a new address. Networks with flexible account permissions can make the transition easier. Either way, migration takes planning, wallet support, and community agreement. The technology is only part of it.
                    </p>

                    <h2>What a network can do right now</h2>
                </div>

                <ol className="my-6 space-y-2">
                    {checklist.map((item, i) => (
                        <li key={item.title} className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4">
                            <span className="font-mono text-xs text-green-400 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <p className="text-sm font-semibold text-white">{item.title}</p>
                                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="relative prose-blog">
                    <h2>The bottom line</h2>
                    <p>
                        Quantum computing is not a reason to panic, and it is not a reason to relax. Blockchains are not magically immune, and neither are banks. What matters is preparation and the ability to adapt openly and quickly.
                    </p>
                    <p>
                        At BlocksIndia, we run validator infrastructure across XPR Network, Metal, Telos, Libre, FIO Protocol and TRON, so security planning is part of how we think about the future of these networks, not an afterthought.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-10 p-5 rounded-xl border border-green-500/10 bg-green-500/[0.03] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-sm text-white/60 leading-relaxed">
                        Planning infrastructure for a network or a mainnet launch? <span className="text-white/80">Talk to the team that runs the nodes.</span>
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors duration-200 font-mono flex-shrink-0"
                    >
                        contact-us
                    </Link>
                </div>

                <p className="mt-6 font-mono text-[11px] text-white/25 leading-relaxed">
                    {'// '}This article is educational and reflects the mainstream view of the topic at the time of writing. It is not financial or security advice.
                </p>
            </article>

            <Footer />
        </div>
    );
};

export default PostQuantumSignatures;
