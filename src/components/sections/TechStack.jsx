import React from 'react';
import { motion } from 'framer-motion';

const techStackItems = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'TypeScript', icon: '📘', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
    { name: 'Node.js', icon: '💚', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'Laravel', icon: '⚡', category: 'Backend' },
    { name: 'Flutter', icon: '📱', category: 'Mobile' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Figma', icon: '🎯', category: 'Design' },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-16 md:py-20 bg-[#ffffff] dark:bg-[#1a2332] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                >
                    Technology Stack
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary dark:text-white mb-4"
                >
                    Built With <span className="gradient-text">Modern Tech</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2"
                >
                    We leverage cutting-edge technologies to build scalable, performant, and future-ready solutions.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {techStackItems.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-[#f0f0f0] dark:bg-gray-800/50 rounded-xl p-3 md:p-5 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition-all text-center"
                        >
                            <div className="text-2xl md:text-3xl mb-2 md:mb-3">{tech.icon}</div>
                            <h3 className="font-bold text-secondary dark:text-white text-xs md:text-sm mb-0.5 md:mb-1">{tech.name}</h3>
                            <span className="text-[10px] md:text-xs text-primary font-medium">{tech.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;