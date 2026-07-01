import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "h-10", isScrolled = false, showText = true, isDarkBg = false }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <motion.div
                className="relative"
                initial="initial"
                animate="animate"
                whileHover="hover"
            >
                <svg
                    viewBox="0 0 60 60"
                    className="h-full w-auto"
                >
                    <defs>
                        <linearGradient id="rs-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <linearGradient id="rs-gradient-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                        <filter id="rs-glow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Outer ring */}
                    <motion.circle
                        cx="30" cy="30" r="28"
                        fill="none"
                        stroke="url(#rs-gradient)"
                        strokeWidth="2.5"
                        initial={{ pathLength: 0, rotate: -90 }}
                        animate={{ pathLength: 1, rotate: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ transformOrigin: "center" }}
                    />

                    {/* Inner decorative ring */}
                    <motion.circle
                        cx="30" cy="30" r="22"
                        fill="none"
                        stroke="url(#rs-gradient)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 0.5 }}
                    />

                    {/* Background fill */}
                    <motion.circle
                        cx="30" cy="30" r="26"
                        fill="url(#rs-gradient)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        opacity="0.1"
                    />

                    {/* R letter */}
                    <motion.g
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <text
                            x="18" y="38"
                            fontFamily="Inter, sans-serif"
                            fontSize="22"
                            fontWeight="900"
                            fill="url(#rs-gradient)"
                            filter="url(#rs-glow)"
                        >R</text>
                    </motion.g>

                    {/* S letter */}
                    <motion.g
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                    >
                        <text
                            x="32" y="38"
                            fontFamily="Inter, sans-serif"
                            fontSize="22"
                            fontWeight="900"
                            fill="url(#rs-gradient)"
                            filter="url(#rs-glow)"
                        >S</text>
                    </motion.g>

                    {/* Small decorative dots */}
                    <motion.circle
                        cx="30" cy="5" r="2"
                        fill="#2563eb"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1 }}
                    />
                    <motion.circle
                        cx="30" cy="55" r="2"
                        fill="#06b6d4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.1 }}
                    />
                </svg>
            </motion.div>

            {showText && (
                <motion.div
                    className="flex flex-col leading-none"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <span className={`text-2xl font-black tracking-tighter ${
                        isDarkBg 
                            ? 'text-white' 
                            : isScrolled 
                                ? 'text-gray-900 dark:text-white' 
                                : 'text-gray-800 dark:text-white'
                    }`}>
                        Rem<span className="text-primary">Stack</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                        Technologies
                    </span>
                </motion.div>
            )}
        </div>
    );
};

export default Logo;