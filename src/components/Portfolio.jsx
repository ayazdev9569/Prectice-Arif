import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Portfolio = () => {
    return (
        <section className="w-full my-24 bg-[#F5F5F5] rounded-[40px] px-8 py-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <h2 className="text-4xl font-semibold mb-4 md:mb-0">
                    Let's Have a Look at<br />
                    my <span className="text-primary">Portfolio</span>
                </h2>

                <button className="bg-primary text-white hover:bg-[#e44a1e] px-6 py-2.5 rounded-full transition-colors font-medium">
                    See More ↗
                </button>
            </div>

            <div className="relative flex items-center justify-center">
                {/* Left Nav Button */}
                <button className="absolute left-0 z-10 w-10 h-10 bg-darker text-white rounded-full flex items-center justify-center -translate-x-1/2 hover:bg-black transition-colors">
                    <ArrowLeft size={18} />
                </button>

                <div className="flex gap-6 overflow-hidden w-full max-w-4xl">
                    {/* Portfolio Item 1 */}
                    <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 min-w-[300px]">
                        <div className="h-48 rounded-xl mb-6 overflow-hidden">
                            <img src="/service_mockup.png" alt="UI Design project" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">UI/UX Design</span>
                        </div>
                    </div>

                    {/* Portfolio Item 2 */}
                    <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 min-w-[300px]">
                        <div className="h-48 rounded-xl mb-6 overflow-hidden">
                            <img src="/portfolio_app.png" alt="App Design project" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Landing Page</span>
                            <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Wireframe</span>
                        </div>
                    </div>
                </div>

                {/* Right Nav Button */}
                <button className="absolute right-0 z-10 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center translate-x-1/2 hover:bg-[#e44a1e] transition-colors">
                    <ArrowRight size={18} />
                </button>
            </div>

            <div className="text-center mt-12">
                <h4 className="font-bold text-lg inline-flex items-center gap-2">
                    Food Express - Food Delivery Solution
                    <span className="w-4 h-4 rounded-full bg-primary inline-block"></span>
                </h4>
                <p className="text-text-medium text-sm max-w-xl mx-auto mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
        </section>
    );
};

export default Portfolio;
