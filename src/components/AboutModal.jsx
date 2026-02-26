import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Shield, Star } from 'lucide-react';

const AboutModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-glam-dark border border-glam-gold/20 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-glam-gold transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                            <span className="text-glam-gold uppercase tracking-[0.2em] font-medium block mb-2">
                                Discover More
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 border-b border-glam-gold/10 pb-6">
                                The Glam Studio Philosophy
                            </h2>

                            <div className="space-y-8 text-gray-300">
                                <section className="flex gap-4">
                                    <div className="mt-1">
                                        <Sparkles className="text-glam-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-white mb-2">Our Vision</h3>
                                        <p className="leading-relaxed">
                                            We view beauty as a holistic journey. Our goal isn't just to change how you look, but to enhance how you feel. Every cut, color, and treatment is a personalized ritual designed to celebrate your unique identity.
                                        </p>
                                    </div>
                                </section>

                                <section className="flex gap-4">
                                    <div className="mt-1">
                                        <Shield className="text-glam-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-white mb-2">Uncompromising Standards</h3>
                                        <p className="leading-relaxed">
                                            Luxury means peace of mind. We exclusively use world-class products like L'Oréal Professionnel and Kérastase. Our hygiene protocols are medical-grade, ensuring that your sanctuary of beauty is also one of safety.
                                        </p>
                                    </div>
                                </section>

                                <section className="flex gap-4">
                                    <div className="mt-1">
                                        <Star className="text-glam-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-white mb-2">The Experience</h3>
                                        <p className="leading-relaxed">
                                            From the moment you step into Glam Studio, the world outside fades away. Our space is curated to be a sensory retreat—with ambient lighting, premium aesthetics, and a team dedicated to your absolute comfort.
                                        </p>
                                    </div>
                                </section>
                            </div>

                            <div className="mt-12 flex justify-center">
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-glam-gold text-black font-bold tracking-widest hover:bg-white transition-all duration-300"
                                >
                                    BACK TO SITE
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AboutModal;
