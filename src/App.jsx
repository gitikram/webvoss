import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Founder from './components/Founder';
import Projects from './components/Projects';

function App() {
    useEffect(() => {
        // Scroll Animation Logic
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-montserrat selection:bg-red-500/30">
            <Navbar />
            <main>
                <Hero />
                <LogoMarquee />
                <Founder />
                <Features />
                <Projects />
                <Testimonials />
                <Pricing />
                <CTA />
            </main>
            <Footer />

            {/* Search Bar / Command Palette Overlay (Visual only) */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 group hidden md:block">
                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-2xl text-white/40 text-sm hover:border-white/10 hover:text-white/60 transition-all cursor-pointer">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="flex items-center gap-2 font-bold tracking-tight">
                        Search anything...
                        <kbd className="px-1.5 py-0.5 rounded border border-white/5 bg-white/5 font-sans text-xs">⌘ K</kbd>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default App;
