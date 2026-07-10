import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const partners = [
    { id: 1, name: 'Yoda Coffee', initials: 'YC', logo: '/partners/yoda-coffee.png', color: 'from-amber-600 to-amber-800' },
    { id: 2, name: 'Aloha Real Estate Marketing', initials: 'AR', logo: '/partners/aloha-realestate.png', color: 'from-sky-500 to-sky-700' },
    { id: 3, name: 'Besys Technologies', initials: 'BT', logo: '/partners/besys-technologies.png', color: 'from-indigo-500 to-indigo-700' },
    { id: 4, name: 'Sholla Technologies', initials: 'ST', logo: '/partners/sholla-technologies.png', color: 'from-teal-500 to-teal-700' },
    { id: 5, name: 'Afnex Tech Hub', initials: 'AH', logo: '/partners/afnex-tech-hub.png', color: 'from-violet-500 to-violet-700' },
];

const Partners = () => {
    return (
        <section className="py-12 md:py-16 bg-white dark:bg-[#1a2332] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-8 md:mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                    >
                        Trusted By
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary dark:text-white mb-4"
                    >
                        Our Partners & Clients
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="section-divider"
                    ></motion.div>
                </div>

                {/* Partners Infinite Scroll */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#1a2332] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#1a2332] to-transparent z-10"></div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex animate-scroll-partners gap-4 md:gap-8"
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[120px] md:min-w-[180px] h-16 md:h-24 group cursor-pointer"
                            >
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-2 md:p-4 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-10`}></div>
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-contain relative z-10"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const parent = e.target.parentElement;
                                            const placeholder = document.createElement('div');
                                            placeholder.className = 'w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs md:text-sm relative z-10';
                                            placeholder.textContent = partner.initials;
                                            parent.appendChild(placeholder);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 md:mt-12 text-center"
                >
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                        Trusted by leading Ethiopian businesses and tech innovators
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;