import React, { useEffect } from 'react';
import Founder from '../Landing/Founder';

const teamMembers = [
    {
        name: "Sarah Chen",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Michael Ross",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Jessica Wong",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "David Kim",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
    }
];

const AboutCTA = () => {
    return (
        <section className="py-20 md:py-24 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto glass-card p-10 md:p-32 rounded-[48px] md:rounded-[64px] text-center relative overflow-hidden animate-on-scroll">

                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] z-[1]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] z-[1]"></div>

                <h2 className="display-text font-semibold text-white mb-10 tracking-tighter leading-tight relative z-10 font-aura-header">
                    Ready to join <br /> our <span className="text-red-500 font-newsreader italic font-normal">journey?</span>
                </h2>

                <p className="body-large text-white/40 mb-14 max-w-2xl mx-auto relative z-10 capitalize">
                    Be part of a team that's redefining the digital landscape.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 relative z-10">
                    <button className="shiny-cta-red w-full sm:w-auto !px-16 !py-5 md:!text-lg">
                        View Openings
                    </button>
                    <a href="#" className="text-white/60 font-bold hover:text-white transition-colors group">
                        Contact Us <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    useEffect(() => {
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

        setTimeout(() => {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#050505] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden items-center justify-center flex flex-col bg-grid-white">
                {/* Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] animate-float pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] animate-float-delayed pointer-events-none" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="display-text font-bold mb-6 tracking-tighter">
                        We Are <span className="text-red-500 italic font-medium font-newsreader">Aura</span>
                    </h1>
                    <p className="body-large text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Redefining digital experiences through innovation, design, and cutting-edge technology.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
            </section>

            {/* Founder/Leadership Section */}
            <Founder />

            {/* Content Section: Mission & Story */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start max-w-6xl mx-auto mb-32 animate-on-scroll">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-aura-header">Crafting the Future of Web</h2>
                        <div className="w-20 h-1 bg-red-500 mb-8"></div>
                        <p className="text-white/60 leading-relaxed mb-6 text-lg">
                            At Aura, we believe that a website is more than just a collection of pages—it's a digital ecosystem that breathes life into your brand. Founded in 2024, our mission has been clear: to eradicate mediocre design.
                        </p>
                        <p className="text-white/60 leading-relaxed text-lg">
                            We combine aesthetic excellence with robust engineering to build platforms that scale. Our philosophy is rooted in the belief that beauty and function are not mutually exclusive; they are the twin pillars of a great user experience.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay"></div>
                        </div>
                        {/* Decorative element behind image */}
                        <div className="absolute -top-6 -right-6 w-full h-full border border-red-500/20 rounded-2xl z-0 hidden md:block"></div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 animate-on-scroll">
                        <span className="text-red-500 text-sm font-bold uppercase tracking-widest mb-3 block">The Minds Behind Aura</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-aura-header">Meet Our Team</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, i) => (
                            <div
                                key={i}
                                className="group relative animate-on-scroll"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {/* Social icons could go here */}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">{member.name}</h3>
                                <p className="text-white/40 text-sm font-medium uppercase tracking-wide">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <AboutCTA />
        </div>
    );
};

export default About;
