import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { usePageTitle } from '../../components/CustomHook';
import { posts } from '../../data/posts';

const post = posts.find((p) => p.slug === 'open-hardware-antelope-signer');

const REPO_URL = 'https://github.com/BlockIndia-LLC/ethereum-app/tree/antelope-signer/dabao-app-eth-burner';

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

const ExternalLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-300 underline decoration-green-400/30 underline-offset-2 transition-colors duration-200"
    >
        {children}
    </a>
);

/* ── Animation: touch to sign ────────────────────── */

const touchSteps = [
    { status: 'IDLE',     statusCls: 'text-white/40',    note: 'The board is plugged in. The key is inside the chip and stays there.', ms: 2200 },
    { status: 'ASKED',    statusCls: 'text-orange-400',  note: 'The computer sends a transaction over USB and asks for a signature.',  ms: 2200 },
    { status: 'WAITING',  statusCls: 'text-orange-400',  note: 'Nothing is signed. The board waits up to 15 seconds for a finger.',     ms: 2600 },
    { status: 'TOUCHED',  statusCls: 'text-green-400',   note: 'A fingertip lands on the bare pad. The chip senses it.',                 ms: 1800 },
    { status: 'SIGNED',   statusCls: 'text-green-400',   note: 'The chip signs and returns only the signature.',                         ms: 3200 },
];

const BoardDrawing = ({ step }) => {
    const touched = step >= 3;
    const waiting = step === 2;
    const pads = [0, 1, 2, 3, 4, 5, 6];
    const padX = (i) => 46 + i * 38;
    return (
        <svg viewBox="0 0 320 210" className="w-full max-w-sm" role="img" aria-label="A small circuit board with a row of pads. A finger touches one pad.">
            {/* finger */}
            <g style={{ transform: `translateY(${touched ? 0 : -34}px)`, opacity: step >= 2 ? 1 : 0, transition: 'transform 0.5s ease, opacity 0.4s ease' }}>
                <path d="M184 6 a14 14 0 0 1 28 0 v52 a14 14 0 0 1 -28 0 z" fill="#F2C9A5" stroke="#C99A72" strokeWidth="2" />
                <path d="M190 52 a8 7 0 0 0 16 0" fill="none" stroke="#C99A72" strokeWidth="1.5" />
            </g>
            {/* board */}
            <rect x="24" y="64" width="272" height="132" rx="10" fill="#14532d" stroke="#052e16" strokeWidth="2" />
            {pads.map((i) => (
                <g key={`t${i}`}>
                    <rect x={padX(i) - 9} y="70" width="18" height="24" rx="3" fill="#E8B84A" />
                    <circle cx={padX(i)} cy="82" r="4.5" fill="#052e16" />
                </g>
            ))}
            {pads.map((i) => (
                <g key={`b${i}`}>
                    <rect x={padX(i) - 9} y="166" width="18" height="24" rx="3" fill="#E8B84A" />
                    <circle cx={padX(i)} cy="178" r="4.5" fill="#052e16" />
                </g>
            ))}
            {/* chip */}
            <g transform="translate(110 130) rotate(45)">
                <rect x="-26" y="-26" width="52" height="52" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
            </g>
            <text x="110" y="133" fontSize="9" fill="#94a3b8" textAnchor="middle" fontWeight="600">Baochip-1x</text>
            {/* signature light */}
            <circle cx="244" cy="130" r="12" fill={step === 4 ? '#4ade80' : '#1f2937'} style={{ transition: 'fill 0.3s ease' }} />
            {step === 4 && <path d="M238 130 l4 5 l8 -10" fill="none" stroke="#052e16" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
            {/* rings on the touch pad */}
            <circle cx={padX(4)} cy="82" r="17" fill="none" stroke={touched ? '#4ade80' : '#fb923c'} strokeWidth="2.5" opacity={waiting || touched ? 1 : 0} style={{ transition: 'opacity 0.3s ease' }} />
            <circle cx={padX(4)} cy="82" r="27" fill="none" stroke="#4ade80" strokeWidth="1.5" opacity={touched ? 0.5 : 0} style={{ transition: 'opacity 0.3s ease' }} />
        </svg>
    );
};

const TouchToSign = () => {
    const reduced = usePrefersReducedMotion();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (reduced) {
            setStep(4);
            return undefined;
        }
        const id = setTimeout(() => setStep((s) => (s + 1) % touchSteps.length), touchSteps[step].ms);
        return () => clearTimeout(id);
    }, [step, reduced]);

    const current = touchSteps[step];

    return (
        <div className="flex flex-col items-center">
            <BoardDrawing step={step} />
            <p className={`mt-3 font-mono text-xs font-semibold uppercase tracking-widest ${current.statusCls} transition-colors duration-300`}>
                {current.status}
            </p>
            <div className="mt-3 flex items-center gap-2">
                {touchSteps.map((s, i) => (
                    <span key={s.status} className={`h-1 w-8 rounded-full transition-colors duration-300 ${i <= step ? 'bg-green-400' : 'bg-white/10'}`} />
                ))}
            </div>
            <p className="mt-3 font-mono text-xs text-white/50 text-center min-h-[2.5rem] max-w-md">{current.note}</p>
        </div>
    );
};

