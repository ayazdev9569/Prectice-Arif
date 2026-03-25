import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, isActive, imageSrc, reversed }) => {
    const cardBgColor = isActive ? 'bg-primary' : 'bg-[#333333]';
    const buttonBgColor = isActive ? 'bg-primary text-white' : 'bg-[#333333] text-white';
    
    // Fallback if no images, but here we construct a simple CSS layout inside the image area if we want, or just an img
    return (
        <div className={`relative ${cardBgColor} rounded-[32px] p-2 flex flex-col h-[400px] overflow-hidden group transition-transform duration-500 hover:-translate-y-2`}>
            {/* Title */}
            <div className="pt-6 pb-4 px-6 z-10 w-full">
                <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-gray-100'}`}>
                    {title}
                </h3>
            </div>
            
            {/* Image Container */}
            <div className="flex-1 w-full bg-[#E8E8E8] rounded-t-[24px] rounded-br-[40px] rounded-bl-[24px] overflow-hidden relative mt-2">
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {isActive && (
                    <div className="absolute inset-0 bg-linear-to-b from-primary/20 to-transparent"></div>
                )}
            </div>

            {/* Cutout Container bottom-right */}
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#222222] rounded-tl-[32px] z-20 flex items-center justify-center pt-2 pl-2">
                {/* Real Button */}
                <div className={`w-14 h-14 rounded-full ${buttonBgColor} flex items-center justify-center cursor-pointer transition-transform duration-300 hover:rotate-45 shadow-lg`}>
                    <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </div>
                {/* Reverse curve layers (top-left of cutout and bottom-right of image) could be added via SVG, but basic rounded corners usually suffice for the illusion. */}
                <div className="absolute -top-4 right-0 w-4 h-4 bg-transparent shadow-[4px_4px_0_4px_#222222] rounded-br-full pointer-events-none"></div>
                <div className="absolute bottom-0 -left-4 w-4 h-4 bg-transparent shadow-[4px_4px_0_4px_#222222] rounded-br-full pointer-events-none"></div>
            </div>
        </div>
    );
};

const MyServices = () => {
    return (
        <section id="services" className="w-full py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto bg-[#222222] rounded-[48px] p-8 md:p-14 text-white shadow-2xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        My <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ServiceCard 
                        title="UI/UX Design" 
                        isActive={false} 
                        imageSrc="https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=800&h=1000"
                    />
                    <ServiceCard 
                        title="Web Design" 
                        isActive={true} 
                        imageSrc="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800&h=1000"
                    />
                    <ServiceCard 
                        title="Landing Page" 
                        isActive={false} 
                        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=1000"
                    />
                </div>
            </div>
        </section>
    );
};

export default MyServices;
