import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

const ctaVideoUrl = 'https://res.cloudinary.com/dm1zvc99k/video/upload/v1774519109/red-abstrac-spining_2_t5hf2s.mp4';

const categories = [
    "All",
    "AI Website",
    "Mobile App",
    "Dashboard",
    "Wordpress Membership",
    "SAAS Application",
    "Products",
    "Wordpress Website",
    "Upcoming"
];

const projectsData = [
    {
        id: 1,
        title: "AI Lead Generation Agency",
        category: ["AI Website", "SAAS Application"],
        image: "https://res.cloudinary.com/dm1zvc99k/image/upload/v1774863593/Lead_agency_bm2swt.png",
        link: "https://gitikram.github.io/ai-leads-gen-agency/"
    },
    {
        id: 2,
        title: "AI Agentic Workflow Agency",
        category: ["AI Website", "SAAS Application"],
        image: "https://res.cloudinary.com/dm1zvc99k/image/upload/v1774863559/AI_workflow_u15nye.png",
        link: "https://gitikram.github.io/ai-agentic-workflow-agency/"
    },
    {
        id: 3,
        title: "Modern Racing Car Website",
        category: ["AI Website", "SAAS Application"],
        image: "https://res.cloudinary.com/dm1zvc99k/image/upload/v1774863589/Racing_car_x5wzvm.png",
        link: "https://gitikram.github.io/modern-racing-car/"
    },
    {
        id: 4,
        title: "Coming Soon",
        category: "Upcoming",
        image: null,
        link: "#"
    },
    {
        id: 5,
        title: "Coming Soon",
        category: "Upcoming",
        image: null,
        link: "#"
    },
    {
        id: 6,
        title: "Coming Soon",
        category: "Upcoming",
        image: null,
        link: "#"
    },
    {
        id: 7,
        title: "Coming Soon",
        category: "Upcoming",
        image: null,
        link: "#"
    },
    {
        id: 8,
        title: "Coming Soon",
        category: "Upcoming",
        image: null,
        link: "#"
    },
    {
        id: 9,
        title: "Coming Soon",
        category: "Upcoming",
        image: null,
        link: "#"
    }
];


const ProjectCTA = () => {
    return (
        <section className="section-padding px-6 overflow-hidden relative">
            <div className="max-w-6xl mx-auto glass-card p-10 md:p-32 rounded-[48px] md:rounded-[64px] text-center relative overflow-hidden animate-on-scroll">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                    >
                        <source src={ctaVideoUrl} type="video/mp4" />
                    </video>
                </div>

                <h2 className="display-text font-semibold text-white mb-10 tracking-tighter leading-tight relative z-10 font-aura-header">
                    Have a project <br /> in <span className="text-red-500 font-newsreader italic font-normal">mind?</span>
                </h2>

                <p className="body-large text-white/40 mb-14 max-w-2xl mx-auto relative z-10 capitalize">
                    Join the list of manufacturers and designers shipping with Aura today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 relative z-10">
                    <Button href="https://calendar.app.google/ZpsRA6kSoBHSGfh59" className="w-full sm:w-auto !px-16 !py-5 md:!text-lg inline-flex items-center justify-center">
                        Schedule a Call
                    </Button>
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
        : projectsData.filter(project => {
            if (Array.isArray(project.category)) {
                return project.category.includes(activeCategory);
            }
            return project.category === activeCategory;
        });

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
            <section className="hero-section relative overflow-hidden items-center justify-center flex flex-col bg-grid-white">
                {/* Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] animate-float pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] animate-float-delayed pointer-events-none" />

                <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
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
            <section className="section-padding px-6 container mx-auto max-w-6xl">
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
                        <a
                            href={project.link || "#"}
                            target={project.link && project.link !== "#" ? "_blank" : "_self"}
                            rel={project.link && project.link !== "#" ? "noopener noreferrer" : ""}
                            key={project.id}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/5 hover:border-red-500/30 transition-all duration-500 animate-on-scroll block cursor-pointer"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                {project.image ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                    </>
                                ) : (
                                    <div className="w-full h-full bg-red-600 flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl uppercase tracking-tighter">Coming Soon</span>
                                    </div>
                                )}
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                    {project.link && project.link !== "#" ? "View Live Project" : "Coming Soon"} <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </a>
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
