import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Cloud, Server, Shield, ArrowRight, HardDrive, Database, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const servicesList = [
    {
        id: 'custom-software',
        icon: Code,
        title: 'Custom Software Development',
        desc: 'Tailored software solutions to address your unique business challenges and streamline operations.',
        color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
        gradient: 'from-blue-500 to-blue-600',
        delay: 0
    },
    {
        id: 'mobile-apps',
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications for iOS and Android that engage your customers.',
        color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
        gradient: 'from-purple-500 to-purple-600',
        delay: 0.1
    },
    {
        id: 'web-development',
        icon: Globe,
        title: 'Website Development',
        desc: 'Responsive, SEO-optimized, and high-performance websites that establish your digital presence.',
        color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
        gradient: 'from-emerald-500 to-emerald-600',
        delay: 0.2
    },
    {
        id: 'cloud-solutions',
        icon: Cloud,
        title: 'Cloud Solutions',
        desc: 'Scalable cloud infrastructure and migration services using AWS, Azure, and GCP platforms.',
        color: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
        gradient: 'from-cyan-500 to-cyan-600',
        delay: 0.3
    },
    {
        id: 'devops-services',
        icon: Server,
        title: 'DevOps Services',
        desc: 'Streamline your development workflow with CI/CD pipelines, automation, and infrastructure management.',
        color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
        gradient: 'from-orange-500 to-orange-600',
        delay: 0.4
    },
    {
        id: 'cybersecurity',
        icon: Shield,
        title: 'Cybersecurity',
        desc: 'Protect your business with comprehensive security audits, penetration testing, and security architecture.',
        color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
        gradient: 'from-rose-500 to-rose-600',
        delay: 0.5
    },
    {
        id: 'server-installation',
        icon: HardDrive,
        title: 'Server Installation & Setup',
        desc: 'Professional server installation, configuration, and optimization for on-premise and cloud environments.',
        color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
        gradient: 'from-indigo-500 to-indigo-600',
        delay: 0.6
    },
    {
        id: 'data-migration',
        icon: Database,
        title: 'Data Migration Services',
        desc: 'Seamless data migration between systems with zero data loss and minimal downtime.',
        color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
        gradient: 'from-amber-500 to-amber-600',
        delay: 0.7
    },
    {
        id: 'cctv-installation',
        icon: Camera,
        title: 'CCTV Installation',
        desc: 'Complete surveillance system installation with HD cameras, monitoring setup, and maintenance support.',
        color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
        gradient: 'from-teal-500 to-teal-600',
        delay: 0.8
    }
];

const Services = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-16 md:py-24 bg-[#ffffff] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-10 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                    >
                        {t(translations, 'services.title')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 md:mb-6 px-2"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay }}
                            className="group relative bg-[#f0f0f0] dark:bg-gray-800/50 rounded-xl p-5 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                        >
                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            <div className={`w-10 h-10 md:w-12 md:h-12 ${service.color} rounded-lg flex items-center justify-center mb-3 md:mb-4 relative`}>
                                <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-sm md:text-lg font-bold text-secondary dark:text-white mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm line-clamp-3">
                                {service.desc}
                            </p>
                            <Link
                                to={`/services/${service.id}`}
                                className="inline-flex items-center text-primary font-semibold text-xs md:text-sm hover:text-primary-dark transition-colors group/link"
                            >
                                Discover More
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;