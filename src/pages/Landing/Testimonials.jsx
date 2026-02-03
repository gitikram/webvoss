import React from 'react';

const Testimonials = () => {
    return (
        <section id="developers" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-6 text-center mb-16 md:mb-24 animate-on-scroll">
                <h2 className="font-bold text-white mb-4 md:mb-6">Loved by <span className="font-newsreader italic font-normal text-red-500">passionate</span> builders</h2>
                <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">Choose the plan that fits your growth and creative excellence.</p>
            </div>

            <div className="container mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {[
                    { text: "Aura has transformed how we monitor our deployments. The visibility is simply unparalleled.", name: "Alex Rivera", role: "CTO at Nexus" },
                    { text: "The most intuitive platform I've used in years. It just works.", name: "Sarah Chen", role: "Lead Engineer" },
                    { text: "Finally a tool that understands the developer workflow.", name: "Jordan Lee", role: "Senior Developer" },
                    { text: "Beautiful design and even better functionality. A must-have for modern teams.", name: "Elena Rossi", role: "Design Lead" },
                    { text: "The support team is incredible. They really care about your success.", name: "Mark Wilson", role: "Founder" },
                    { text: "Shipping faster than ever thanks to Aura.", name: "David Kim", role: "Product Manager" }
                ].map((t, i) => (
                    <div key={i} className="break-inside-avoid glass-card p-8 rounded-[32px] animate-on-scroll">
                        <p className="text-white/80 mb-8 leading-relaxed capitalize">"{t.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/10 border border-white/10 flex items-center justify-center text-white text-xs font-bold">
                                {t.name[0]}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
