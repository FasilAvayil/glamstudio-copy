import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingCall = () => {
    const whatsappNumber = "919980658535"; // Declared outside JSX
    return (
        <motion.a
            href="tel:+919980658535"
            initial={{ opacity: 0, x: 100, rotate: 45 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8 
            }}
            className="fixed bottom-12 right-6 z-[100] bg-blue-600 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/30 hover:bg-blue-700 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/50 group overflow-hidden"
            aria-label="Call Us"
            style={{
                boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)'
            }}
        >
            <Phone size={24} className="text-white drop-shadow-lg" />

            {/* Ambient pulse effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse pointer-events-none" />

            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.a>
    );
};

export default FloatingCall;
