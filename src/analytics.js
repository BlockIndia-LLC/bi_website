// Vercel Web Analytics (cookieless page-view tracking).
// Loads the same script the @vercel/analytics package injects, without the
// dependency (that package requires React 18+, this project is on React 17).
// The script records a page view on load and on every client-side route change.
// Only runs in production builds; Web Analytics must be enabled for the project
// in the Vercel dashboard for data to be collected.
export function initAnalytics() {
    if (process.env.NODE_ENV !== 'production') return;
    if (typeof window === 'undefined' || window.__vaLoaded) return;
    window.__vaLoaded = true;

    window.va =
        window.va ||
        function () {
            (window.vaq = window.vaq || []).push(arguments);
        };

    const script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/insights/script.js';
    document.head.appendChild(script);
}
