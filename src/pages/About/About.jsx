import React, { useEffect } from 'react';
import Button from '../../components/Button';
import Founder from '../Landing/Founder';
import fazlaRabbiImg from '../../assets/fazla-rabbi.png';
import aminulIslamImg from '../../assets/aminul-islam.png';

// --- Data ---

const coreValues = [
    {
        icon: (
            <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
        ),
        label: "Creative Excellence",
        description: "We treat every project as a canvas. Every pixel, every line of code, every word of copy is crafted with intention. Mediocrity never ships from our door."
    },
    {
        icon: (
            <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        label: "Results-Driven",
        description: "Beautiful design that does not convert is just expensive decoration. We combine aesthetics with strategy so your investment turns into measurable growth."
    },
    {
        icon: (
            <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
        label: "Client-First Mindset",
        description: "Your goals are our goals. We operate as an extension of your team, not just another vendor. Transparent communication and genuine partnership define every engagement."
    },
    {
        icon: (
            <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
            </svg>
        ),
        label: "AI-Powered Innovation",
        description: "We are an AI-first agency. We leverage the latest AI tools and frameworks to move faster, think smarter, and deliver solutions that keep you ahead of the market."
    }
];

const processSteps = [
    {
        step: "01",
        title: "Discovery & Strategy",
        description: "We start by deeply understanding your business, audience, and goals. Before a single wireframe is drawn, we align on strategy so every decision has purpose."
    },
    {
        step: "02",
        title: "Design & Prototyping",
        description: "Our designers craft pixel-perfect interfaces rooted in user psychology. You review, you feel it, you approve. We iterate until it's exactly right."
    },
    {
        step: "03",
        title: "Development & Engineering",
        description: "Clean code, fast performance, scalable architecture. Our engineers build with modern tech stacks that stand the test of time and traffic."
    },
    {
        step: "04",
        title: "Launch & Growth",
        description: "We don't just hand you a website and disappear. We launch, monitor, optimize, and stay by your side as your digital partner for the long run."
    }
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Satisfied Clients" },
    { value: "3+", label: "Years of Excellence" },
    { value: "100%", label: "Client Retention" }
];

const teamMembers = [
    {
        name: "Ikram Hossen",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Fazla Rabbi",
        role: "Software Developer",
        image: fazlaRabbiImg
    },
    {
        name: "Aminul Islam",
        role: "React Developer",
        image: aminulIslamImg
    },
    {
        name: "Nabil Chowdhury",
        role: "SEO & Growth Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    }
];

// --- CTA Sub-component ---

const AboutCTA = () => (
    <section className="section-padding px-4 md:px-6 overflow-hidden relative">
        <div className="max-w-6xl mx-auto glass-card px-6 py-14 sm:p-10 md:p-32 rounded-[40px] md:rounded-[64px] text-center relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-red-600/10 blur-[80px] md:blur-[100px] z-[1] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 md:w-80 h-64 md:h-80 bg-red-600/5 blur-[80px] md:blur-[100px] z-[1] pointer-events-none" />

            <h2 className="display-text font-semibold text-white mb-6 md:mb-10 tracking-tighter leading-tight relative z-10 font-aura-header break-words">
                Ready to build <br className="hidden sm:block" /> something <span className="text-red-500 font-newsreader italic font-normal">remarkable?</span>
            </h2>

            <p className="body-large text-white/40 mb-10 md:mb-14 max-w-2xl mx-auto relative z-10 px-0 sm:px-4">
                Whether you have a clear vision or just a rough idea, we are here to turn it into a digital product that performs, impresses, and grows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 relative z-10">
                <Button className="w-full sm:w-auto !px-10 md:!px-16 !py-4 md:!py-5 md:!text-lg whitespace-nowrap">
                    Schedule a Call
                </Button>
                <a href="/contact" className="text-white/60 font-bold hover:text-white transition-colors group py-2 md:py-0">
                    Talk to Our Team <span className="group-hover:translate-x-1 inline-block transition-transform">{'→'}</span>
                </a>
            </div>
        </div>
    </section>
);

// --- Main Component ---

const About = () => {
    useEffect(() => {
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        setTimeout(() => {
            document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#050505] min-h-screen text-white">

            {/* 1. HERO */}
            <section className="hero-section relative overflow-hidden items-center justify-center flex flex-col bg-grid-white">
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] animate-float pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] animate-float-delayed pointer-events-none" />

                <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">


                    <h1 className="display-text font-bold mb-6 tracking-tighter font-aura-header">
                        We Are <span className="text-red-500 italic font-normal font-newsreader">Webvoss</span>
                    </h1>
                    <p className="body-large text-white/60 max-w-2xl mx-auto leading-relaxed">
                        A dedicated team of designers, developers, and strategists obsessed with building digital products that drive real business results.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
            </section>

            {/* 2. MISSION & STORY */}
            <section className="section-padding px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center animate-on-scroll">
                        <div className="w-full md:w-1/2">
                            <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Our Story</span>
                            <h2 className="font-semibold text-white mb-6 font-aura-header">
                                Built with purpose. <span className="text-red-500 font-newsreader italic font-normal">Driven by results.</span>
                            </h2>
                            <div className="w-16 h-0.5 bg-red-500 mb-8" />
                            <div className="space-y-5 text-white/55 leading-relaxed">
                                <p>
                                    Webvoss was founded on a simple but powerful belief: every business deserves a digital presence that truly represents them, works hard for them, and grows with them.
                                </p>
                                <p>
                                    We are not a one-size-fits-all agency. We do not push cookie-cutter templates or recycle old ideas. We listen, we think, and we build bespoke digital solutions powered by the latest in AI, design thinking, and modern engineering.
                                </p>
                                <p>
                                    From our first project to our fiftieth, the standard has never changed: deliver work we are proud of, work that moves the needle for the people who trust us.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                                    alt="Webvoss team collaboration"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="glass-card rounded-2xl px-5 py-4 border border-white/10">
                                        <p className="text-white font-semibold text-sm">We do not just build websites.</p>
                                        <p className="text-white/50 text-xs mt-1">We build digital growth engines.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-full h-full border border-red-500/20 rounded-2xl z-0 hidden md:block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. STATS BAR */}
            <section className="section-padding px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="glass-card rounded-[40px] border border-white/5 grid grid-cols-2 md:grid-cols-4 animate-on-scroll overflow-hidden">
                        {stats.map((stat, i) => (
                            <div key={i} className="py-10 px-6 md:px-10 text-center group hover:bg-white/[0.02] transition-colors border-b md:border-b-0 border-r border-white/5 last:border-r-0">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-aura-header group-hover:text-red-500 transition-colors duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-white/40 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CORE VALUES */}
            <section className="section-padding px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full -mr-64 -mt-32 pointer-events-none" />

                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16 md:mb-20 animate-on-scroll">
                        <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">What Drives Us</span>
                        <h2 className="font-semibold text-white font-aura-header">
                            Values we <span className="text-red-500 font-newsreader italic font-normal">build by</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {coreValues.map((value, i) => (
                            <div
                                key={i}
                                className="glass-card group p-8 md:p-10 rounded-[32px] border border-white/5 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden animate-on-scroll hover:-translate-y-1"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex gap-6 items-start">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                                            {value.label}
                                        </h3>
                                        <p className="text-white/55 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. OUR PROCESS (Independent Section) */}
            <section className="section-padding px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-6xl animate-on-scroll">



                    {/* Header Area */}
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">4 Simple Steps</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                            <h2 className="display-text !text-[2.5rem] md:!text-[4rem] font-bold text-white relative z-10 font-aura-header leading-[1.1]">
                                Structured Process, <br />
                                <span className="text-red-500 font-newsreader italic font-normal">Measurable</span> Results
                            </h2>
                            <div className="h-[1px] flex-grow bg-white/10 mb-4 hidden md:block"></div>
                        </div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {processSteps.map((item, i) => (
                            <div
                                key={i}
                                className="glass-card p-8 rounded-[32px] border border-white/5 hover:border-red-500/20 transition-all duration-500 group relative overflow-hidden h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="text-white/20 font-bold text-xl mb-6 block font-aura-header group-hover:text-red-500/50 transition-colors">
                                    {item.step}.
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* 6. FOUNDER */}
            <Founder />

            {/* 7. TEAM */}
            <section className="section-padding px-6 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full -mr-48 pointer-events-none" />

                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16 md:mb-20 animate-on-scroll">
                        <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">The Minds Behind Webvoss</span>
                        <h2 className="font-semibold text-white font-aura-header">
                            Meet our <span className="text-red-500 font-newsreader italic font-normal">team</span>
                        </h2>
                        <p className="text-white/40 max-w-xl mx-auto mt-4 leading-relaxed">
                            Small enough to care deeply, skilled enough to compete globally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {teamMembers.map((member, i) => (
                            <div
                                key={i}
                                className="group relative animate-on-scroll"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-2xl relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-base font-bold text-white mb-0.5">{member.name}</h3>
                                        <p className="text-white/50 text-xs font-medium uppercase tracking-widest">{member.role}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CTA */}
            <AboutCTA />
        </div>
    );
};

export default About;
