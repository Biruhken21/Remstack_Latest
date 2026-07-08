import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe, Cloud, Server, Shield, HardDrive, Database, Camera } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
    {
        title: 'KesewEj E-Commerce Platform',
        category: 'Web Development',
        description: 'A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        icon: Globe,
        color: 'bg-blue-100 text-blue-600'
    },
    {
        title: 'Hymn Mobile App',
        category: 'Mobile App',
        description: 'Cross-platform ride-hailing application with real-time tracking, fare estimation, and driver management.',
        image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?w=600&h=400&fit=crop',
        tags: ['Flutter', 'laravel', 'Google Maps API'],
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
        title: 'Cloud Infrastructure Migration',
        category: 'Cloud & DevOps',
        description: 'Seamless migration of enterprise infrastructure to AWS cloud with auto-scaling, load balancing, and disaster recovery.',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
        tags: ['AWS', 'Docker', 'Terraform', 'Kubernetes'],
        icon: Cloud,
        color: 'bg-cyan-100 text-cyan-600'
    },
    {
        title: 'Security Audit & Penetration Testing',
        category: 'Cybersecurity',
        description: 'Comprehensive security assessment including vulnerability scanning, penetration testing, and remediation planning.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
        tags: ['Kali Linux', 'Metasploit', 'Wireshark', 'Nmap'],
        icon: Shield,
        color: 'bg-rose-100 text-rose-600'
    },
    {
        title: 'Server Installation & Configuration',
        category: 'Infrastructure',
        description: 'End-to-end server setup including hardware installation, OS configuration, network setup, and security hardening.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        tags: ['Linux', 'Windows Server', 'VMware', 'RAID'],
        icon: Server,
        color: 'bg-orange-100 text-orange-600'
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
    },
    {
        title: 'Data Migration & ETL Pipeline',
        category: 'Cloud & DevOps',
        description: 'Enterprise data migration solution with automated ETL pipelines, zero data loss, and real-time validation.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        tags: ['Apache Spark', 'Python', 'Airflow', 'Snowflake'],
        icon: Database,
        color: 'bg-amber-100 text-amber-600'
    },
    {
        title: 'Enterprise CCTV & Access Control',
        category: 'Infrastructure',
        description: 'Complete surveillance solution with HD cameras, centralized monitoring, access control, and remote viewing.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        tags: ['Hikvision', 'Dahua', 'NVR', 'Biometrics'],
        icon: Camera,
        color: 'bg-teal-100 text-teal-600'
    }
];

const categories = ['All', 'Web Development', 'Mobile App', 'Custom Software', 'Cloud & DevOps', 'Cybersecurity', 'Infrastructure'];

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
            
            {/* Header Section */}
            <section className="relative py-20 bg-gradient-to-b from-secondary to-secondary/95 dark:from-[#0a0f1a] dark:to-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
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

            {/* Filter Tabs - White Background */}
            {/* Section bg: WHITE (#FFFFFF) → Box/Tab bg: GREY (#E5E7EB) */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                                    activeCategory === cat
                                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid - Grey Background */}
            {/* Section bg: GREY (#E5E7EB) → Card bg: WHITE (#FFFFFF) */}
            <section className="py-20 bg-gray-200 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all group"
                            >
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                        <div className="flex gap-2">
                                            <button className="p-2.5 bg-white rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg">
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                            <button className="p-2.5 bg-white rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg">
                                                <Github className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-10 h-10 ${project.color} rounded-lg flex items-center justify-center`}>
                                            <project.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span key={j} className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Gradient */}
            <section className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black text-white mb-4"
                    >
                        Want to Be Our Next Success Story?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
                    >
                        Let's discuss your project and create something amazing together.
                    </motion.p>
                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                    >
                        Start Your Project
                        <ExternalLink className="w-5 h-5 ml-2" />
                    </motion.a>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;