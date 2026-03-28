import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full pt-16 flex flex-col items-center justify-center text-center">
            {/* Hello badge */}
            <div className="inline-block px-4 py-1.5 mb-8 border border-gray-200 rounded-full text-4xl font-medium">
                hello! <span role="img" aria-label="wave">👋</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
                I'm <span className="text-primary relative inline-block">
                    Ayaz
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                    </svg>
                </span>,<br />
                Frontend Developer
            </h1>

            {/* Center Image & Badges */}
            <div className="relative w-full max-w-4xl xl:max-w-6xl mx-auto flex flex-col items-center">
                {/* Background orange circle (implied from design) */}
                <div className="absolute bottom-0 w-80 h-80 bg-primary rounded-full z-0 -translate-x-1/2 left-1/2"></div>

                {/* The character image */}
                <div className="relative z-10 w-72 h-80 rounded-t-full rounded-b-lg overflow-hidden flex items-end justify-center border-4 border-white shadow-xl">
                    <img src="/hero_portrait.png" alt="Ayaz Portrait" className="w-full h-full object-cover object-top" />
                </div>

                {/* Action Buttons overlaying the bottom of the image */}
                <div className="absolute -bottom-6 z-20 flex gap-4 bg-white p-2 rounded-full shadow-lg">
                    <button className="bg-primary text-white hover:bg-[#e44a1e] px-8 py-3 rounded-full transition-colors flex items-center gap-2 font-medium">
                        Portfolio <span className="rotate-45">↗</span>
                    </button>
                    <button className="bg-white text-text-dark border border-gray-200 hover:border-gray-400 px-8 py-3 rounded-full transition-colors font-medium shadow-sm">
                        Hire Me
                    </button>
                </div>

                {/* Left Floating Stat */}
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-left hidden lg:block xl:max-w-sm max-w-xs">
                    <div className="text-8xl text-gray-400 absolute -top-8 -left-4 font-serif">"</div>
                    <p className="text-2xl text-text-medium mb-4 relative z-10">
                        Ayaz's exceptional frontend development ensured our website's success. Highly recommended!
                    </p>
                    <div className="font-bold text-6xl">450+</div>
                    <div className="text-xl text-text-medium">Client Served</div>
                </div>

                {/* Right Floating Stat */}
                <div className="absolute top-1/4 -right-8 text-right hidden lg:block">
                    <div className="flex gap-1 justify-end text-primary mb-2 text-4xl">
                        {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                    <div className="font-bold text-6xl">10 Years</div>
                    <div className="text-2xl text-text-medium">Experts</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
