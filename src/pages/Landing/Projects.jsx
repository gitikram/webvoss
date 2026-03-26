import React from 'react';
import Button from '../../components/Button';

const projects = [
    {
        title: "Best AI Lead Gen",
        category: "AI SaaS",
        description: "A cutting-edge AI-powered lead generation platform that helps businesses identify, qualify, and convert high-value prospects automatically. Built with advanced machine learning pipelines and a sleek, intuitive dashboard.",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
        link: "#"
    },
    {
        title: "Creative Agency Inc",
        category: "Creative Agency",
        description: "A bold, immersive portfolio website for a top-tier creative agency. Featuring dynamic scroll animations, cinematic transitions, and a design language that speaks premium from the first pixel.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
        link: "#"
    },
    {
        title: "Nexus NFT Marketplace",
        category: "Web3 / Crypto",
        description: "A next-generation NFT marketplace with seamless wallet integration, real-time bidding, and a beautifully crafted gallery experience designed to showcase digital art at its finest.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding relative bg-[#050505]">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 animate-on-scroll">
                    <div className="max-w-2xl">
                        <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Our Work</span>
                        <h2 className="font-semibold text-white font-aura-header">
                            Latest <span className="text-red-500 font-newsreader italic font-normal">Projects</span>
                        </h2>
                        <p className="text-white/40 leading-relaxed mt-4">
                            Discover our latest work where innovation meets execution. We craft digital experiences that redefine industry standards.
                        </p>
                    </div>
                    <div className="hidden md:block shrink-0">
                        <Button to="/projects">
                            View All Projects
                        </Button>
                    </div>
                </div>

                {/* Projects Showcase */}
                <div className="flex flex-col gap-20 md:gap-28">
                    {projects.map((project, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <div
                                key={i}
                                className="animate-on-scroll"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}>
                                    {/* Text Content */}
                                    <div className="w-full md:w-1/2">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 font-aura-header tracking-tight leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-red-500/60 mb-6"></div>
                                        <p className="text-white/45 leading-relaxed mb-8 text-base md:text-lg">
                                            {project.description}
                                        </p>
                                        <Button to={project.link}>
                                            View Project
                                            <svg className="w-4 h-4 inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Button>
                                    </div>

                                    {/* Screenshot Image */}
                                    <div className="w-full md:w-1/2">
                                        <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/20 transition-all duration-500">
                                            <div className="aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Floating corner accent */}
                                            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 translate-y-2 group-hover:translate-y-0">
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Separator line between projects */}
                                {i < projects.length - 1 && (
                                    <div className="mt-20 md:mt-28 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-16 md:hidden text-center flex justify-center">
                    <Button to="/projects" className="w-full sm:w-auto">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
