import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, Award, Rocket, Building2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const Timeline = () => {
    const { _t } = useLanguage();

    const milestones = [
        {
            year: '2020',
            title: 'The Vision',
            desc: 'RemStack Technologies began as a dedicated remote software development team, focusing on delivering custom solutions to local startups.',
            icon: Globe,
            color: 'bg-blue-500'
        },
        {
            year: '2021',
            title: 'Innovation Hub',
            desc: 'Accepted into Dire Dawa University\'s Business and Technology Incubation Center, fostering our research and development capabilities.',
            icon: Target,
            color: 'bg-primary'
        },
        {
            year: '2022',
            title: 'Certified Excellence',
            desc: 'Earned official certification for our innovative approach and technical standards in software engineering.',
            icon: Award,
            color: 'bg-primary-dark'
        },
        {
            year: '2023',
            title: 'Biruh Ethiopia Success',
            desc: 'Successfully competed in the Biruh Ethiopia startup competition, receiving strategic feedback that refined our market vision.',
            icon: Rocket,
            color: 'bg-primary'
        },
        {
            year: '2024',
            title: 'Expansion & Growth',
            desc: 'Transitioned to a thriving office-based operation in Addis Ababa, bringing together a full team of developers and designers.',
            icon: Building2,
            color: 'bg-gray-800'
        }
    ];

    return (
        <div className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4">Our Evolutionary Journey</h2>
                    <p className="text-gray-600 text-lg">Tracing our path from a remote vision to a leading tech partner.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Year Label */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`${index % 2 === 0 ? 'md:text-left pr-0 md:pr-12' : 'md:text-right pl-0 md:pl-12'}`}>
                                        <span className="text-primary font-black text-4xl mb-2 block">{item.year}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-xl border-4 border-white transition-transform hover:rotate-12`}>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Placeholder for balance */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
