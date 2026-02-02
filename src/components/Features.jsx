import React from 'react';

const services = [
    {
        title: "AI-based Web Design",
        description: "Experience the next generation of web design where artificial intelligence meets artistic intuition to create high-converting, intelligent digital experiences.",
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        )
    },
    {
        title: "Mobile Application Development",
        description: "Develop seamless, cross-platform mobile applications that offer native performance and immersive user interfaces for both iOS and Android platforms.",
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        )
    },
    {
        title: "Full-stack and SAAS Application",
        description: "Scale your business with robust, end-to-end SaaS solutions built with modern tech stacks, ensuring high availability and seamless user management.",
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h17.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125H3.375a1.125 1.125 0 01-1.125-1.125V7.125z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6V4.5A1.5 1.5 0 019.5 3h5A1.5 1.5 0 0116 4.5V6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m4 0h1" />
            </svg>
        )
    },
    {
        title: "Wordpress Membership Website",
        description: "Transform your WordPress site into a powerful membership hub with sophisticated access control, recurring payments, and community features.",
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.998 5.998 0 00-12.03-.224m12 0a5.998 5.998 0 00-12.03-.224m12 0a5.998 5.998 0 00-12.03-.224M12 13c-3.315 0-6 2.685-6 6 0 .34.028.673.082 1M12 13c3.315 0 6 2.685 6 6 0 .34-.028.673-.082 1m-11.836 0A12.067 12.067 0 0112 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0118 18.72m-12 0a5.998 5.998 0 0012.03-.224m-12 0a5.998 5.998 0 0012.03-.224" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        )
    },
    {
        title: "Wordpress Theme And Plugin",
        description: "Bespoke WordPress engineering delivering high-performance themes and complex custom plugins tailored precisely to your unique business logic.",
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        )
    },
    {
        title: "Programatic and AI Powerd SEO",
        description: "Outrank the competition with automated content engines and AI-driven SEO strategies that dynamically adapt to algorithm changes in real-time.",
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        )
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full -ml-64 -mb-64"></div>

            <div className="container mx-auto px-6 text-center mb-16 md:mb-24 animate-on-scroll">
                <h2 className="font-semibold text-white mb-4 md:mb-6">Our Services</h2>
                <p className="text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">Empowering your digital presence with industry-leading technology and creative excellence.</p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="glass-card group p-6 md:p-8 rounded-[32px] border border-white/5 hover:border-red-500/20 transition-all duration-500 relative overflow-hidden animate-on-scroll"
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/[0.03] group-hover:to-transparent transition-all duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-500 shadow-xl shadow-red-500/0 group-hover:shadow-red-500/5">
                                {service.icon}
                            </div>

                            <h3 className="font-semibold text-white mb-4 tracking-tight group-hover:text-red-500 transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors duration-300">
                                {service.description}
                            </p>

                            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-white/20 group-hover:text-red-500 transition-all duration-500 text-sm font-bold uppercase tracking-widest overflow-hidden">
                                <span className="transform translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-500">Explore Solution</span>
                                <svg className="w-4 h-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>

                        {/* Animated Border Reveal Effect */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-red-500 to-transparent group-hover:w-full transition-all duration-700"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
