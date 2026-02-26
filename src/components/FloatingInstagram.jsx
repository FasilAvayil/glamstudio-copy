import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const FloatingInstagram = () => {
    return (
        <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
            className="fixed bottom-8 left-8 z-[100] bg-[#E1306C] p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 hover:bg-[#C13584] transition-all focus:outline-none focus:ring-4 focus:ring-pink-500/50 group"
            aria-label="Visit our Instagram"
        >
            <Instagram size={24} className="text-white" />

            {/* Ambient pulse effect */}
            <div className="absolute inset-0 rounded-full bg-pink-400/20 animate-ping pointer-events-none" />
        </motion.a>
    );
};

export default FloatingInstagram;
