import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import OrderModal from '../components/OrderModal';
import { Filter, SlidersHorizontal, Search as SearchIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SEO from '../components/SEO';

const Products = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const categories = useMemo(
        () => ['All', 'Paper Bags', 'Cloth Bags', 'Raw Materials', 'Machinery'],
        []
    );

    const queryCategory = useMemo(() => {
        const params = new URLSearchParams(location.search);
        const catParam = params.get('category');
        if (!catParam) return null;
        const decoded = catParam.replace(/-/g, ' ');
        return categories.find(c => c.toLowerCase() === decoded.toLowerCase()) || null;
    }, [location.search, categories]);

    const currentCategory = queryCategory || selectedCategory;

    const filteredProducts = products.filter(p => {
        const matchesCategory = currentCategory === 'All' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleOrder = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <SEO
                title="Product Catalog - RemStack Technologies"
                description="Explore our high-quality paper bags, cloth bags, and industrial machinery. Premium packaging solutions for businesses in Ethiopia."
            />
            {/* Header Section - Premium Boxed Catalog Design */}
            <div className="pt-32 pb-16 px-4">
                <div className="max-w-6xl mx-auto relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-primary">
                    {/* Background Pattern - Matching 'Partner With Us' Section */}
                    <div className="absolute inset-0">
                        <img
                            src="/mission-remstack.png"
                            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                            alt="Background Pattern"
                            loading="lazy"
                        />
                    </div>

                    {/* Decorative Blur Accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-dark/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 py-24 px-6 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                        >
                            <Filter className="w-4 h-4 text-white" />
                            <span className="text-white font-bold text-xs tracking-[0.3em] uppercase">Premium Shop Catalog</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight text-center"
                        >
                            {t(translations, 'products.title')}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-center font-medium"
                        >
                            {t(translations, 'products.subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-12 px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl text-white group hover:bg-white/20 transition-all cursor-default"
                        >
                            <p className="font-bold text-lg tracking-wide flex items-center gap-3">
                                <SlidersHorizontal className="w-5 h-5 text-white/60" />
                                {t(translations, 'products.instruction')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Controls Bar */}
                <div className="bg-white rounded-2xl shadow-xl p-4 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-gray-100">
                    {/* Filters */}
                    <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <Filter className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${selectedCategory === cat
                                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder={t(translations, 'nav.search')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onOrder={handleOrder}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full text-gray-400">
                            <SlidersHorizontal className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">No products found</h3>
                        <p className="text-gray-500">Try adjusting your filters or search query.</p>
                        <button
                            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                            className="text-primary font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>

            <OrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
};

export default Products;
