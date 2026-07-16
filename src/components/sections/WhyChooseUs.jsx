import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Globe2, Users2, TrendingUp, Award } from 'lucide-react';

const benefits = [
    {
        icon: Globe2,
        title: 'Global Talent Pool',
        desc: 'Access to top developers worldwide, 24/7 productivity across time zones.',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Users2,
        title: 'Dedicated Teams',
        desc: 'Your own remote team that understands your business and works as an extension of your company.',
        color: 'from-purple-500 to-purple-600'
    },
    {
        icon: TrendingUp,
        title: 'Cost Effective',
        desc: 'Reduce development costs by up to 40% without compromising on quality.',
        color: 'from-emerald-500 to-emerald-600'
    },
    {
        icon: Award,
        title: 'Proven Excellence',
        desc: 'Track record of 100+ successful outsourced projects delivered on time.',
        color: 'from-orange-500 to-orange-600'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-24 bg-[#ffffff] dark:bg-[#1a2332] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-10 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary dark:text-white mb-4"
                    >
                        The <span className="gradient-text">Remote Team</span> Advantage
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2"
                    >
                        We deliver exceptional outsourced projects with the flexibility and expertise of a distributed global team.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="section-divider mt-6"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#f0f0f0] dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:border-primary hover:shadow-lg transition-all text-center"
                        >
                            <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg`}>
                                <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary dark:text-white mb-1.5 md:mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-sm leading-relaxed font-medium">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;