import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-16 md:py-24 border-t border-white/5 relative bg-background overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-16 mb-16 md:mb-24 animate-on-scroll">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="text-xl font-bold text-white tracking-tighter">webvoss</span>
                        </div>
                        <p className="text-white/30 text-base max-w-xs font-medium leading-relaxed mb-8">
                            The next generation of website building powered by creative webvoss excellence.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.03] hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer">
                                    <div className="w-3 h-3 border border-white/20 rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 tracking-tight">Product</h4>
                        <ul className="space-y-4 text-white/30 text-sm font-bold">
                            <li><Link to="/#features" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Changelog</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 tracking-tight">Company</h4>
                        <ul className="space-y-4 text-white/30 text-sm font-bold">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 tracking-tight">Legal</h4>
                        <ul className="space-y-4 text-white/30 text-sm font-bold">
                            <li><Link to="#" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col items-center">
                    <div className="text-[22vw] font-bold leading-none select-none tracking-tighter text-footer-outline lowercase">
                        webvoss
                    </div>
                    <p className="text-white/10 text-xs font-bold uppercase tracking-[0.5em] mt-8">
                        © 2026 webvoss Design Labs. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[100%] h-[50%] bg-red-600/5 blur-[120px] rounded-full"></div>
        </footer>
    );
};

export default Footer;
