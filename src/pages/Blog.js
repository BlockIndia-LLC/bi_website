import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { usePageTitle } from '../components/CustomHook';
import { posts } from '../data/posts';

const Blog = () => {
    usePageTitle('BlocksIndia | Blog');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-surface-950">
            <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <NavBar />

            <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 max-w-4xl mx-auto px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

                <div className="relative mb-10">
                    <span className="section-label">$ blocksindia --blog</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
                        Notes from the <span className="gradient-text">validator desk</span>
                    </h1>
                    <p className="mt-4 text-sm text-white/40 font-mono leading-relaxed max-w-2xl">
                        {'>'} Plain-language explainers on blockchain infrastructure, security, and the networks we help run.
                    </p>
                </div>

                <div className="relative space-y-4">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group block rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-orange-500/25 hover:bg-orange-500/[0.03] transition-all duration-300 p-6"
                        >
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-white/30 mb-3">
                                <time dateTime={post.isoDate}>{post.date}</time>
                                <span className="text-white/15">/</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-orange-300 transition-colors duration-200">
                                {post.title}
                            </h2>
                            <p className="mt-2 text-sm text-white/50 leading-relaxed">{post.excerpt}</p>
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full border border-white/[0.07] bg-white/[0.02] font-mono text-[10px] text-white/35 uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                                <span className="ml-auto font-mono text-xs text-green-400/80 group-hover:text-green-400 transition-colors duration-200">
                                    read →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
