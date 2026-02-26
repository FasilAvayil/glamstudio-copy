import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Faizal',
        role: 'Loyal Client',
        content: "The best salon experience I've ever had. Professional staff and absolutely stunning results with my makeup!",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1000&auto=format&fit=crop'
    },
    {
        name: 'Karthik',
        role: 'Regular Customer',
        content: "Precision haircut and a very relaxing atmosphere. Glam Studio is definitely my go-to place now.",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop'
    },
    {
        name: 'Mohammed Aslam',
        role: 'Bridal Client',
        content: "They treated me like royalty on my wedding day. The bridal package was perfect and highly recommended!",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1000&auto=format&fit=crop'
    }
];

const TestimonialCard = ({ testimonial }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 rounded-xl relative border border-white/10 hover:border-glam-gold/30 transition-all duration-500 group w-full max-w-2xl mx-auto"
    >
        <Quote className="absolute top-6 right-8 text-glam-gold/20 h-12 w-12 group-hover:text-glam-gold/40 transition-colors" />

        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 text-center md:text-left">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-glam-gold/30"
            />
            <div>
                <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                <p className="text-glam-gold text-sm uppercase tracking-wider">{testimonial.role}</p>
            </div>
        </div>

        <div className="flex justify-center md:justify-start mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-glam-gold fill-glam-gold" />
            ))}
        </div>

        <p className="text-gray-300 italic text-lg md:text-xl leading-relaxed text-center md:text-left">
            "{testimonial.content}"
        </p>
    </motion.div>
);

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-glam-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-glam-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-glam-gold uppercase tracking-[0.2em] font-medium">
                        Kind Words
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                        Client Testimonials
                    </h2>
                    <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
                </motion.div>

                {/* Focused Fade Component */}
                <div className="relative min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <TestimonialCard key={activeIndex} testimonial={testimonials[activeIndex]} />
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-glam-gold w-8' : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

