import React from 'react';
import { resumeData } from '../data/resumeData';
import { Download } from 'lucide-react';

const Resume = () => {
    return (
        <section className="w-full py-24 flex flex-col items-center animate-fade-in bg-light/50">
            {/* Header Section */}
            <div className="w-full max-w-5xl px-8 mb-16 relative">
                <div className="bg-white p-10 md:p-14 rounded-[32px] shadow-xl shadow-primary/5 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-dark">
                            {resumeData.header.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-medium">
                            {resumeData.header.title}
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        {resumeData.header.contacts.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <a key={index} href={contact.link} className="flex items-center gap-3 text-text-medium hover:text-primary transition-colors group">
                                    <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Icon className="w-5 h-5 text-dark group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-sm font-medium">{contact.value}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="w-full max-w-5xl px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Left Column - Main Content */}
                <div className="md:col-span-2 space-y-16">
                    {/* Summary */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-bold text-dark">Profile</h2>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>
                        <p className="text-text-medium leading-relaxed text-lg">
                            {resumeData.summary}
                        </p>
                    </section>

                    {/* Experience section */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-bold text-dark">Experience</h2>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>
                        
                        <div className="space-y-10 pl-4 border-l-2 border-primary/20">
                            {resumeData.experience.map((exp) => (
                                <div key={exp.id} className="relative pl-6 group">
                                    {/* Timeline dot */}
                                    <div className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -left-[27px] top-1 group-hover:scale-125 group-hover:bg-primary transition-all"></div>
                                    
                                    <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-dark">{exp.role}</h3>
                                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-lg font-medium text-text-dark mb-4">{exp.company}</p>
                                    <p className="text-text-medium leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Education section */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-bold text-dark">Education</h2>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>
                        
                        <div className="space-y-6">
                            {resumeData.education.map((edu) => (
                                <div key={edu.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-dark">{edu.degree}</h3>
                                        <span className="text-sm font-medium text-text-medium whitespace-nowrap">{edu.year}</span>
                                    </div>
                                    <p className="text-lg text-primary font-medium mb-3">{edu.institution}</p>
                                    <p className="text-text-medium">
                                        {edu.details}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-12">
                    {/* Skills */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm border-t-4 border-t-primary">
                        <h2 className="text-2xl font-bold text-dark mb-6">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="px-4 py-2 bg-light text-text-dark text-sm font-medium rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors cursor-default">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-dark mb-6">Key Projects</h2>
                        <div className="space-y-6">
                            {resumeData.projects.map((project) => (
                                <div key={project.id} className="group border-b border-gray-100 pb-6 last:pb-0 last:border-0 border-dashed">
                                    <a href={project.link} className="block text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2">
                                        {project.title}
                                    </a>
                                    <p className="text-sm text-text-medium mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="text-[11px] font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Download Button */}
                    <button className="w-full flex items-center justify-center gap-3 bg-dark text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary transition-colors group shadow-lg shadow-dark/10">
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                        Download PDF
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Resume;
