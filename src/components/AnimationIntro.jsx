import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SCENES = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop',
        title: 'Excellence in Every Detail',
        subtitle: 'Experience Premium Beauty & Wellness',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
        title: 'Artistry Meets Elegance',
        subtitle: 'Crafted by Master Stylists',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
        title: 'Your Sanctuary of Calm',
        subtitle: 'Renew Your Body and Soul',
    },
];

const AnimationIntro = ({ onComplete }) => {
    const [currentScene, setCurrentScene] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (currentScene < SCENES.length) {
            const timer = setTimeout(() => {
                setCurrentScene((prev) => prev + 1);
            }, 3500); // 3.5 seconds per scene
            return () => clearTimeout(timer);
        } else {
            setIsExiting(true);
            setTimeout(onComplete, 1000); // Finish after exit animation
        }
    }, [currentScene, onComplete]);

    const handleSkip = () => {
        setIsExiting(true);
        setTimeout(onComplete, 500);
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
        >
            <AnimatePresence mode="wait">
                {currentScene < SCENES.length && (
                    <motion.div
                        key={SCENES[currentScene].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Background Image with Zoom and Pan Effect */}
                        <motion.div
                            initial={{ scale: 1.1, x: -20 }}
                            animate={{ scale: 1, x: 0 }}
                            transition={{ duration: 5, ease: "linear" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={SCENES[currentScene].image}
                                alt="Salon Scene"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black via-transparent to-black/30" />
                        </motion.div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-glam-gold uppercase tracking-[0.4em] mb-4 text-xs md:text-sm font-semibold"
                            >
                                {SCENES[currentScene].subtitle}
                            </motion.h3>
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl"
                            >
                                {SCENES[currentScene].title}
                            </motion.h2>

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="w-24 h-px bg-glam-gold"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Skip Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={handleSkip}
                className="absolute bottom-10 right-10 z-[110] text-white/50 hover:text-white text-xs tracking-widest uppercase border-b border-transparent hover:border-white transition-all duration-300"
            >
                Skip Intro
            </motion.button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-glam-gold/30 w-full z-[110]">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentScene + 1) / (SCENES.length + 1)) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-glam-gold"
                />
            </div>
        </motion.div>
    );
};

export default AnimationIntro;
