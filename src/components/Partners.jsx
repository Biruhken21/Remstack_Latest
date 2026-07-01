import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { id: 1, name: 'Partner 1', image: '/partner1.png' },
    { id: 2, name: 'Partner 2', image: '/partner2.png' },
    { id: 3, name: 'Partner 3', image: '/partner3.png' },
    { id: 4, name: 'Partner 1', image: '/partner1.png' },
    { id: 5, name: 'Partner 2', image: '/partner2.png' },
    { id: 6, name: 'Partner 3', image: '/partner3.png' },
    { id: 7, name: 'Partner 1', image: '/partner1.png' },
];

const Partners = () => {
    return (
        <section className="py-16 bg-white dark:bg-[#1a2332] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-sm"
                    >
                        Trusted By
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-secondary dark:text-white mb-4"
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
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#1a2332] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#1a2332] to-transparent z-10"></div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex animate-scroll-partners gap-8"
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[180px] h-24 group cursor-pointer"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="max-h-full max-w-full object-contain transition-all duration-300"
                                />
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
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Proud to collaborate with industry leaders and innovative startups
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
