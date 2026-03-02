import React from 'react';
import { motion } from 'framer-motion';

const AnimatedScissors = ({ className = "h-6 w-6", animate = true }) => {
    return (
        <div className={`relative flex items-center justify-center ${className} overflow-visible text-glam-gold`}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
            >
                {/* Top Blade & Bottom Handle */}
                <motion.g
                    animate={animate ? {
                        rotate: [0, -20, 0],
                    } : {}}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "12px 12px" }}
                >
                    <circle cx="6" cy="18" r="3" />
                    <path d="M20 4L8.12 15.88" />
                </motion.g>

                {/* Bottom Blade & Top Handle */}
                <motion.g
                    animate={animate ? {
                        rotate: [0, 20, 0],
                    } : {}}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "12px 12px" }}
                >
                    <circle cx="6" cy="6" r="3" />
                    <path d="M8.12 8.12L20 20" />
                </motion.g>

                {/* Pivot point */}
                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        </div>
    );
};


export default AnimatedScissors;


