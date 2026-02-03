import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Projects", href: "/projects" },
        { name: "Feedback", href: "/feedback" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
            <div className={`flex flex-col w-full max-w-7xl transition-all duration-500 rounded-[32px] md:rounded-full border border-white/5 bg-black/40 backdrop-blur-2xl overflow-hidden ${isOpen ? 'max-h-[600px] px-6 py-6' : 'max-h-[80px] px-6 md:px-8 py-3'}`}>
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-xl md:text-2xl font-bold text-white tracking-tighter font-bricolage">webvoss</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="hover:text-white transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Only Button */}
                        <button className="hidden md:block px-8 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-white/90 transition-all shadow-lg shadow-white/10 active:scale-95">
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

                {/* Mobile Menu Content */}
                <div className={`flex flex-col gap-6 pt-10 pb-4 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'} transition-all duration-500`}>
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-white/50 hover:text-white transition-colors border-b border-white/5 pb-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Only Button - Now under Contact Us */}
                    <div className="pt-2">
                        <button className="w-full py-4 text-sm font-bold bg-white text-black rounded-full hover:bg-white/90 transition-all shadow-lg shadow-white/10 active:scale-95">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
