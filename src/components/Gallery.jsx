import { motion } from 'framer-motion';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop',
        title: 'Precision Cuts',
        category: 'Hair'
    },
    {
        url: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2670&auto=format&fit=crop',
        title: 'Bridal Glow',
        category: 'Makeup'
    },
    {
        url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2570&auto=format&fit=crop',
        title: 'Artistic Nails',
        category: 'Nails'
    },
    {
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2687&auto=format&fit=crop',
        title: 'Evening Glam',
        category: 'Makeup'
    },
    {
        url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop',
        title: 'Color Perfection',
        category: 'Hair'
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-glam-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-glam-gold uppercase tracking-[0.2em] font-medium">
                        Visual Story
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                        Our Portfolio
                    </h2>
                    <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-80 overflow-hidden rounded-xl cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${image.url})` }}
                            />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <span className="text-glam-gold text-xs uppercase tracking-widest font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {image.category}
                                </span>
                                <h3 className="text-white text-2xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {image.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
