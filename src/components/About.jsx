import React from 'react';

const About = () => {
    return (
        <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto" id="about">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                        <img
                            alt="Likhith B"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            src="https://placehold.co/600x600/1e293b/ffffff?text=LB" // Placeholder, explicit user photo not provided yet
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800">
                        <p className="text-sm font-semibold">Open for Opportunities</p>
                        <p className="text-xs text-slate-500">Full-Stack & Android</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-display font-bold mb-6">About Me</h2>
                    <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        <p>
                            I am a Computer Science and Business Systems undergraduate at Srinivas Institute of Technology, Mangalore.
                            With experience in full-stack development, Android app development, and Zero Trust Cloud Security,
                            I enjoy solving complex problems and building user-centric applications.
                        </p>
                        <p>
                            My technical journey includes working with Python, Java, Django, and SQL, alongside internship exposure
                            to data analysis and machine learning. I strive to write efficient, elegant code and strictly adhere
                            to best practices in software development.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-8">
                        <div>
                            <span className="block text-3xl font-bold">2+</span>
                            <span className="text-sm text-slate-500 uppercase tracking-wider">Projects</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold">2026</span>
                            <span className="text-sm text-slate-500 uppercase tracking-wider">Graduation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
