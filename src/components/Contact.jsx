import React from 'react';

const Contact = () => {
    return (
        <section className="py-24 px-6 md:px-24 bg-slate-900 text-white relative overflow-hidden" id="contact">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full gradient-blur"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
                <div>
                    <h2 className="text-5xl font-display font-bold mb-6">Let's connect.</h2>
                    <p className="text-slate-400 text-lg mb-10">
                        I'm currently looking for internships and new opportunities.
                        Feel free to reach out!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">mail</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Email</p>
                                <a href="mailto:likhithb321@gmail.com" className="font-semibold hover:text-primary transition-colors">likhithb321@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">call</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Phone</p>
                                <p className="font-semibold">9633191828</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Location</p>
                                <p className="font-semibold">Kasaragod, Kerala, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#" title="GitHub">
                            <img alt="GitHub" className="w-5 h-5 invert" src="https://simpleicons.org/icons/github.svg" />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#" title="LinkedIn">
                            <img alt="LinkedIn" className="w-5 h-5 invert" src="https://simpleicons.org/icons/linkedin.svg" />
                        </a>
                    </div>
                </div>

                <form className="space-y-6 bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Name</label>
                            <input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" type="email" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Subject</label>
                        <input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Inquiry" type="text" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Message</label>
                        <textarea className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Hello..." rows="4"></textarea>
                    </div>
                    <button className="w-full bg-primary py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
