import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projectsData';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' 
        ? projectsData 
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <section id="portfolio" className="w-full py-24 bg-dark text-white rounded-[40px] px-6 md:px-12 my-24 shadow-2xl">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                    My <span className="text-primary font-serif italic">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
                <p className="text-gray-400 text-lg leading-relaxed pt-4">
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {projectCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                : 'bg-white text-dark hover:bg-gray-100 hover:scale-105'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="group relative flex flex-col">
                        {/* Image Container with Hover Overlay */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-darker border border-white/5 mb-6 shadow-xl">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                <a 
                                    href={project.demoLink}
                                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/30"
                                    title="Live Demo"
                                >
                                    <ExternalLink size={20} />
                                </a>
                                <a 
                                    href={project.githubLink}
                                    className="w-12 h-12 bg-white text-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                    title="View Source"
                                >
                                    <Github size={20} />
                                </a>
                            </div>

                            {/* Tech Stack Badges */}
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4 z-10">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-black/50 backdrop-blur-md text-white border border-white/20 text-[10px] font-semibold rounded-full uppercase tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="px-2 flex-grow">
                            <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wide">
                                {project.category}
                            </p>
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            
            {filteredProjects.length === 0 && (
                <div className="text-center text-gray-400 py-12">
                    No projects found for this category.
                </div>
            )}
        </section>
    );
};

export default Portfolio;
