import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const FloatingInstagram = () => {
    return (
        <motion.a
            href="https://www.instagram.com/glamzstudio_official?igsh=MTRtYXpld2M0NGM2cA=="
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a smooth "expo out" feel
                delay: 0.6
            }}
            className="fixed bottom-48 right-6 z-[100] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 transition-all focus:outline-none focus:ring-4 focus:ring-pink-500/50 group overflow-hidden"
            aria-label="Follow us on Instagram"
            style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
        >
            <Instagram size={24} className="text-white" />

            {/* Ambient pulse effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 animate-ping pointer-events-none" />
        </motion.a>
    );
};

export default FloatingInstagram;
