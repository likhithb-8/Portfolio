import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6" id="hero">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full gradient-blur"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full gradient-blur"></div>

            <div className="relative z-10 text-center max-w-4xl">
                <p className="text-sm font-display font-semibold tracking-widest uppercase mb-4 text-slate-500 dark:text-slate-400">
                    Computer Science & Business Systems Undergraduate
                </p>
                <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight tracking-tight">
                    Hi, I'm <span className="text-primary">Likhith B</span>.
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                    Full-stack developer skilled in Python, Java, and Cloud Security.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all" href="#projects">
                        View My Work
                    </a>
                    <a className="px-8 py-4 border border-slate-200 dark:border-slate-800 font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-all" href="#contact">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default Hero;
