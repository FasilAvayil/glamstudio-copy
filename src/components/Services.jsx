import { motion } from 'framer-motion';

const services = [
    {
        title: 'Classic Haircut',
        description: 'Expert cuts and precision styling for the modern man.',
        image: 'assets/images/classic-haircut.png',
    },
    {
        title: 'Beard Grooming',
        description: 'Masterful beard trimming, shaping, and hot towel treatment.',
        image: 'assets/images/beard-grooming.png',
    },
    {
        // Changed "Luxury Facial" to "HydraFacial" as per request
        title: 'HydraFacial',
        description: 'Advanced deep-cleansing facial specially tailored for men’s skin.',
        image: 'assets/images/hydral-facial.png',
    },
    {
        title: 'Hair Colouring',
        description: 'Professional coloring services from grey coverage to trend highlights.',
        image: 'assets/images/hair-coloring.png',
    },
    {
        title: " Hair Spa",
        description: 'Relaxing hair spa treatment to nourish, repair, and revitalize your hair.',
        image: 'assets/images/hair-spa.png',
    },
    {
        title: 'Wedding Groom package',
        description: 'Complete grooming package for grooms, including hair, beard, facial, manicure, and pedicure.',
        image: 'assets/images/wedding-groom.png',
    },
];

const Services = ({ onBookNow }) => {
    return (
        <section id="services" className="py-20 bg-glam-dark relative">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-glam-gold uppercase tracking-[0.2em] font-medium">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                        Exclusive Services
                    </h2>
                    <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-[380px] aspect-square overflow-hidden rounded-lg cursor-pointer mx-auto w-full max-w-[380px]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                            <div className="absolute inset-x-6 bottom-6 p-6 rounded-xl glass border border-white/10 group-hover:translate-y-[-8px] transition-transform duration-500">
                                <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300 text-sm leading-tight mb-4 opacity-100 transition-opacity duration-500">
                                    {service.description}
                                </p>
                                <div className="flex justify-start">
                                    <button
                                        onClick={() => onBookNow(service.title)}
                                        className="text-white text-xs uppercase tracking-wider border-b border-glam-gold pb-1 hover:text-glam-gold transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Services;
