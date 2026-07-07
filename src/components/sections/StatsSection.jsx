import React from 'react';
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
        <section className="py-20 bg-white dark:bg-[#1a2332] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md text-center hover:border-primary hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <stat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-3xl font-black text-secondary dark:text-white mb-1">{stat.number}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;