import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, Scissors } from 'lucide-react';

const Booking = ({ selectedService }) => {
    const [service, setService] = useState('');
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        if (selectedService) {
            setService(selectedService);
        }
    }, [selectedService]);

    const validateForm = () => {
        if (!name.trim()) return "Please enter your name";
        if (!phone.trim()) return "Please enter your phone number";
        if (!service) return "Please select a service";
        if (!date) return "Please select a date";
        return null;
    };

    const getOrdinal = (n) => {
        const ordinals = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];
        if (n <= 10) return ordinals[n - 1];

        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        setError("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        // Handle booking counter
        const currentCount = parseInt(localStorage.getItem('glam_booking_count') || '0') + 1;
        localStorage.setItem('glam_booking_count', currentCount.toString());
        const ordinalText = getOrdinal(currentCount);

        const whatsappNumber = "919567848426";

        const message = `${ordinalText} booking request ✨
 Name: ${name}
 Phone: ${phone}
 Service: ${service}
 Date: ${date}
  `;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");


    };


    return (
        <section id="booking" className="py-12 relative bg-black">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-20" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm mx-auto glass-card rounded-xl p-6 md:p-8 shadow-2xl overflow-hidden relative">
                    {/* Inner gold glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-glam-gold/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-glam-gold/5 rounded-full blur-3xl" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-6"
                    >

                        <span className="text-glam-gold uppercase tracking-[0.2em] font-medium block mb-2">
                            Reservation
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                            Book Your Experience
                        </h2>
                        <p className="text-gray-400 mt-4 font-light">
                            Reserve your spot for a premium salon experience.
                        </p>
                    </motion.div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                    <User size={14} className="text-glam-gold" /> Name
                                </label>
                                <input
                                    value={name} onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                    <Phone size={14} className="text-glam-gold" /> Phone
                                </label>
                                <input
                                    value={phone} onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                    <Scissors size={14} className="text-glam-gold" /> Service
                                </label>
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors [&>option]:bg-black"
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="Classic Haircut">Classic Haircut</option>
                                    <option value="Beard Grooming">Beard Grooming</option>
                                    {/* Changed "Luxury Facial" to "HydraFacial" as per request */}
                                    <option value="HydraFacial">HydraFacial</option>
                                    <option value="Hair Colouring">Hair Colouring</option>
                                    <option value="Other">Other</option>
                                    <option value="Wedding Groom package">Wedding Groom package</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                    <Calendar size={14} className="text-glam-gold" /> Date
                                </label>
                                <input
                                    value={date} onChange={(e) => setDate(e.target.value)}
                                    type="date"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors [color-scheme:dark]"
                                />
                            </div>
                        </div>



                        {error && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-red-500/10 border border-red-500/20 p-2 rounded text-red-400 text-xs flex items-center gap-2"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                {error}
                            </motion.div>
                        )}

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-glam-gold text-black font-bold uppercase tracking-[0.2em] py-3 text-sm hover:bg-white transition-all duration-300"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Booking;
