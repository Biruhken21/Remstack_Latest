import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Rocket, Globe, Palette, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const servicesList = [
    {
        id: 'custom-software',
        icon: Code,
        title: 'Custom Software Development',
        desc: 'Tailored software solutions to address your unique business challenges and streamline operations.',
        color: 'bg-blue-50 text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        delay: 0
    },
    {
        id: 'mobile-apps',
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications for iOS and Android that engage your customers.',
        color: 'bg-purple-50 text-purple-600',
        gradient: 'from-purple-500 to-purple-600',
        delay: 0.1
    },
    {
        id: 'web-development',
        icon: Globe,
        title: 'Website Development',
        desc: 'Responsive, SEO-optimized, and high-performance websites that establish your digital presence.',
        color: 'bg-emerald-50 text-emerald-600',
        gradient: 'from-emerald-500 to-emerald-600',
        delay: 0.2
    },
    {
        id: 'startup-consulting',
        icon: Rocket,
        title: 'Startup Consulting',
        desc: 'Strategic guidance for startups, from MVP development to scaling and market entry.',
        color: 'bg-orange-50 text-orange-600',
        gradient: 'from-orange-500 to-orange-600',
        delay: 0.3
    },
    {
        id: 'graphics-design',
        icon: Palette,
        title: 'Graphics Solution',
        desc: 'Creative branding, UI/UX design, and visual assets that make your brand stand out.',
        color: 'bg-pink-50 text-pink-600',
        gradient: 'from-pink-500 to-pink-600',
        delay: 0.4
    },
    {
        id: 'digital-marketing',
        icon: BarChart,
        title: 'Digital Marketing',
        desc: 'Data-driven marketing strategies to increase your reach and convert leads into customers.',
        color: 'bg-indigo-50 text-indigo-600',
        gradient: 'from-indigo-500 to-indigo-600',
        delay: 0.5
    }
];

const Services = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-sm"
                    >
                        {t(translations, 'services.title')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-secondary mb-6"
                    >
                        {t(translations, 'services.subtitle')}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="section-divider"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                            <Link
                                to={`/services/${service.id}`}
                                className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors group/link"
                            >
                                Discover More
                                <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;