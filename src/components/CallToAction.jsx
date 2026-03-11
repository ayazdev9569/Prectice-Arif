import React from 'react';

const CallToAction = () => {
    return (
        <section className="w-full my-24 text-center">
            <h2 className="text-4xl font-semibold mb-8">
                Have An Awesome Project<br />
                Idea? <span className="text-primary">Let's Discuss</span>
            </h2>

            <div className="max-w-xl mx-auto relative flex items-center border border-gray-300 rounded-full p-2 pl-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-400 mr-2">✉</span>
                <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-1 outline-none text-sm bg-transparent"
                />
                <button className="bg-primary hover:bg-[#e44a1e] text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Send
                </button>
            </div>

            <div className="flex justify-center gap-8 mt-6 text-xs text-text-medium font-medium">
                <span className="flex items-center gap-1"><span className="text-green-500">✓</span> 4.9/5 Average Ratings</span>
                <span className="flex items-center gap-1"><span className="text-green-500">✓</span> 25+ Winning Awards</span>
                <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Certified Product Designers</span>
            </div>

            {/* Decorative Scrolling Banner Placeholder */}
            <div className="mt-20 overflow-hidden relative w-full -mx-6 px-6 sm:mx-0 w-[100vw] sm:w-full sm:px-0 left-0 right-0 -ml-[50vw] sm:ml-0 bg-primary/10 py-6 whitespace-nowrap hidden md:flex items-center justify-center gap-8 text-xl font-bold text-primary transform -rotate-1 border-y-2 border-primary">
                <span>Design ✦ App Design ✦ Dashboard ✦ Wireframe ✦ User Research ✦ Design ✦ App Design</span>
            </div>
        </section>
    );
};

export default CallToAction;
