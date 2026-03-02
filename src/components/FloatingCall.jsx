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
            className="fixed bottom-12 right-6 z-[100] bg-blue-600 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 hover:bg-blue-700 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/50 group"
            aria-label="Call Us"
        >
            <Phone size={24} className="text-white" />

            {/* Ambient pulse effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping pointer-events-none" />
        </motion.a>
    );
};

export default FloatingCall;
