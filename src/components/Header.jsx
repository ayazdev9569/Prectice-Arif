import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const getLinkClass = (name) =>
        `transition-all duration-300 ease-in-out ${activeSection === name ? 'text-red-600' : 'hover:text-primary'}`;

    const handleLinkClick = (name) => {
        setActiveSection(name);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-center items-center text-sm font-medium">
            {/* Navigation */}
            <nav className="hidden lg:flex justify-center gap-18 xl:gap-24 bg-black text-white px-8 py-4 rounded-full w-full shadow-xl border border-white/10">
                <NavLink
                    to="/"
                    end
                    className={getLinkClass('Home')}
                    onClick={() => handleLinkClick('Home')}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={getLinkClass('About')}
                    onClick={() => handleLinkClick('About')}
                >
                    About
                </NavLink>
                <NavLink
                    to="/services"
                    className={getLinkClass('Service')}
                    onClick={() => handleLinkClick('Service')}
                >
                    Service
                </NavLink>

                {/* Center Logo Area inside Nav */}
                <div className="flex items-center gap-2 mx-8 cursor-pointer">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">A</div>
                    <span className="font-bold text-base hover:text-primary transition-colors">Ayaz</span>
                </div>

                <NavLink
                    to="/resume"
                    className={getLinkClass('Resume')}
                    onClick={() => handleLinkClick('Resume')}
                >
                    Resume
                </NavLink>
                <NavLink
                    to="/projects"
                    className={getLinkClass('Project')}
                    onClick={() => handleLinkClick('Project')}
                >
                    Project
                </NavLink>
                <NavLink
                    to="/contact"
                    className={getLinkClass('Contact')}
                    onClick={() => handleLinkClick('Contact')}
                >
                    Contact Us
                </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden block p-2 bg-black text-white rounded-lg z-50 relative border border-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <nav className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-black text-white p-8 flex flex-col gap-6 z-50 transform transition-transform duration-300 ease-in-out lg:hidden border-l border-white/10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between mb-8 mt-2">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                        <span className="font-bold text-xl hover:text-primary transition-colors">Ayaz</span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex flex-col gap-6 text-lg">
                    <NavLink to="/" end className={getLinkClass('Home')} onClick={() => handleLinkClick('Home')}>Home</NavLink>
                    <NavLink to="/about" className={getLinkClass('About')} onClick={() => handleLinkClick('About')}>About</NavLink>
                    <NavLink to="/services" className={getLinkClass('Service')} onClick={() => handleLinkClick('Service')}>Service</NavLink>
                    <NavLink to="/resume" className={getLinkClass('Resume')} onClick={() => handleLinkClick('Resume')}>Resume</NavLink>
                    <NavLink to="/projects" className={getLinkClass('Project')} onClick={() => handleLinkClick('Project')}>Project</NavLink>
                    <NavLink to="/contact" className={getLinkClass('Contact')} onClick={() => handleLinkClick('Contact')}>Contact Us</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
