import React from 'react';

const projects = [
    {
        title: "Aura AI Dashboard",
        category: "AI SaaS",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000", // Placeholder until generated
        link: "#"
    },
    {
        title: "Nexus NFT Marketplace",
        category: "Web3 / Crypto",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        title: "Voss E-commerce Hub",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        title: "Creative Portfolio 3.0",
        category: "Creative Agency",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        title: "Fintech Mobile App",
        category: "Finance",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        title: "Social Insight Tool",
        category: "Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 relative bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 animate-on-scroll">
                    <div className="max-w-2xl">
                        <h2 className="font-semibold text-white mb-6">Latest Projects</h2>
                        <p className="text-white/40 font-medium leading-relaxed">
                            Discover our latest work where innovation meets execution. We craft digital experiences that redefine industry standards.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <button className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 transition-all duration-300">
                            View All Projects
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div 
                            key={i} 
                            className="group relative rounded-[32px] overflow-hidden bg-white/5 border border-white/5 hover:border-red-500/30 transition-all duration-500 animate-on-scroll"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-red-500 text-sm font-bold uppercase tracking-widest mb-3 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors duration-300 font-bold text-sm">
                                    View Project
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/10">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <button className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 transition-all duration-300 w-full">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
