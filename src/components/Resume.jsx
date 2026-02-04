import React from 'react';

const Resume = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="resume">
            <div className="max-w-7xl mx-auto px-6 md:px-24">

                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-display font-bold mb-4">Resume & Skills</h2>
                    <p className="text-slate-500">My academic qualifications, professional experience, and technical skillset.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Experience & Education Column */}
                    <div className="space-y-12">

                        {/* Experience */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Experience</h3>
                            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-2">
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                                    <h4 className="text-lg font-bold">AI & ML Intern</h4>
                                    <p className="text-slate-500 text-sm mb-2">Hepro AI • Jan 2026 – Present</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        Assisted in data preprocessing, EDA, and implemented ML models using Python under mentor guidance.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                                    <h4 className="text-lg font-bold">Android Developer Intern</h4>
                                    <p className="text-slate-500 text-sm mb-2">Eduskills Foundation • Apr 2024 – Jun 2024</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        Supported by Google for Developers. Worked on Android app development and implemented functional components.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                                    <h4 className="text-lg font-bold">Zero Trust Cloud Security Intern</h4>
                                    <p className="text-slate-500 text-sm mb-2">Eduskills Foundation • Jan 2024 – Mar 2024</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        Supported by Zscaler. Learned identity-aware access control and secure cloud connectivity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Education</h3>
                            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-2">
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                                    <h4 className="text-lg font-bold">B.E. Computer Science & Business Systems</h4>
                                    <p className="text-slate-500 text-sm mb-2">Srinivas Institute of Technology • 2022 – 2026</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                                    <h4 className="text-lg font-bold">Higher Secondary (Bio-Science)</h4>
                                    <p className="text-slate-500 text-sm mb-2">GHSS Kumbla • 2020 – 2022</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Score: 87%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills & Certifications Column */}
                    <div className="space-y-12">

                        {/* Skills */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Skills</h3>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-sm text-slate-500">Programming & Databases</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'Java', 'C', 'SQL', 'Django', 'Flask'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm border border-slate-200 dark:border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-sm text-slate-500">Data Science & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'NLP', 'Tableau', 'Excel', 'Git', 'VS Code'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm border border-slate-200 dark:border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3 text-sm text-slate-500">Soft Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm border border-slate-200 dark:border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Certifications</h3>
                            <ul className="space-y-4">
                                <li className="flex flex-col pb-2 border-b border-slate-200 dark:border-slate-800">
                                    <span className="font-medium">Basics of Python</span>
                                    <span className="text-xs text-slate-500">Infosys Springboard</span>
                                </li>
                                <li className="flex flex-col pb-2 border-b border-slate-200 dark:border-slate-800">
                                    <span className="font-medium">CCNA: Enterprise Networking, Security, and Automation</span>
                                    <span className="text-xs text-slate-500">Cisco Networking Academy</span>
                                </li>
                                <li className="flex flex-col pb-2 border-b border-slate-200 dark:border-slate-800">
                                    <span className="font-medium">Fundamentals of Information Security</span>
                                    <span className="text-xs text-slate-500">Infosys Springboard</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;
