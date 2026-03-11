import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [activeSection, setActiveSection] = useState('Home');

    const getLinkClass = (name) => 
        `transition-all duration-300 ease-in-out ${activeSection === name ? 'text-red-600' : 'hover:text-primary'}`;

    const handleLinkClick = (name) => {
        setActiveSection(name);
    };

    return (
        <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-center items-center text-sm font-medium">
            {/* Navigation */}
            <nav className="hidden md:flex flex-1 justify-center gap-12 bg-black text-white px-8 py-4 rounded-full max-w-4xl shadow-xl border border-white/10">
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
                    to="#services" 
                    className={getLinkClass('Service')} 
                    onClick={() => handleLinkClick('Service')}
                >
                    Service
                </NavLink>

                {/* Center Logo Area inside Nav */}
                <div className="flex items-center gap-2 mx-8 cursor-pointer">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">J</div>
                    <span className="font-bold text-base hover:text-primary transition-colors">Jenny</span>
                </div>

                <NavLink 
                    to="#resume" 
                    className={getLinkClass('Resume')} 
                    onClick={() => handleLinkClick('Resume')}
                >
                    Resume
                </NavLink>
                <NavLink 
                    to="#portfolio" 
                    className={getLinkClass('Project')} 
                    onClick={() => handleLinkClick('Project')}
                >
                    Project
                </NavLink>
                <NavLink 
                    to="#contact" 
                    className={getLinkClass('Contact')} 
                    onClick={() => handleLinkClick('Contact')}
                >
                    Contact Us
                </NavLink>
            </nav>

            {/* Mobile Menu Button (simplified for now) */}
            <button className="md:hidden block p-2 bg-black text-white rounded-lg">
                Menu
            </button>
        </header>
    );
};

export default Header;
