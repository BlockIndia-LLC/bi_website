// Blog post index. Add a new entry here, create its page under src/pages/blog/,
// and register the route in src/App.js.
export const posts = [
    {
        slug: 'open-hardware-antelope-signer',
        title: 'We Signed XPR Network and Telos Transactions on a Chip You Can Inspect',
        excerpt:
            'An open-source Antelope signer on open hardware: the key is made inside a Baochip-1x, and nothing is signed until a finger touches the board. With the testnet transactions to prove it.',
        date: 'November 18, 2026',
        isoDate: '2026-11-18',
        readTime: '7 min read',
        tags: ['Open Hardware', 'Antelope', 'XPR Network', 'Telos'],
    },
    {
        slug: 'post-quantum-blockchain-signatures',
        title: 'Your Digital Signature May Have an Expiry Date',
        excerpt:
            'What quantum computers could mean for blockchains, what is actually at risk, and what networks can do about it. Explained without the physics.',
        date: 'November 17, 2026',
        isoDate: '2026-11-17',
        readTime: '6 min read',
        tags: ['Post-Quantum', 'Security', 'Explainer'],
    },
];
