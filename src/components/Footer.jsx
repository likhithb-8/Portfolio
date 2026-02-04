import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <p>© 2026 Likhith B. All rights reserved.</p>
                <div className="mt-4 flex justify-center gap-6">
                    <a className="hover:text-primary" href="#">Privacy Policy</a>
                    <a className="hover:text-primary" href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
