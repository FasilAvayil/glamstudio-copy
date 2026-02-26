import { motion } from 'framer-motion';
import { Scissors, PartyPopper } from 'lucide-react';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-glam-dark flex flex-col items-center justify-center text-center px-4"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                }}
                className="relative mb-12"
            >
                {/* Decorative Crescent */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-glam-gold mb-8 flex justify-center"
                >
                    <Scissors size={64} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                </motion.div>

                {/* Main Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-[0.2em] text-white">
                        <span className="text-glam-gold">GLAM</span>
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-serif mt-4 text-white tracking-[0.3em] font-light">
                        STUDIO
                    </h2>
                </motion.div>

                {/* Subtle Progress Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "linear" }}
                    className="h-[1px] bg-glam-gold/50 mt-12 mx-auto max-w-[200px]"
                />

                {/* Opening Soon Tagline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.1, type: "spring" }}
                    className="mt-8 mb-2 flex justify-center text-white"
                >
                    <PartyPopper size={32} strokeWidth={1.5} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-white tracking-[0.6em] font-serif uppercase text-lg md:text-xl font-light"
                >
                    Opening Soon
                </motion.div>
            </motion.div>

            {/* Ambient background particles/glows can be handled via CSS or additional motion elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glam-gold/5 blur-[120px] rounded-full" />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
