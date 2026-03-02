import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWash = ({ className = "h-6 w-6" }) => {
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
                {/* Shower Head */}
                <path d="M4 4 L10 4 Q14 4 14 8 L14 10" />
                <rect x="11" y="10" width="6" height="2" rx="1" fill="currentColor" stroke="none" />

                {/* Water Droplets */}
                <motion.path
                    d="M12 14 L12 15"
                    animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.path
                    d="M14 14 L14 16"
                    animate={{ y: [0, 6, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.path
                    d="M16 14 L16 15"
                    animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />

                {/* Waves at bottom */}
                <motion.path
                    d="M4 20 Q 8 18, 12 20 T 20 20"
                    animate={{
                        d: [
                            "M4 20 Q 8 18, 12 20 T 20 20",
                            "M4 20 Q 8 22, 12 20 T 20 20",
                            "M4 20 Q 8 18, 12 20 T 20 20"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
};

export default AnimatedWash;
