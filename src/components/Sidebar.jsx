import React from 'react';

const Sidebar = () => {
    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 p-3 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-800 hidden md:flex">
            <a className="p-2 hover:text-primary transition-colors" href="#hero" title="Home">
                <span className="material-symbols-outlined">home</span>
            </a>
            <a className="p-2 hover:text-primary transition-colors" href="#about" title="About">
                <span className="material-symbols-outlined">person</span>
            </a>
            <a className="p-2 hover:text-primary transition-colors" href="#resume" title="Resume">
                <span className="material-symbols-outlined">description</span>
            </a>
            <a className="p-2 hover:text-primary transition-colors" href="#projects" title="Projects">
                <span className="material-symbols-outlined">grid_view</span>
            </a>
            <a className="p-2 hover:text-primary transition-colors" href="#contact" title="Contact">
                <span className="material-symbols-outlined">mail</span>
            </a>
        </nav>
    );
};

export default Sidebar;
