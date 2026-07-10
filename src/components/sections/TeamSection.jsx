import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Biruhken Ayana',
        role: 'CEO & Founder',
        description: 'Visionary leader with 15+ years in software engineering and business strategy.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        color: 'from-blue-500 to-blue-600'
    },
    {
        name: 'Sara Haile',
        role: 'CTO',
        description: 'Full-stack architect specializing in scalable cloud solutions and DevOps.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        color: 'from-purple-500 to-purple-600'
    },
    {
        name: 'Dawit Tesfaye',
        role: 'Lead Developer',
        description: 'Expert in React, Node.js, and modern web technologies with 8+ years experience.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
        color: 'from-emerald-500 to-emerald-600'
    },
    {
        name: 'Marta Girma',
        role: 'UI/UX Designer',
        description: 'Creative designer focused on user-centered design and beautiful interfaces.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        color: 'from-pink-500 to-pink-600'
    },
    {
        name: 'Yonas Bekele',
        role: 'Mobile Developer',
        description: 'Flutter and React Native specialist building cross-platform mobile apps.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        color: 'from-cyan-500 to-cyan-600'
    },
    {
        name: 'Helen Tadesse',
        role: 'Project Manager',
        description: 'Agile expert ensuring timely delivery and effective team coordination.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
        color: 'from-orange-500 to-orange-600'
    },
    {
        name: 'Samuel Girma',
        role: 'DevOps Engineer',
        description: 'Cloud infrastructure specialist with expertise in AWS and Kubernetes.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f15?w=200&h=200&fit=crop&crop=face',
        color: 'from-indigo-500 to-indigo-600'
    },
    {
        name: 'Rahel Tesfaye',
        role: 'QA Lead',
        description: 'Quality assurance expert ensuring bug-free and high-performance applications.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
        color: 'from-rose-500 to-rose-600'
    }
];

const TeamSection = () => {
    return (
        <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/30 dark:bg-[#0f172a]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                    >
                        Our Team
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary dark:text-white mb-3 sm:mb-4 md:mb-6"
                    >
                        Meet the <span className="gradient-text">Experts</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2"
                    >
                        A diverse team of passionate professionals dedicated to delivering excellence across the globe.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="section-divider mt-4 sm:mt-6"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:border-primary hover:shadow-md transition-all text-center"
                        >
                            <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xs sm:text-sm md:text-lg font-bold text-secondary dark:text-white mb-0.5 md:mb-1">{member.name}</h3>
                            <p className="text-primary font-semibold text-[10px] sm:text-xs md:text-sm mb-1.5 md:mb-2 md:mb-3">{member.role}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;