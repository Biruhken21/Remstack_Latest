import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ChevronLeft, ShoppingCart, CheckCircle, Package, Settings, Info } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import OrderModal from '../components/OrderModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SEO from '../components/SEO';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useMemo(() => products.find(p => p.id === id), [id]);
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return (
        <div className="py-40 text-center">
            <h2 className="text-2xl font-bold">Product not found</h2>
            <Link to="/products" className="text-primary hover:underline">Return to catalog</Link>
        </div>
    );

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <SEO
                title={`${product.name} - RemStack Technologies`}
                description={product.description}
                ogImage={product.image}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumbs */}
                <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">{t(translations, 'products.backToCatalog')}</span>
                </Link>

                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Gallery */}
                        <div className="p-4 sm:p-8 lg:p-12 bg-gray-50 flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-white p-8 flex items-center justify-center border border-gray-100"
                            >
                                <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                            </motion.div>
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="aspect-square rounded-xl bg-white overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-primary transition-all shadow-sm hover:shadow-md p-2 flex items-center justify-center">
                                        <img src={product.image} className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8 lg:p-12 space-y-8">
                            <div>
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                                    {product.category}
                                </span>
                                <h1 className="text-4xl font-black text-gray-900 mb-4">{product.name}</h1>
                                <p className="text-gray-500 text-lg leading-relaxed">{product.description}</p>
                            </div>

                            <div className="flex items-center space-x-2 text-primary">
                                <Info className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-widest text-sm text-primary/80">Premium Grade Product</span>
                            </div>

                            {/* Specs */}
                            <div className="space-y-4 pt-4">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-2">
                                    <Settings className="w-4 h-4" />
                                    <span>Specifications</span>
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {product.specifications?.map((spec, i) => (
                                        <div key={i} className="flex items-center space-x-2 text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sizes/Options */}
                            {product.sizes && (
                                <div className="space-y-3">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-2">
                                        <Package className="w-4 h-4" />
                                        <span>Available Sizes</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {product.sizes.map(size => (
                                            <div key={size} className="px-5 py-2 border-2 border-gray-100 rounded-xl font-bold text-gray-600 whitespace-nowrap">
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action */}
                            <div className="pt-8">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-black text-xl hover:from-primary-dark hover:to-accent-light transition-all shadow-lg flex items-center justify-center space-x-3 active:scale-95"
                                >
                                    <ShoppingCart className="w-6 h-6" />
                                    <span>{t(translations, 'products.orderNow')}</span>
                                </button>
                                <div className="mt-4 flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6 text-gray-400 text-xs">
                                    <div className="flex items-center space-x-1">
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Quality Assurance</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Fast Production</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Reliable Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="space-y-12">
                        <h2 className="text-3xl font-black text-gray-900">Similar Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} onOrder={() => { }} />
                            ))}
                        </div>
                    </section>
                )}
            </div>

            <OrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetail;
