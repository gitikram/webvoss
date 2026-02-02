import React from 'react';

const logos = [
    "Aura", "Figma", "Spotify", "Netflix", "Slack", "Adobe", "Disney", "Tesla", "Apple"
];

const LogoMarquee = () => {
    return (
        <section className="py-12 bg-transparent overflow-hidden">
            <div className="marquee-container opacity-20">
                <div className="marquee-content py-4">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                                <div className="w-3 h-3 border border-white/50 rounded-sm"></div>
                            </div>
                            <span className="text-xl font-bold text-white tracking-widest uppercase">{logo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
