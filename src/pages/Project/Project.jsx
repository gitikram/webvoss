import React, { useState, useEffect } from 'react';

const categories = [
    "All",
    "AI Website",
    "Mobile App",
    "Dashboard",
    "Wordpress Membership",
    "SAAS Application",
    "Products",
    "Wordpress Website"
];

const projectsData = [
    {
        id: 1,
        title: "Aura AI Generator",
        category: "AI Website",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "FinTrack Mobile",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Analytix Dash",
        category: "Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "MemberPress Elite",
        category: "Wordpress Membership",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "TaskFlow SAAS",
        category: "SAAS Application",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Neon Headphones",
        category: "Products",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Zenith Portfolio",
        category: "Wordpress Website",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
    }
];


const ProjectCTA = () => {
    return (
        <section className="py-20 md:py-24 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto glass-card p-10 md:p-32 rounded-[48px] md:rounded-[64px] text-center relative overflow-hidden animate-on-scroll">

                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] z-[1]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] z-[1]"></div>

                <h2 className="display-text font-semibold text-white mb-10 tracking-tighter leading-tight relative z-10 font-aura-header">
                    Ready to launch <br /> your <span className="text-red-500 font-newsreader italic font-normal">vision?</span>
                </h2>

                <p className="body-large text-white/40 mb-14 max-w-2xl mx-auto relative z-10 capitalize">
                    Join the list of manufacturers and designers shipping with Aura today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 relative z-10">
                    <button className="shiny-cta-red w-full sm:w-auto !px-16 !py-5 md:!text-lg">
                        Get Started Now
                    </button>
                    <a href="#" className="text-white/60 font-bold hover:text-white transition-colors group">
                        Talk to an expert <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

const Project = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

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
    }, [filteredProjects]);

    return (
        <div className="bg-[#050505] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden items-center justify-center flex flex-col bg-grid-white">
                {/* Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] animate-float pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] animate-float-delayed pointer-events-none" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="display-text font-bold mb-6 tracking-tighter">
                        Our <span className="text-red-500 italic font-medium font-newsreader">Masterpieces</span>
                    </h1>
                    <p className="body-large text-white/60 max-w-2xl mx-auto leading-relaxed">
                        A curated selection of our finest work, ranging from AI systems to immersive web experiences.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
            </section>

            {/* Showcase Section */}
            <section className="py-20 px-6 container mx-auto">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 px-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${activeCategory === cat
                                ? "bg-red-600/10 border-red-600/50 text-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)] scale-105"
                                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, i) => (
                        <div
                            key={project.id}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/5 hover:border-red-500/30 transition-all duration-500 animate-on-scroll"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <div className="w-full h-[1px] bg-gradient-to-r from-red-500/50 to-transparent mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                <div className="flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                    View Details <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-white/40">
                        <p className="text-lg">No projects found in this category.</p>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <ProjectCTA />
        </div>
    );
};

export default Project;
