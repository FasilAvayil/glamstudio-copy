import React from 'react';
import { motion } from 'framer-motion';

const AnimatedMassage = ({ className = "h-6 w-6" }) => {
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
                {/* Threading Needle & Thread */}
                <motion.path
                    d="M 6,6 L 12,12"
                    strokeWidth="1"
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "6px", originY: "6px" }}
                />
                <circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.4" />

                {/* Massage / Hand Motif */}
                <motion.path
                    d="M 12,12 Q 13,8 16,8 Q 19,8 19,12 Q 19,16 16,18 L 12,18"
                    animate={{ x: [0, 1.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M 12,12 Q 11,16 8,16 Q 5,16 5,12 Q 5,8 8,6 L 12,6"
                    animate={{ x: [0, -1.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
            </svg>
        </div>
    );
};

export default AnimatedMassage;
