import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const getLinkClass = ({ isActive }) =>
        `transition-all duration-300 ease-in-out ${isActive ? 'text-red-600' : 'hover:text-primary'}`;

    return (
        <footer className="w-full max-w-7xl mx-auto px-6 py-12 mt-20 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">J</div>
                    <span className="font-bold text-xl">Jenny</span>
                </div>

                <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-text-medium">
                    <li><NavLink to="/" end className={getLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/about" className={getLinkClass}>About Us</NavLink></li>
                    <li><NavLink to="/services" className={getLinkClass}>Service</NavLink></li>
                    <li><NavLink to="/projects" className={getLinkClass}>Works</NavLink></li>
                    <li><NavLink to="/blog" className={getLinkClass}>Blog</NavLink></li>
                </ul>

                <div className="flex gap-4">
                    {/* Social links placeholders */}
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                        in
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                        tw
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                        be
                    </a>
                </div>
            </div>
            <div className="text-center text-xs text-text-medium mt-12">
                © 2026 Jenny. All right reserved.
            </div>
        </footer>
    );
};

export default Footer;
