import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Self-Employed, NYC",
            period: "Sep 2020 - July 2023",
            role: "Visual Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            company: "Insightancer",
            period: "Aug 2016 - Sep 2020",
            role: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            company: "KG Design Studio",
            period: "Sep 2015 - Aug 2016",
            role: "Web Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        }
    ];

    return (
        <div className="flex-1 pr-0 md:pr-12">
            <h3 className="text-3xl font-semibold mb-10 text-center md:text-left">
                My Work Experience
            </h3>

            <div className="relative border-l-2 border-gray-200 ml-3 md:ml-0 pl-8 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white ${index === 1 ? 'bg-darker' : 'bg-primary'}`}></div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <div className="w-40 flex-shrink-0">
                                <h4 className="font-bold text-lg">{exp.company}</h4>
                                <p className="text-sm text-text-medium mt-1">{exp.period}</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">{exp.role}</h4>
                                <p className="text-sm text-text-medium mt-2 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
