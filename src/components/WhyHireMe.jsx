import React from 'react';

const WhyHireMe = () => {
    return (
        <div className="flex-1 bg-[#F5F5F5] rounded-3xl p-8 md:p-12 relative overflow-hidden mt-12 md:mt-0">
            {/* Decorative top circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Character Image */}
                <div className="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden mb-8">
                    <img src="/hero_portrait.png" alt="Jenny Avatar" className="w-full h-full object-cover object-top" />
                </div>

                <h3 className="text-3xl font-semibold mb-4 text-center">
                    Why You <span className="text-primary">Hire Me</span> for<br />
                    Your Next Projects?
                </h3>

                <p className="text-center text-text-medium text-sm max-w-md mx-auto mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>

                <div className="flex justify-center gap-16 mb-10">
                    <div className="text-center">
                        <h4 className="font-bold text-3xl">600+</h4>
                        <p className="text-sm text-text-medium mt-1">Project Completed</p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-3xl">50+</h4>
                        <p className="text-sm text-text-medium mt-1">Industry Covered</p>
                    </div>
                </div>

                <button className="bg-white text-text-dark border-2 border-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default WhyHireMe;
