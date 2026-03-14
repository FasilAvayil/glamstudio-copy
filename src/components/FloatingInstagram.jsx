import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const FloatingInstagram = () => {
    return (
        <motion.a
            href="https://www.instagram.com/glamzstudio_official?igsh=MTRtYXpld2M0NGM2cA=="
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 100, rotate: -45 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.1
            }}
            className="fixed bottom-32 right-6 z-[100] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/30 transition-all focus:outline-none focus:ring-4 focus:ring-pink-500/50 group overflow-hidden"
            aria-label="Follow us on Instagram"
            style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                boxShadow: '0 0 20px rgba(220, 39, 67, 0.4)'
            }}
        >
            <Instagram size={28} className="text-white drop-shadow-lg" />

            {/* Ambient pulse effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse pointer-events-none" />
            
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.a>
    );
};

export default FloatingInstagram;
