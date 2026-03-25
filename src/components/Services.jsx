import React from 'react';
import {
    Code2,
    Palette,
    FileCode2,
    Wind,
    Atom,
    Zap,
    Server,
    Database,
    SquareCode,
    DatabaseZap,
    GitBranch,
    Github,
    Triangle,
    Layout,
    Monitor,
    Smartphone,
    PenTool
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="group bg-[#F9F9F9] p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer flex flex-col items-start gap-6 border border-transparent hover:border-gray-100">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
            <Icon className="text-primary w-8 h-8" strokeWidth={2.5} />
        </div>
        <div className="space-y-4">
            <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>
            <p className="text-text-medium text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const Services = () => {
    const designServices = [
        {
            title: "UI/UX",
            icon: Layout,
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        },
        {
            title: "Web Design",
            icon: Monitor,
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        },
        {
            title: "App Design",
            icon: Smartphone,
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        },
        {
            title: "Graphic Design",
            icon: PenTool,
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        }
    ];

    const services = [
        {
            title: "HTML",
            icon: Code2,
            description: "Expertise in semantic HTML5, accessibility standards, and building robust document structures for modern web applications."
        },
        {
            title: "CSS",
            icon: Palette,
            description: "Mastery of advanced CSS3 fetching, Flexbox, Grid, and complex layouts with a focus on responsive and beautiful designs."
        },
        {
            title: "JavaScript",
            icon: FileCode2,
            description: "Deep understanding of ES6+, asynchronous programming, DOM manipulation, and modern JavaScript design patterns."
        },
        {
            title: "Tailwind CSS",
            icon: Wind,
            description: "Efficiently building custom, utility-first designs with Tailwind CSS for rapid development and maintainable styles."
        },
        {
            title: "React",
            icon: Atom,
            description: "Building scalable single-page applications with React, utilizing hooks, context API, and high-performance components."
        },
        {
            title: "Next.js",
            icon: Zap,
            description: "Harnessing the power of Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) with Next.js for SEO-friendly apps."
        },
        {
            title: "Express.js",
            icon: Server,
            description: "Developing fast, minimalist server-side applications and RESTful APIs using Node.js and the Express framework."
        },
        {
            title: "MongoDB",
            icon: Database,
            description: "Experience with NoSQL database design, data modeling, and performing efficient CRUD operations with MongoDB."
        },
        {
            title: "Prisma",
            icon: SquareCode,
            description: "Using Prisma ORM for type-safe database access, automated migrations, and seamless database management in TypeScript."
        },
        {
            title: "SQLite",
            icon: DatabaseZap,
            description: "Implementing lightweight, file-based SQL databases with SQLite for local development and performant small-scale apps."
        },
        {
            title: "Git",
            icon: GitBranch,
            description: "Proficient in version control, branching strategies, and collaborative development using Git and command-line tools."
        },
        {
            title: "GitHub",
            icon: Github,
            description: "Expertise in managing repositories, automating workflows with GitHub Actions, and contributing to open-source projects."
        },
        {
            title: "Vercel",
            icon: Triangle,
            description: "Deploying and scaling modern web applications with Vercel's edge network for optimal performance and developer experience."
        }
    ];

    return (
        <section id="services" className="w-full py-24 flex flex-col items-center">
            {/* Header Area */}
            <div className="w-full max-w-3xl px-8 text-center mb-20 space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-dark">
                    My <span className="text-primary italic font-serif">Services</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
                <p className="text-text-medium text-lg leading-relaxed pt-4">
                    Providing top-tier digital transformation services across a wide range of modern technologies and frameworks.
                </p>
            </div>

            {/* Design Services Grid */}
            <div className="w-full max-w-7xl px-8 mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {designServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>

            {/* service code type */}
            <div className="w-full max-w-7xl text-center px-8 my-12">
                <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-dark p-2">MY Skills</h3>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Services Grid */}
            <div className="w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;


