import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe, BarChart } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
    {
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        icon: Globe,
        color: 'bg-blue-100 text-blue-600'
    },
    {
        title: 'Ride-Hailing Mobile App',
        category: 'Mobile App',
        description: 'Cross-platform ride-hailing application with real-time tracking, fare estimation, and driver management.',
        image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?w=600&h=400&fit=crop',
        tags: ['Flutter', 'Firebase', 'Google Maps API'],
        icon: Smartphone,
        color: 'bg-purple-100 text-purple-600'
    },
    {
        title: 'Hospital Management System',
        category: 'Custom Software',
        description: 'Comprehensive hospital management system with patient records, appointment scheduling, and billing.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
        tags: ['Laravel', 'Vue.js', 'PostgreSQL'],
        icon: Code,
        color: 'bg-indigo-100 text-indigo-600'
    },
    {
        title: 'Digital Marketing Dashboard',
        category: 'Digital Marketing',
        description: 'Analytics dashboard for tracking campaign performance, ROI, and customer engagement metrics.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        tags: ['React', 'Python', 'Chart.js', 'AWS'],
        icon: BarChart,
        color: 'bg-emerald-100 text-emerald-600'
    },
    {
        title: 'School Management Portal',
        category: 'Web Development',
        description: 'Educational management platform with grade tracking, attendance, parent-teacher communication, and reports.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
        tags: ['Next.js', 'TypeScript', 'MySQL'],
        icon: Globe,
        color: 'bg-amber-100 text-amber-600'
    },
    {
        title: 'Food Delivery App',
        category: 'Mobile App',
        description: 'End-to-end food delivery solution with order tracking, payment gateway, and restaurant management.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
        tags: ['Flutter', 'Node.js', 'Redis', 'Docker'],
        icon: Smartphone,
        color: 'bg-rose-100 text-rose-600'
    }
];

const categories = ['All', 'Web Development', 'Mobile App', 'Custom Software', 'Digital Marketing'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="pt-20">
            <SEO
                title="Portfolio - RemStack Technologies"
                description="Explore our portfolio of successful software projects including web apps, mobile apps, and custom solutions."
            />
            {/* Header */}
            <section className="bg-secondary py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Our <span className="gradient-text">Portfolio</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Showcasing our best work. Each project represents a unique challenge and a tailored solution.
                    </motion.p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-12 bg-white border-b border-gray-100 sticky top-16 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                    activeCategory === cat
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                            >
                                <div className="relative overflow-hidden h-52">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <div className="flex gap-3">
                                            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/40 transition-colors">
                                                <ExternalLink className="w-5 h-5 text-white" />
                                            </button>
                                            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/40 transition-colors">
                                                <Github className="w-5 h-5 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-10 h-10 ${project.color} rounded-lg flex items-center justify-center`}>
                                            <project.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span key={j} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Want to Be Our Next Success Story?</h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and create something amazing together.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
                    >
                        Start Your Project
                        <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;