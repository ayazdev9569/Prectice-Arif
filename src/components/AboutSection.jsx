import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="w-full my-24 flex flex-col items-center">
            {/* About Me Top Content */}
            <div className="w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
                {/* Left: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                        About <span className="text-primary italic font-serif">me</span>
                    </h2>
                    <p className="text-text-medium text-lg leading-relaxed max-w-xl mb-10">
                        Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
                    </p>
                    <button className="bg-primary hover:bg-[#e44a1e] text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-sm">
                        Resume
                    </button>
                </div>

                {/* Right: Visual Content */}
                <div className="relative flex-1 flex justify-center items-center">
                    {/* Background Circle */}
                    <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-primary rounded-full z-0 translate-x-4"></div>
                    
                    {/* Circular Image Container */}
                    <div className="relative z-10 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                            src="/hero_portrait.png" 
                            alt="Jenny" 
                            className="w-full h-full object-cover object-top filter grayscale"
                        />
                    </div>
                </div>
            </div>

            {/* Projects Section (Contact Form as per reference) */}
            <div className="w-full max-w-3xl px-8 text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                    Projects
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

                <form className="space-y-6 text-left">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-dark ml-2">Name</label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-100 bg-white rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-dark ml-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full border border-gray-100 bg-white rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-dark ml-2">Message</label>
                        <textarea 
                            rows="6"
                            className="w-full border border-gray-100 bg-white rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-primary hover:bg-[#e44a1e] text-white font-bold px-10 py-3 rounded-lg transition-colors shadow-sm">
                            Send
                        </button>
                    </div>
                </form>
            </div>

            {/* Social Icons & Wave Footer Area */}
            <div className="w-full relative pt-10 pb-24 overflow-hidden">
                <div className="flex justify-center gap-10 mb-12 relative z-20">
                    <a href="#" className="text-dark hover:text-primary transition-colors">
                        <Instagram size={32} />
                    </a>
                    <a href="#" className="text-dark hover:text-primary transition-colors">
                        <Linkedin size={32} />
                    </a>
                    <a href="#" className="text-dark hover:text-primary transition-colors">
                        <Mail size={32} />
                    </a>
                </div>
                
                <p className="text-center text-text-medium text-sm font-medium mb-10 relative z-20">
                    Madelyn Torff 2023
                </p>

                {/* Wavy Background (CSS based) */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-primary z-0" style={{
                    clipPath: "polygon(0 45%, 16% 51%, 33% 41%, 52% 43%, 70% 31%, 86% 37%, 100% 23%, 100% 100%, 0 100%)"
                }}></div>
            </div>
        </section>
    );
};

export default AboutSection;
