import { motion } from 'framer-motion';
import { Moon, Star } from 'lucide-react';

const RamadanBanner = () => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-gradient-to-r from-black via-glam-dark to-black border-b border-glam-gold/30 py-2 relative overflow-hidden z-[60]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-end gap-4">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex items-center gap-2"
                    >
                        <Moon size={14} className="text-glam-gold" />
                        <Star size={12} className="text-glam-gold" />
                    </motion.div>

                    <h2 className="text-glam-gold font-serif text-sm md:text-base font-bold tracking-[0.2em]">
                        RAMADAN KAREEM
                    </h2>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-glam-gold/20 blur-md rounded-full group-hover:bg-glam-gold/40 transition-all" />
                        <img
                            src="https://images.unsplash.com/photo-1552528174-297dc7ff854f?q=80&w=200&auto=format&fit=crop"
                            alt="Ramadan Lantern"
                            className="h-10 w-10 object-cover rounded-full border border-glam-gold/50 relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Subtle glow animation */}
            <div className="absolute inset-0 bg-glam-gold/5 animate-pulse pointer-events-none" />
        </motion.div>
    );
};

export default RamadanBanner;
