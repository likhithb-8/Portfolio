import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto font-display font-bold text-xl tracking-tighter">
                LIKHITH<span className="text-primary">.</span>PORTFOLIO
            </div>
            <div className="pointer-events-auto flex items-center gap-6">
                <button
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                    onClick={toggleTheme}
                >
                    <span className={`material-symbols-outlined ${isDark ? 'hidden' : 'block'}`}>dark_mode</span>
                    <span className={`material-symbols-outlined ${isDark ? 'block' : 'hidden'}`}>light_mode</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
