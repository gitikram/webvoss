import React from 'react';
import founderImg from '../../assets/founder.png';

const Founder = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="relative group animate-on-scroll order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/5 bg-white/5 aspect-square">
                            <img
                                src={founderImg}
                                alt="Founder of Webvoss"
                                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text */}
                    <div className="animate-on-scroll order-1 lg:order-2">
                        <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">Leadership</span>
                        <h2 className="font-semibold text-white mb-6 md:mb-8 font-aura-header">
                            Meet the founder and <span className="text-red-500 font-newsreader italic font-normal">CEO</span> of Webvoss
                        </h2>

                        <div className="space-y-6 text-white/50 leading-relaxed mb-10">
                            <p>
                                Driven by a passion for creative excellence and technological innovation, our founder envisioned Webvoss as a bridge between complex code and intuitive design.
                            </p>
                            <p className="hidden md:block">
                                With years of experience in the industry, he leads our team with a clear mission: to empower builders and creators with the most sophisticated yet accessible AI-powered tools in the market.
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-lg md:text-xl">Ikram Hossen</span>
                                <span className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.2em]">Founder & CEO</span>
                            </div>
                            <div className="h-12 w-[1px] bg-white/10"></div>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
