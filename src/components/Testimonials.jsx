import React from 'react';

const Testimonials = () => {
    return (
        <section className="w-full bg-[#1C1C1C] rounded-[40px] px-8 py-20 text-white my-12 text-center relative overflow-hidden">
            <h2 className="text-4xl font-semibold mb-2 relative z-10">
                Testimonials that
            </h2>
            <h2 className="text-4xl font-semibold mb-6 relative z-10">
                Speak to <span className="text-primary italic font-serif">My Results</span>
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto mb-16 relative z-10 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10 opacity-70 scale-95 hover:opacity-100 hover:scale-100 transition-all duration-300">
                {/* Testimonial Card Middle */}
                <div className="bg-[#2A2A2A] rounded-2xl p-8 max-w-md mx-auto text-left relative">
                    <div className="absolute -top-4 -left-4 text-5xl text-gray-500 font-serif opacity-30">"</div>
                    <div className="flex text-primary mb-4 text-sm gap-1">
                        ★★★★★ <span className="text-white ml-2">5.0</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                        Jenny's exceptional product design ensured our website's success. Highly recommended for any complex design solutions!
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                        <div>
                            <h5 className="font-bold text-sm">Harry, Arthur</h5>
                            <p className="text-xs text-gray-400">CEO, Food Express</p>
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-8 text-6xl text-gray-500 font-serif opacity-20">"</div>
                </div>
            </div>

            {/* Nav dots */}
            <div className="flex justify-center gap-2 mt-10 relative z-10">
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-10 right-20 text-white opacity-20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20m10-10H2" />
                </svg>
            </div>
        </section>
    );
};

export default Testimonials;
