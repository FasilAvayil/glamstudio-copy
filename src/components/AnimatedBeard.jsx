import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBeard = ({ className = "h-6 w-6" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className} overflow-visible text-glam-gold`}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
            >
                {/* Shaving Brush Handle */}
                <path
                    d="M16 14 L16 19 C16 20 15 21 14 21 L10 21 C9 21 8 20 8 19 L8 14"
                    fill="currentColor"
                    opacity="0.3"
                    stroke="none"
                />
                <path d="M8 14 L16 14" strokeWidth="1" />

                {/* Brush Bristles */}
                <motion.path
                    d="M8 14 Q 8 8, 12 8 Q 16 8, 16 14"
                    animate={{
                        scaleY: [1, 1.1, 1],
                        originY: "14px"
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    fill="currentColor"
                    opacity="0.2"
                    stroke="none"
                />
                <motion.g
                    animate={{
                        y: [0, -1, 0],
                        skewX: [0, 5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <line x1="9" y1="14" x2="10" y2="10" strokeWidth="0.8" />
                    <line x1="12" y1="14" x2="12" y2="9" strokeWidth="0.8" />
                    <line x1="15" y1="14" x2="14" y2="10" strokeWidth="0.8" />
                </motion.g>

                {/* Razor (floating/vector style) */}
                <motion.g
                    animate={{
                        rotate: [-10, 10, -10],
                        x: [0, 2, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "6px", originY: "6px" }}
                >
                    {/* Razor Head */}
                    <rect x="2" y="4" width="8" height="2" rx="0.5" fill="currentColor" stroke="none" />
                    <path d="M6 6 L6 13" strokeWidth="1" />
                    <path d="M5 13 L7 13" strokeWidth="1.2" />
                </motion.g>

                {/* Foam Bubbles */}
                <motion.circle
                    cx="19" cy="10" r="1" fill="currentColor" opacity="0.4" stroke="none"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.circle
                    cx="21" cy="13" r="1.5" fill="currentColor" opacity="0.3" stroke="none"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.5, 0.1] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
                />
            </svg>
        </div>
    );
};

export default AnimatedBeard;