/* ── Static content ──────────────────────────────── */

const layers = [
    { layer: 'Application',      typical: 'Often open',  ours: 'Open: our signer, in Rust' },
    { layer: 'Operating system', typical: 'Closed',      ours: 'Open: Xous, in Rust' },
    { layer: 'Bootloader',       typical: 'Closed',      ours: 'Open, and can be rebuilt and compared' },
    { layer: 'Chip design',      typical: 'Closed',      ours: 'Published. Some third-party blocks are closed, and documented as closed' },
    { layer: 'The silicon',      typical: 'Sealed',      ours: 'Package lets you image it and compare with the design' },
];

const transactions = [
    {
        network: 'XPR Network testnet',
        what: 'Faucet claim (token.faucet::claim)',
        id: '539be56ffd84b01fb18c10be2fb80001345195efefec5379f67d36371bd8b317',
        url: 'https://testnet.explorer.xprnetwork.org/transaction/539be56ffd84b01fb18c10be2fb80001345195efefec5379f67d36371bd8b317',
    },
    {
        network: 'XPR Network testnet',
        what: 'Transfer of 0.0001 XPR',
        id: 'd6925271b3d27381f0bf8efb93fb4a1825e0313f96eab5c7c05d641bdb4d7755',
        url: 'https://testnet.explorer.xprnetwork.org/transaction/d6925271b3d27381f0bf8efb93fb4a1825e0313f96eab5c7c05d641bdb4d7755',
    },
    {
        network: 'Telos testnet',
        what: 'Transfer of 0.0001 TLOS',
        id: '82eff55b516ecfe5c831857b07e4b496b0ad945ea29f282f0f58c6372fbf60b2',
        url: 'https://explorer-test.telos.net/transaction/82eff55b516ecfe5c831857b07e4b496b0ad945ea29f282f0f58c6372fbf60b2',
    },
];

const antelopeDetails = [
    { title: 'Its own key path',      desc: "Antelope keys live under m/44'/194', the path the Ledger EOS app uses. The board refuses an Antelope request on any other path, so it can never touch the Ethereum key." },
    { title: 'The digest a node checks', desc: 'The chip hashes the chain id, the transaction and 32 zero bytes with SHA-256, and signs that. The chain id is part of the hash, so a signature made for XPR Network is not valid on Telos.' },
    { title: 'Canonical signatures',  desc: 'Antelope nodes accept only "canonical" signatures, and about half of all signatures are not. The signer retries with a counter mixed into the nonce until it has one.' },
    { title: 'Checked against Wharfkit', desc: 'The key, its derivation and every signature are compared with Wharfkit, the standard Antelope library, in an emulator test anyone can run.' },
];

const limits = [
    { title: 'It cannot show what it signs', desc: 'The board has no screen. The touch says "sign", not "sign this". A compromised computer could ask it to sign something else. This is why it is for test networks only today.' },
    { title: 'One seed, no backup',          desc: 'The seed is made inside the chip and never shown. If the board is lost, its keys are gone. That suits a test signer and not a savings account.' },
    { title: 'Not the whole chip is open',   desc: 'Some third-party blocks inside the Baochip-1x are closed. They are documented as closed, which is the honest way to do it.' },
];

