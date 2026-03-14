import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, Scissors, CheckCircle } from 'lucide-react';

const Booking = ({ selectedService }) => {
    const [service, setService] = useState('');
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookingSummary, setBookingSummary] = useState(null);


    useEffect(() => {
        if (selectedService) {
            setService(selectedService);
        }
    }, [selectedService]);

    const validateForm = () => {
        if (!name.trim()) return "Please enter your name";
        if (!phone.trim()) return "Please enter your phone number";

        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length < 10) return "Enter your correct mobile number";

        if (!service) return "Please select a service";
        if (!date) return "Please select a date";
        return null;
    };

    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setError("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);
        // Simulated delay for a premium feel
        await new Promise(resolve => setTimeout(resolve, 800));

        // Handle daily booking counter
        const today = new Date().toLocaleDateString('en-GB');
        const lastBookingDate = localStorage.getItem('glam_booking_date');
        let currentCount = 1;

        if (lastBookingDate === today) {
            currentCount = parseInt(localStorage.getItem('glam_daily_count') || '0') + 1;
        }

        localStorage.setItem('glam_booking_date', today);
        localStorage.setItem('glam_daily_count', currentCount.toString());
        const ordinalText = getOrdinal(currentCount);

        const whatsappNumber = "919567848426";

        const formattedDate = new Date(date).toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const now = new Date();
        const currentTime = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        const requestDate = now.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const message = `${currentCount}.NEW RESERVATION: GLAMZ STUDIO ✨%0A%0A` +
            `━━━━━━━━━━━━━━━━━━━━%0A` +
            `👤 CLIENT: ${name}%0A` +
            `📞 PHONE: ${phone}%0A` +
            `✂️ SERVICE: ${service}%0A` +
            `📅 APPOINTMENT: ${formattedDate}%0A` +
            `🕒 REQUESTED: ${currentTime}, ${requestDate}%0A` +
            `━━━━━━━━━━━━━━━━━━━━`;

        const url = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(url, "_blank");

        setIsSubmitting(false);
        // Success handling
        setBookingSummary({
            number: currentCount,
            name,
            phone,
            service,
            date: formattedDate,
            time: currentTime,
            requestDate: requestDate
        });
        setIsSuccess(true);
        setName("");
        setPhone("");
        setDate("");
        setService("");

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
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

                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.form
                                key="booking-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-4"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                            <User size={14} className="text-glam-gold" /> Name
                                        </label>
                                        <input
                                            value={name} onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                            <Phone size={14} className="text-glam-gold" /> Phone
                                        </label>
                                        <input
                                            value={phone}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, '').slice(0, 13);
                                                setPhone(value);
                                            }}
                                            type="tel"
                                            required
                                            placeholder="Enter your correct mobile number"
                                            className="w-full bg-white/5 border border-white/10 rounded-sm p-2.5 text-white text-sm focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors"
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
                                            required
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
                                            required
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
                                        disabled={isSubmitting}
                                        className={`w-full bg-glam-gold text-black font-bold uppercase tracking-[0.2em] py-3 text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            'Confirm Booking'
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success-message"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                                    className="flex justify-center mb-6"
                                >
                                    <div className="bg-glam-gold/20 p-4 rounded-full">
                                        <CheckCircle size={48} className="text-glam-gold" />
                                    </div>
                                </motion.div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-4">Thank You for Choosing Glamz!</h3>

                                <div className="text-left bg-white/5 p-4 rounded-lg border border-white/10 mb-6 space-y-3">
                                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                                        <span className="text-gray-400 uppercase tracking-widest font-medium">Serial No:</span>
                                        <span className="text-glam-gold font-bold border-b border-glam-gold/30 pb-0.5">#{bookingSummary?.number?.toString().padStart(2, '0')}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                                        <span className="text-gray-400 uppercase tracking-widest font-medium">Client:</span>
                                        <span className="text-glam-gold font-bold border-b border-glam-gold/30 pb-0.5">{bookingSummary?.name}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                                        <span className="text-gray-400 uppercase tracking-widest font-medium">Phone:</span>
                                        <span className="text-glam-gold font-bold border-b border-glam-gold/30 pb-0.5">{bookingSummary?.phone}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                                        <span className="text-gray-400 uppercase tracking-widest font-medium">Service:</span>
                                        <span className="text-glam-gold font-bold border-b border-glam-gold/30 pb-0.5">{bookingSummary?.service}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                                        <span className="text-gray-400 uppercase tracking-widest font-medium">Appt Date:</span>
                                        <span className="text-glam-gold font-bold border-b border-glam-gold/30 pb-0.5">{bookingSummary?.date}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                                        <span className="text-gray-400 uppercase tracking-widest font-medium">Req At:</span>
                                        <span className="text-glam-gold font-bold border-b border-glam-gold/30 pb-0.5">{bookingSummary?.time}, {bookingSummary?.requestDate}</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-[11px] leading-relaxed mb-8 italic">
                                    Your request has been sent to WhatsApp. Our concierge will contact you shortly to finalize your appointment.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-glam-gold text-xs uppercase tracking-widest border border-glam-gold/30 px-6 py-2 hover:bg-glam-gold hover:text-black transition-all"
                                >
                                    Back to Form
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default Booking;
