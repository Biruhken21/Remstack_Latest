import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code2, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
    { number: '20+', label: 'Projects Delivered', icon: Code2 },
    { number: '12+', label: 'Happy Clients', icon: Users },
    { number: '4+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: TrendingUp },
];

const StatsSection = () => {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-[#1a2332] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6 shadow-sm text-center hover:border-primary hover:shadow-md transition-all"
                        >
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                                <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                            </div>
                            <p className="text-xl md:text-3xl font-black text-secondary dark:text-white mb-0.5 md:mb-1">{stat.number}</p>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;