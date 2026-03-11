import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax Overlay */}
            <motion.div style={{ y }} className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat transform scale-110">
                    <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-glam-dark via-transparent to-black/30" />
                </div>
            </motion.div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h2 className="text-glam-gold uppercase tracking-[0.4em] mb-0 mt-4 md:mt-0 text-sm md:text-lg font-bold">
                        Premium Beauty & Wellness
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                        Redefine Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-glam-gold to-white">
                            Elegance
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="max-w-2xl mx-auto mb-10"
                >
                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                        Experience world-class men’s hair styling and grooming services in a
                        luxurious atmosphere designed for your relaxation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button
                        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base bg-glam-gold text-black font-bold tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105"
                    >
                        OUR SERVICES
                    </button>
                    <button
                        onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base border border-white text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        BOOK YOUR APPOINTMENT
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-glam-gold rounded-full" />
                </div>
            </div> */}
        </section>
    );
};

export default Hero;
