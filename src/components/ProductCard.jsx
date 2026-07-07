import React from 'react';
import { ShoppingCart, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ProductCard = ({ product, onOrder }) => {
    const { language, t } = useLanguage();

    // Determine the product name based on the current language
    const productName = language === 'am' && product.nameAm ? product.nameAm : product.name;

    return (
        <Link to={`/products/${product.id}`} className="block">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group max-w-[320px] mx-auto w-full cursor-pointer"
            >
                {/* Image Container - White Card Box */}
                <div className="relative h-44 sm:h-52 overflow-hidden bg-white flex items-center justify-center p-4">
                    <img
                        src={product.image}
                        alt={productName}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 bg-primary/10 backdrop-blur-sm text-primary text-[10px] font-bold rounded-full border border-primary/20">
                            {product.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">{productName}</h3>
                    <p className="text-gray-500 text-[11px] mb-3 line-clamp-2 leading-relaxed h-8">{product.description}</p>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{t(translations, 'card.viewDetails')}</span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onOrder(product);
                            }}
                            className="flex items-center space-x-1.5 bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-lg text-[11px] font-bold hover:from-primary-dark hover:to-accent-light transition-all shadow-md active:scale-95"
                        >
                            <ShoppingCart className="w-3 h-3" />
                            <span>{t(translations, 'products.orderNow')}</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProductCard;
