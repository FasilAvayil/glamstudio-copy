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
                        className="glass-card p-6 md:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between"
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
                                        <p className="text-gray-400 uppercase">Lagoon Mall,near Kanachur Hospital, Badiyar, Deralakatte, Mangaluru, Karnataka 575018, India </p>
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
                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                            Opening Hours
                                            <div className="h-[1px] flex-1 bg-glam-gold/20" />
                                        </h4>
                                        <div className="space-y-3 max-w-sm">
                                            {[
                                                { day: 'Mon', time: '9:00 AM - 10:00 PM' },
                                                { day: 'Tue', time: '9:00 AM - 10:00 PM' },
                                                { day: 'Wed', time: '9:00 AM - 10:00 PM' },
                                                { day: 'Thu', time: '9:00 AM - 10:00 PM' },
                                                { day: 'Fri', time: '9:00 AM - 10:00 PM' },
                                                { day: 'Sat', time: '9:00 AM - 10:00 PM' },
                                                { day: 'Sun', time: '9:00 AM - 10:00 PM', accent: true },
                                            ].map((item, idx) => (

                                                <div key={idx} className="flex justify-between items-center group/hour">
                                                    <span className={`text-sm tracking-widest uppercase ${item.accent ? 'text-glam-gold font-bold' : 'text-gray-400 group-hover/hour:text-white transition-colors'}`}>
                                                        {item.day}
                                                    </span>
                                                    <div className="flex-1 mx-4 h-[1px] border-b border-dotted border-white/10" />
                                                    <span className={`text-sm ${item.accent ? 'text-glam-gold font-bold' : 'text-gray-300'}`}>
                                                        {item.time}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

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

                    {/* Map Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10 group"
                    >
                        <iframe
                            src="https://www.google.com/maps?q=Lagoon+Mall,+Derlakkatte,+Mangalore,+Karnataka,+India&z=19&output=embed"
                            className="w-full h-full transition-all duration-700"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
