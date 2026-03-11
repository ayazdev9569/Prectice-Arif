import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
    return (
        <section className="w-full my-24 px-4 md:px-0">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl font-semibold">
                    From my<br />
                    <span className="text-primary italic font-serif">blog post</span>
                </h2>

                <button className="bg-primary text-white hover:bg-[#e44a1e] px-6 py-2.5 rounded-full transition-colors font-medium">
                    View All ↗
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Post 1 */}
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" alt="UI Design" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="w-full h-full flex items-center justify-center text-gray-500 absolute inset-0 text-sm">Design Layout</div>

                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="flex gap-2 mb-3">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">UI Design</span>
                            <span className="text-white/60 text-xs flex items-center">10 Nov, 2026</span>
                        </div>
                        <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">How to create a great component</h3>
                    </div>

                    <div className="absolute right-6 top-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all z-20">
                        <ArrowUpRight className="text-white" size={18} />
                    </div>
                </div>

                {/* Post 2 */}
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="App Setup" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="w-full h-full flex items-center justify-center text-gray-500 absolute inset-0 text-sm">App Setup</div>

                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="flex gap-2 mb-3">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">App Design</span>
                            <span className="text-white/60 text-xs flex items-center">12 Nov, 2026</span>
                        </div>
                        <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">Mobile App UI Principles</h3>
                    </div>

                    <div className="absolute right-6 top-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all z-20">
                        <ArrowUpRight className="text-white" size={18} />
                    </div>
                </div>

                {/* Post 3 */}
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 bg-gray-200 hidden md:block">
                    <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800" alt="Wireframes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="w-full h-full flex items-center justify-center text-gray-500 absolute inset-0 text-sm">Wireframes</div>

                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="flex gap-2 mb-3">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">Wireframe</span>
                            <span className="text-white/60 text-xs flex items-center">15 Nov, 2026</span>
                        </div>
                        <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">Speed up your wireframing process</h3>
                    </div>

                    <div className="absolute right-6 top-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all z-20">
                        <ArrowUpRight className="text-white" size={18} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
