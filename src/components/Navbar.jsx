import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
            <div className={`flex flex-col w-full max-w-7xl transition-all duration-500 rounded-[32px] md:rounded-full border border-white/5 bg-black/40 backdrop-blur-2xl overflow-hidden ${isOpen ? 'max-h-[500px] px-6 py-6' : 'max-h-[80px] px-6 md:px-8 py-3'}`}>
                <div className="flex items-center justify-between w-full h-[32px] md:h-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white tracking-tighter">webvoss</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/50">
                        <a href="#features" className="hover:text-white transition-colors">Services</a>
                        <a href="#developers" className="hover:text-white transition-colors">Developers</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <button className="hidden md:block text-sm font-medium text-white/50 hover:text-white transition-colors">Log in</button>
                        <button className="px-5 md:px-6 py-2 text-xs md:text-sm font-bold bg-white text-black rounded-full hover:bg-white/90 transition-all">
                            Book a Demo
                        </button>

                        {/* Hamburger */}
                        <button
                            className="flex md:hidden flex-col gap-1.5 p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Links */}
                <div className={`flex flex-col gap-6 pt-10 pb-4 md:hidden text-lg font-medium text-white/50 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors border-b border-white/5 pb-2">Services</a>
                    <a href="#developers" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors border-b border-white/5 pb-2">Developers</a>
                    <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors border-b border-white/5 pb-2">Pricing</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors border-b border-white/5 pb-2">About</a>
                    <button className="text-left py-2 hover:text-white transition-colors">Log in</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