/* ════════════════════════════════════════════════ */
const OpenHardwareAntelopeSigner = () => {
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
                        <span className="section-label">$ blog --read antelope-signer</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mt-1">
                        We signed XPR Network and Telos transactions on a <span className="gradient-text">chip you can inspect</span>
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-white/50 leading-relaxed">
                        An open-source Antelope signer on open hardware. One touch on a bare pad, and no black box underneath.
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
                        We verify our software. We still take our chips on faith.
                    </p>
                    <p>
                        Every hardware wallet rests on a chip that nobody outside the manufacturer can inspect. The wallet's code can be open source and audited line by line, and it still runs on a black box. If the silicon has a flaw or a backdoor, no amount of software review will find it.
                    </p>
                    <p>
                        Open hardware changes the question from <strong>"do you trust the vendor?"</strong> to <strong>"can you check?"</strong> We wanted to see how far that idea goes for the networks we work on every day, so we built a transaction signer for Antelope chains on an open chip, and used it on the XPR Network and Telos test networks.
                    </p>

                    <h2>The chip: Baochip-1x, on a board called Dabao</h2>
                    <p>
                        The Baochip-1x is a RISC-V microcontroller built so that each layer can be checked. Dabao is a small development board that carries it. Here is how it compares with the secure chip in a typical hardware wallet.
                    </p>
                </div>

                <div className="my-8 rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                    <div className="hidden md:grid grid-cols-[1fr_1fr_1.8fr] gap-4 px-5 py-3 border-b border-white/[0.07] font-mono text-[10px] uppercase tracking-widest">
                        <span className="text-white/25">{'// layer'}</span>
                        <span className="text-orange-400/80">Typical secure chip</span>
                        <span className="text-green-400/80">Baochip-1x with Xous</span>
                    </div>
                    {layers.map((row, i) => (
                        <div key={row.layer} className={`grid grid-cols-1 md:grid-cols-[1fr_1fr_1.8fr] gap-1 md:gap-4 px-5 py-4 ${i > 0 ? 'border-t border-white/[0.05]' : ''}`}>
                            <span className="text-sm font-semibold text-white">{row.layer}</span>
                            <span className="text-sm text-white/50">
                                <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-orange-400/70 mr-2">Typical</span>
                                {row.typical}
                            </span>
                            <span className="text-sm text-white/50">
                                <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-green-400/70 mr-2">Baochip</span>
                                {row.ours}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="relative prose-blog">
                    <p>
                        The left column is a generalisation: some commercial chips publish more than that. The point is the direction. On this chip, checking is possible at each layer.
                    </p>

                    <h2>What we built on it</h2>
                    <p>
                        A signer that does one job. A computer sends it a transaction over USB, and it returns a signature. Three rules make it worth trusting more than a key in a file:
                    </p>
                    <ul>
                        <li><strong>The key is born on the chip.</strong> It is made by the chip's own hardware random number generator, and it never leaves.</li>
                        <li><strong>Nothing is signed without a touch.</strong> A fingertip has to land on a bare metal pad on the board. No button or extra part is added: one of the chip's small I/O processors measures the touch.</li>
                        <li><strong>No touch in 15 seconds, no signature.</strong> The request is refused.</li>
                    </ul>
                </div>

                <Figure label="touch to sign" caption="Illustration, not to scale. A finger already resting on the pad approves nothing: it has to leave and come back.">
                    <TouchToSign />
                </Figure>

                <div className="relative prose-blog">
                    <p>
                        Inside, the signer is split into two programs. One talks to the computer. The other holds the key and watches the pad. They run in separate memory, enforced by the chip, so a bug in the part that faces the computer cannot read the key or skip the touch.
                    </p>

                    <h2>Proof: transactions on two test networks</h2>
                    <p>
                        This is running on a real board. Each of these was approved by a touch, signed inside the chip, and executed by the network. The account on both networks is <strong>dabaosigner1</strong>, and its only key is the one in the chip.
                    </p>
                </div>

                <div className="my-8 space-y-3">
                    {transactions.map((tx) => (
                        <a
                            key={tx.id}
                            href={tx.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-green-500/30 hover:bg-green-500/[0.03] transition-all duration-300 px-5 py-4"
                        >
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                <span className="text-sm font-bold text-white">{tx.network}</span>
                                <span className="px-2.5 py-0.5 rounded-full border border-green-400/30 bg-green-400/15 font-mono text-[10px] font-semibold uppercase tracking-wider text-green-300">
                                    Executed
                                </span>
                                <span className="ml-auto font-mono text-xs text-green-400/80 group-hover:text-green-400 transition-colors duration-200">
                                    explorer →
                                </span>
                            </div>
                            <p className="mt-1 text-sm text-white/50">{tx.what}</p>
                            <p className="mt-2 font-mono text-[11px] text-white/35 break-all">{tx.id}</p>
                        </a>
                    ))}
                </div>

                <div className="relative prose-blog">
                    <p>
                        Without a touch, the board refuses. On Telos it refused the same request fourteen times in a row, and signed it only when a finger landed on the pad. That is the behaviour we wanted to see.
                    </p>

                    <h2>What it takes to sign for Antelope</h2>
                    <p>
                        The board already signed Ethereum transactions. Antelope chains use the same elliptic curve, but almost everything around it is different. These are the parts we had to get right.
                    </p>
                </div>

                <ol className="my-6 space-y-2">
                    {antelopeDetails.map((item, i) => (
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
                    <p>
                        The chip stores one secret, a seed, and works out each key from it when needed. So the same board, with the same touch, signs for Ethereum, XPR Network and Telos, each with its own key. Nothing differs on the board between Antelope chains except the chain id the computer sends.
                    </p>

                    <h2>What it does not do yet</h2>
                    <p>
                        We would rather say this plainly than have someone find out the hard way.
                    </p>
                </div>

                <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {limits.map((card) => (
                        <div key={card.title} className="rounded-xl border border-orange-500/25 bg-white/[0.02] p-5">
                            <h3 className="text-base font-bold text-white">{card.title}</h3>
                            <p className="mt-2 text-sm text-white/60 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="relative prose-blog">
                    <p>
                        The next step is a display owned by the program that holds the key, so the board can show the account, the action and the amount before the touch. Only then does a signer like this belong anywhere near a main network.
                    </p>

                    <h2>Try it yourself</h2>
                    <p>
                        The code is open, and you do not need a board. The signer runs in an emulator, where a file stands in for the touch, and one script checks it against Wharfkit.
                    </p>
                </div>

                <Figure label="emulator test" caption="Needs Linux, Rust and Node. The README has the full setup, including how to build the image for a real board.">
                    <pre className="font-mono text-xs md:text-[13px] text-white/70 leading-relaxed overflow-x-auto whitespace-pre">
{`$ git clone --branch antelope-signer \\
    https://github.com/BlockIndia-LLC/ethereum-app.git
$ cd ethereum-app/dabao-app-eth-burner
$ ./build.sh emu
$ tools/antelope/test_emulator.sh
`}<span className="text-green-400">{`ok: the key is the one BIP-39/BIP-32 give for the seed file
ok: paths outside m/44'/194' are refused
ok: transfer 0 SIG_K1_K8h3z8ddtLfS33bttZC3dXuFBv67jvgm…
…
ok: a wrong expected key is refused at once
ok: no approval, no signature
selftest passed`}</span>
                    </pre>
                </Figure>

                <div className="relative prose-blog">
                    <p>
                        The source, the protocol description and the test instructions are in the <ExternalLink href={REPO_URL}>antelope-signer branch on GitHub</ExternalLink>. If you only have a minute, open the three explorer links above: they are the whole claim.
                    </p>

                    <h2>The bottom line</h2>
                    <p>
                        A signature is only as trustworthy as the silicon that makes it. That silicon can now be something you inspect, and the networks we validate on can use it.
                    </p>
                    <p>
                        At BlocksIndia, we run validator infrastructure across XPR Network, Metal, Telos, Libre, FIO Protocol and TRON. If you build on an Antelope chain, we would like to know one thing: what would a signer like this have to show you before you would trust it with mainnet?
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-10 p-5 rounded-xl border border-green-500/10 bg-green-500/[0.03] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-sm text-white/60 leading-relaxed">
                        Want to test it, review it, or build on it? <span className="text-white/80">Read the code, then tell us what you think.</span>
                    </p>
                    <div className="flex flex-wrap gap-3 flex-shrink-0">
                        <a
                            href={REPO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors duration-200 font-mono"
                        >
                            view-source
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white/80 border border-white/15 hover:border-green-400/40 hover:text-green-400 rounded-lg transition-colors duration-200 font-mono"
                        >
                            contact-us
                        </Link>
                    </div>
                </div>

                <p className="mt-6 font-mono text-[11px] text-white/25 leading-relaxed">
                    {'// '}Test networks only. This signer cannot show what it signs, and it is not a product. The board drawing is an illustration. Nothing here is financial or security advice.
                </p>
            </article>

            <Footer />
        </div>
    );
};

export default OpenHardwareAntelopeSigner;
