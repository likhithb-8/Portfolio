import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "SkillSwap DAO",
            description: "Decentralized skill exchange platform using blockchain principles for secure peer-to-peer trading.",
            tags: "Java + Blockchain",
            // Using placeholder images or generic tech images if specific ones not provided
            img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
        },
        {
            title: "ServeMate",
            description: "College emergency SOS app integrating medical, power, technical support, and food services.",
            tags: "Java + HTML/CSS",
            img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto" id="projects">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold mb-4">Projects & Open Source</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    A showcase of my technical projects and contributions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden mb-6 relative border border-slate-100 dark:border-slate-800">
                            <img
                                alt={`${project.title} Project`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                src={project.img}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-6 py-2 bg-white text-black rounded-full font-semibold">View Details</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-500 text-sm line-clamp-2">{project.description}</p>
                            </div>
                            <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded whitespace-nowrap ml-2">{project.tags}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
