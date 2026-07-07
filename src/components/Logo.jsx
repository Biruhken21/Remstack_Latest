import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "h-10", isScrolled = false, showText = true, isDarkBg = false }) => {
    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                <img
                    src="/logo/image.png"
                    alt="RemStack Technologies Logo"
                    className="h-full w-auto object-contain"
                />
            </motion.div>

            {showText && (
                <motion.div
                    className="flex flex-col leading-none"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <span className={`text-xl font-black tracking-tighter ${
                        isDarkBg 
                            ? 'text-white' 
                            : isScrolled 
                                ? 'text-gray-900 dark:text-white' 
                                : 'text-gray-800 dark:text-white'
                    }`}>
                        Rem<span className="text-primary">Stack</span>
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-primary/80">
                        Technologies
                    </span>
                </motion.div>
            )}
        </div>
    );
};

export default Logo;
