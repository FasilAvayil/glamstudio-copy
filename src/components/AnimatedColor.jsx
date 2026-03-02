import React from 'react';
import { motion } from 'framer-motion';

const AnimatedColor = ({ className = "h-6 w-6" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className} overflow-visible text-glam-gold`}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
            >
                {/* Hair Color Brush */}
                <motion.g
                    animate={{
                        rotate: [0, -15, 10, 0],
                        y: [0, -2, 2, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "6px", originY: "18px" }}
                >
                    <rect x="4" y="16" width="4" height="6" rx="1" />
                    <rect x="5" y="4" width="2" height="12" rx="0.5" />
                    <line x1="4" y1="20" x2="8" y2="20" strokeWidth="0.5" />
                    <line x1="4" y1="21" x2="8" y2="21" strokeWidth="0.5" />
                </motion.g>

                {/* Mixing Bowl or Palette */}
                <path d="M14 18 Q 14 21, 18 21 Q 22 21, 22 18 L 14 18 Z" opacity="0.4" />

                {/* Droplets of color */}
                <motion.circle
                    cx="18" cy="14" r="1.5" fill="currentColor" stroke="none"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>
        </div>
    );
};

export default AnimatedColor;
