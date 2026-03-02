import React from 'react';
import { motion } from 'framer-motion';

const AnimatedFacial = ({ className = "h-6 w-6" }) => {
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
                {/* Face Contour */}
                <path d="M12 4 C 7 4, 4 8, 4 13 C 4 18, 8 21, 12 21 C 16 21, 20 18, 20 13 C 20 8, 17 4, 12 4" opacity="0.4" />

                {/* Bubbles / Sparkles for glow */}
                <motion.circle
                    cx="8" cy="12" r="1" fill="currentColor" stroke="none"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.circle
                    cx="16" cy="10" r="1" fill="currentColor" stroke="none"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.circle
                    cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                />

                {/* Leaf / Organic motif */}
                <motion.path
                    d="M12 4 Q 15 2, 18 4 Q 20 7, 18 10"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "12px", originY: "4px" }}
                />
            </svg>
        </div>
    );
};

export default AnimatedFacial;
