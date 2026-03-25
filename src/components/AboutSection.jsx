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
                    {/* <button className="bg-primary hover:bg-[#e44a1e] text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-sm">
                        Resume
                    </button> */}

                    {/* Right: Visual Content */}
                    <div className="relative flex-1 flex md:hidden justify-center items-center">
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


                    {/* New "Why Hire me?" Sub-section */}
                    <div className="mt-16">
                        <h3 className="text-4xl font-bold mb-6">
                            Why <span className="text-primary">Hire me</span>?
                        </h3>
                        <p className="text-text-medium text-base leading-relaxed max-w-lg mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
                        </p>

                        <div className="flex flex-wrap gap-12 mb-8 items-center justify-center md:justify-start">
                            <div>
                                <h4 className="text-3xl font-bold text-dark mb-1">450+</h4>
                                <p className="text-text-medium text-sm">Project Completed</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-dark mb-1">450+</h4>
                                <p className="text-text-medium text-sm">Project Completed</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <button className="border-2 border-dark text-dark font-bold px-10 py-3 rounded-xl hover:bg-dark hover:text-white transition-all">
                                Hire me
                            </button>
                            <button className="bg-primary hover:bg-[#e44a1e] text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-sm">
                                Resume
                            </button>
                        </div>
                    </div>

                </div>

                {/* Right: Visual Content */}
                <div className="relative md:flex-1 md:flex hidden justify-center items-center">
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

            {/* My Skills Section */}
            <div className="w-full max-w-7xl px-8 mt-32">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                            My <span className="text-primary italic font-serif">skills</span>
                        </h2>
                        <p className="text-text-medium text-lg max-w-xl">
                            A comprehensive overview of my technical expertise and proficiency levels in various modern technologies.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-24">
                    {[
                        { name: "HTML", percent: 95 },
                        { name: "CSS", percent: 92 },
                        { name: "JavaScript", percent: 90 },
                        { name: "Tailwind CSS", percent: 95 },
                        { name: "React", percent: 88 },
                        { name: "Next.js", percent: 85 },
                        { name: "Express.js", percent: 82 },
                        { name: "MongoDB", percent: 80 },
                        { name: "Prisma", percent: 85 },
                        { name: "SQLite", percent: 78 },
                        { name: "Git", percent: 90 },
                        { name: "GitHub", percent: 92 },
                        { name: "Vercel", percent: 85 },
                    ].map((skill, index) => (
                        <div key={index} className="w-full">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-dark text-lg">{skill.name}</span>
                                <span className="text-primary font-bold">{skill.percent}%</span>
                            </div>
                            <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-visible">
                                <div
                                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                                    style={{ width: `${skill.percent}%` }}
                                >
                                    {/* Circular indicator inspired by the image */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full shadow-md z-10"></div>
                                </div>
                            </div>
                        </div>
                    ))}
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

            {/* Why Hire me? Sub-section (Already added above) */}


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
