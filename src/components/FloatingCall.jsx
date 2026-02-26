import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingCall = () => {
    return (
        <motion.a
            href="tel:9567848426"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
            className="fixed bottom-8 right-8 z-[100] bg-blue-600 px-6 py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 border-2 border-white/20 hover:bg-blue-700 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/50 group"
            aria-label="Call Us"
        >
            <Phone size={16} className="text-white" />
            <span className="text-white text-xs tracking-wider">CALL NOW</span>

            {/* Ambient pulse effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping pointer-events-none" />
        </motion.a>
    );
};

export default FloatingCall;
