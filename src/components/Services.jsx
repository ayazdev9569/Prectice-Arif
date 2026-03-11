import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
    const serviceItems = [
        {
            title: "UI/UX Design",
            image: "placeholder-ui",
            defaultColor: "bg-gray-600",
            activeColor: "bg-primary"
        },
        {
            title: "Web Design",
            image: "placeholder-web",
            defaultColor: "bg-primary",
            activeColor: "bg-primary"
        },
        {
            title: "Landing Page",
            image: "placeholder-landing",
            defaultColor: "bg-gray-600",
            activeColor: "bg-primary"
        }
    ];

    return (
        <section className="w-full bg-darker rounded-[40px] px-8 py-16 text-white my-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <h2 className="text-4xl font-semibold mb-4 md:mb-0">
                    My <span className="text-primary">Services</span>
                </h2>
                <p className="max-w-xs text-sm text-gray-400 text-left md:text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceItems.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#2A2A2A] rounded-3xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-2 h-[400px] flex flex-col"
                    >
                        {/* Header Section of Card */}
                        <div className={`${index === 1 ? 'bg-primary' : 'bg-[#333] group-hover:bg-primary'} transition-colors duration-300 p-6`}>
                            <h3 className="text-xl font-medium">{item.title}</h3>
                        </div>

                        {/* Body/Image Section of Card */}
                        <div className="flex-1 p-6 flex flex-col items-center justify-end bg-gradient-to-t from-black/50 to-transparent relative group-hover:from-black/70 transition-all">
                            {/* Image Placeholder */}
                            <div className="w-4/5 h-48 rounded-lg shadow-xl translate-y-8 group-hover:translate-y-4 transition-transform duration-500 overflow-hidden border-4 border-white/10">
                                <img src="/service_mockup.png" alt={item.title} className="w-full h-full object-cover relative z-0" />
                            </div>
                        </div>

                        {/* Hover Arrow Icon */}
                        <div className="absolute right-4 bottom-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight className="text-white" />
                        </div>
                        {/* Arrow always visible for active (middle) item */}
                        {index === 1 && (
                            <div className="absolute right-4 bottom-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                                <ArrowUpRight />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
