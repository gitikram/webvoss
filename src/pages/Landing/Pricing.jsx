import React from 'react';

const plans = [
    {
        name: "Starter",
        price: "1,499",
        period: "/ project",
        desc: "Perfect for small businesses and personal brands ready to make an impact online.",
        features: ["Landing Page or Portfolio", "Mobile Responsive Design", "Basic SEO Setup", "3 Revision Rounds", "2 Weeks Delivery"]
    },
    {
        name: "Growth",
        price: "3,999",
        period: "/ project",
        desc: "Ideal for growing businesses that need a full-featured website or web app.",
        features: ["Multi-page Website or Web App", "CMS Integration (WordPress/Webflow)", "AI-Powered SEO", "Performance Optimization", "Dedicated Project Manager", "Priority Support"],
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        desc: "For established brands and companies with complex, large-scale digital needs.",
        features: ["Full Custom Development", "Mobile App (iOS & Android)", "AI Marketing Strategy", "Ongoing Maintenance", "SLA & Dedicated Team", "Unlimited Revisions"]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section-padding relative">
            <div className="container mx-auto px-6 max-w-6xl text-center mb-16 md:mb-24 animate-on-scroll">
                <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">Pricing</span>
                <h2 className="font-semibold text-white mb-4 md:mb-6">Honest, <span className="text-red-500 font-newsreader italic font-normal">transparent</span> pricing</h2>
                <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">No hidden fees. No surprises. Just great work delivered at a price that makes sense for your business.</p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
                {plans.map((p, i) => (
                    <div key={i} className={`relative p-8 md:p-12 rounded-[32px] md:rounded-[48px] border ${p.popular ? 'border-red-500/50 bg-white/[0.03]' : 'border-white/5 bg-white/[0.02]'} backdrop-blur-xl animate-on-scroll`}>
                        {p.popular && (
                            <span className="absolute top-0 right-12 -translate-y-1/2 px-4 py-1.5 bg-red-500 rounded-full text-[10px] font-bold text-white tracking-widest uppercase shadow-xl shadow-red-500/20">Popular</span>
                        )}
                        <h3 className="text-2xl font-semibold text-white mb-2">{p.name}</h3>
                        <p className="text-white/40 text-sm mb-10">{p.desc}</p>

                        <div className="flex items-baseline gap-1 mb-10">
                            {p.price === 'Custom' ? (
                                <h1 className="font-bold text-white tracking-tighter">Custom</h1>
                            ) : (
                                <><h1 className="font-bold text-white tracking-tighter">${p.price}</h1>
                                    <span className="text-white/40 font-bold text-lg">{p.period}</span></>
                            )}
                        </div>

                        <button className={`w-full py-4 rounded-2xl font-bold transition-all mb-10 ${p.popular ? 'bg-white text-black hover:bg-white/90' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'}`}>
                            Select Plan
                        </button>

                        <div className="space-y-4">
                            {p.features.map((f, fi) => (
                                <div key={fi} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white/60 text-sm font-bold">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
