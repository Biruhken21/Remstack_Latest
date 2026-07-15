import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const CategoryIcon = ({ category }) => {
    const iconMap = {
        Frontend: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M7 10l2 2-2 2" />
                <path d="M17 10l-2 2 2 2" />
            </svg>
        ),
        Backend: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
            </svg>
        ),
        Mobile: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        Database: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
            </svg>
        ),
        'DevOps & Cloud': (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
        'Design & Tools': (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
        Security: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        'CCTV & Surveillance': (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
        ),
    };

    return iconMap[category] || (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    );
};

const TechIcon = ({ name }) => {
    // Return a styled initial for technologies without specific icons
    const firstLetter = name.charAt(0);
    const colorMap = {
        'React': 'text-sky-500', 'Next.js': 'text-white', 'Vue.js': 'text-emerald-500', 'TypeScript': 'text-blue-600',
        'Tailwind CSS': 'text-cyan-500', 'Bootstrap': 'text-purple-600', 'Redux': 'text-purple-500',
        'Node.js': 'text-green-600', 'Python': 'text-yellow-500', 'Laravel': 'text-red-500', 'Django': 'text-green-800',
        'Express.js': 'text-gray-500', 'GraphQL': 'text-pink-600',
        'Flutter': 'text-sky-500', 'React Native': 'text-blue-500', 'Swift': 'text-orange-500', 'Kotlin': 'text-purple-600',
        'MongoDB': 'text-green-600', 'PostgreSQL': 'text-blue-600', 'MySQL': 'text-orange-600', 'Firebase': 'text-yellow-500', 'Redis': 'text-red-500',
        'Docker': 'text-sky-500', 'Kubernetes': 'text-blue-600', 'AWS': 'text-orange-500', 'Azure': 'text-blue-600', 'GCP': 'text-red-500',
        'GitHub Actions': 'text-gray-600', 'Terraform': 'text-purple-600',
        'Figma': 'text-pink-500', 'Notion': 'text-white', 'Jira': 'text-blue-600', 'Slack': 'text-purple-500', 'Git': 'text-orange-600',
        'SSL/TLS': 'text-green-600', 'OAuth': 'text-blue-500', 'SonarQube': 'text-blue-500', 'Wireshark': 'text-blue-600',
        'Hikvision': 'text-green-600', 'Dahua': 'text-blue-600', 'NVR Systems': 'text-gray-500', 'IP Cameras': 'text-teal-500',
    };

    return (
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700/50 text-xs font-bold ${colorMap[name] || 'text-gray-500 dark:text-gray-300'}`}>
            {firstLetter}
        </span>
    );
};

const techCategories = [
    {
        name: 'Frontend',
        color: 'blue',
        items: [
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'Vue.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'Bootstrap' },
            { name: 'Redux' },
        ]
    },
    {
        name: 'Backend',
        color: 'purple',
        items: [
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'Laravel' },
            { name: 'Django' },
            { name: 'Express.js' },
            { name: 'GraphQL' },
        ]
    },
    {
        name: 'Mobile',
        color: 'emerald',
        items: [
            { name: 'Flutter' },
            { name: 'React Native' },
            { name: 'Swift' },
            { name: 'Kotlin' },
        ]
    },
    {
        name: 'Database',
        color: 'amber',
        items: [
            { name: 'MongoDB' },
            { name: 'PostgreSQL' },
            { name: 'MySQL' },
            { name: 'Firebase' },
            { name: 'Redis' },
        ]
    },
    {
        name: 'DevOps & Cloud',
        color: 'cyan',
        items: [
            { name: 'Docker' },
            { name: 'Kubernetes' },
            { name: 'AWS' },
            { name: 'Azure' },
            { name: 'GCP' },
            { name: 'GitHub Actions' },
            { name: 'Terraform' },
        ]
    },
    {
        name: 'Design & Tools',
        color: 'pink',
        items: [
            { name: 'Figma' },
            { name: 'Notion' },
            { name: 'Jira' },
            { name: 'Slack' },
            { name: 'Git' },
        ]
    },
    {
        name: 'Security',
        color: 'rose',
        items: [
            { name: 'SSL/TLS' },
            { name: 'OAuth' },
            { name: 'SonarQube' },
            { name: 'Wireshark' },
        ]
    },
    {
        name: 'CCTV & Surveillance',
        color: 'teal',
        items: [
            { name: 'Hikvision' },
            { name: 'Dahua' },
            { name: 'NVR Systems' },
            { name: 'IP Cameras' },
        ]
    },
];

const colorThemes = {
    blue: { active: 'bg-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-700/50', glow: '#3B82F6' },
    purple: { active: 'bg-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-700/50', glow: '#8B5CF6' },
    emerald: { active: 'bg-emerald-500', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-700/50', glow: '#10B981' },
    amber: { active: 'bg-amber-500', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-700/50', glow: '#F59E0B' },
    cyan: { active: 'bg-cyan-500', bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-200 dark:border-cyan-700/50', glow: '#06B6D4' },
    pink: { active: 'bg-pink-500', bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-200 dark:border-pink-700/50', glow: '#EC4899' },
    rose: { active: 'bg-rose-500', bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-700/50', glow: '#F43F5E' },
    teal: { active: 'bg-teal-500', bg: 'bg-teal-500/10', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-700/50', glow: '#14B8A6' },
};

const TechStack = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeCategory = techCategories[activeTab];
    const theme = colorThemes[activeCategory.color];

    return (
        <section id="tech-stack" className="py-20 md:py-28 bg-gray-50 dark:bg-[#0b1120] relative overflow-hidden">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            {/* Ambient glow */}
            <motion.div
                className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] dark:opacity-[0.08] pointer-events-none blur-[120px]"
                animate={{ backgroundColor: theme.glow, scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide mb-4"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        Technology Stack
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
                    >
                        Built With{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            Modern Tech
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
                    >
                        Select a category below to explore the technologies and tools we leverage
                        to deliver enterprise-grade solutions.
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <div className="relative mb-8 md:mb-10">
                    {/* Thin scrollbar styles */}
                    <style>{`
                        .tech-scroll::-webkit-scrollbar { height: 0; }
                        .tech-scroll { scrollbar-width: none; }
                        .tech-scroll-mask {
                            -webkit-mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
                            mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
                        }
                    `}</style>
                    <div className="tech-scroll-mask">
                        <div className="flex items-center gap-2 overflow-x-auto py-1 tech-scroll">
                            {techCategories.map((category, index) => {
                                const isActive = activeTab === index;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 shrink-0 ${
                                            isActive
                                                ? 'text-white shadow-lg shadow-blue-500/20'
                                                : 'text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200'
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeTabBg"
                                                className={`absolute inset-0 rounded-xl ${theme.active}`}
                                                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            <CategoryIcon category={category.name} />
                                            <span>{category.name}</span>
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                                                isActive
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                                            }`}>
                                                {category.items.length}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Category Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        {/* Category header */}
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className={`h-8 w-1 rounded-full ${theme.active}`} />
                            <h3 className={`text-lg md:text-xl font-bold ${theme.text}`}>
                                {activeCategory.name}
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 via-gray-200/50 to-transparent dark:from-gray-700 dark:via-gray-700/50 dark:to-transparent" />
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium bg-gray-100 dark:bg-gray-800/50 px-2.5 py-1 rounded-full">
                                {activeCategory.items.length} {activeCategory.items.length === 1 ? 'technology' : 'technologies'}
                            </span>
                        </div>

                        {/* Tech Items Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                            {activeCategory.items.map((tech, itemIndex) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: itemIndex * 0.04, duration: 0.3 }}
                                    className="group relative bg-white dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 p-4 md:p-5 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-blue-500/5"
                                >
                                    {/* Hover accent line */}
                                    <motion.span
                                        className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300"
                                        layoutId={`accent-${tech.name}`}
                                    />

                                    <div className="flex flex-col items-center gap-2.5 md:gap-3">
                                        {/* Icon placeholder */}
                                        <TechIcon name={tech.name} />

                                        {/* Name */}
                                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base text-center leading-tight">
                                            {tech.name}
                                        </h4>

                                        {/* Proficiency indicator (subtle) */}
                                        <motion.span
                                            className="h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${60 + Math.random() * 35}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + itemIndex * 0.04, duration: 0.6, ease: 'easeOut' }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                        ...and many more tools in our engineering arsenal.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;