import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-glam-gold uppercase tracking-[0.2em] font-medium">
                        Visit Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                        Find Our Studio
                    </h2>
                    <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif text-white mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center shrink-0">
                                        <MapPin className="text-red-500" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Our Address </h4>
                                        <p className="text-gray-400 uppercase">Lagoon Mall, Derlakatte, Mangalore, Karnataka, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center shrink-0">
                                        <Phone className="text-blue-500" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Phone Number</h4>
                                        <p className="text-gray-400">+91 9567848426</p>
                                    </div>
                                </div>



                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center shrink-0">
                                        <Clock className="text-glam-gold" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Opening Hours</h4>
                                        <p className="text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                                        <p className="text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center shrink-0">
                                        <Mail className="text-[#EA4335]" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-400">fasil@glamstudio.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://www.google.com/maps/search/?api=1&query=Lagoon+Mall,+Derlakatte,+Mangalore,+Karnataka,+India',
                                        '_blank'
                                    )
                                }
                                className="flex-1 py-4 border border-glam-gold text-glam-gold font-bold tracking-widest hover:bg-glam-gold hover:text-black transition-all duration-300"
                            >
                                GET DIRECTIONS
                            </button>
                        </div>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden border border-white/10 group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop"
                            alt="Map Location"
                            className="w-full h-full object-cover grayscale opacity-50 contrast-125 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-glam-dark/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="p-8 rounded-full glass-gold animate-pulse">
                                <MapPin size={48} className="text-red-500" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default Location;
