import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedScissors from './AnimatedScissors';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const timer = setInterval(() => setTime(new Date()), 1000);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '/#about' },
        { name: 'Salon Menu', href: '/#salon-menu' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Location', href: '/#location' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0 glass py-1 md:py-3 border-b border-white/5 shadow-lg' : 'top-0 bg-transparent py-2 md:py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer group">
                        {/* <AnimatedScissors className="h-9 w-9" animate={false} /> */}
                        <img src="assets/icons/final_logo1.png" alt="logo" className="h-12 w-12 md:h-16 md:w-16 object-contain" />

                        <div className="flex flex-col">
                            <motion.div
                                className="text-lg md:text-2xl font-serif font-bold tracking-wider flex items-center"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                <div className="flex text-white">
                                    {"GLAMZ".split("").map((char, i) => (
                                        <motion.span
                                            key={`glam-${i}`}
                                            variants={{
                                                hidden: { y: -20, opacity: 0 },
                                                visible: { y: 0, opacity: 1 }
                                            }}
                                            transition={{ type: "spring", stiffness: 150 }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex text-glam-gold ml-2">
                                    {"STUDIO".split("").map((char, i) => (
                                        <motion.span
                                            key={`studio-${i}`}
                                            variants={{
                                                hidden: { y: -20, opacity: 0 },
                                                visible: { y: 0, opacity: 1 }
                                            }}
                                            transition={{ type: "spring", stiffness: 150 }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="text-[10px] text-white/80 tracking-[0.4em] font-medium uppercase mt-0.5 border-t border-white/10 pt-0.5"
                            >
                                Premium Mens Salon
                            </motion.div>
                        </div>
                    </div>

                    {/* Desktop Menu & Clock */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.href.includes('#')) {
                                        const id = link.href.split('#')[1];
                                        if (id) {
                                            const element = document.getElementById(id);
                                            if (element) {
                                                e.preventDefault();
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        } else if (link.href === '#') {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }
                                }}
                                className="text-gray-300 hover:text-glam-gold transition-colors duration-300 text-sm uppercase tracking-widest font-medium"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Digital Clock */}
                        <div className="pl-4 border-l border-white/20">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-white font-mono text-lg tracking-tighter leading-none font-medium">
                                    {formatTime(time).split(' ')[0]}
                                </span>
                                <span className="text-glam-gold text-sm uppercase tracking-[0.2em] font-medium leading-none mt-1">
                                    {formatTime(time).split(' ')[1]}
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-glam-gold transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 overflow-hidden"
                        style={{ position: 'relative' }}
                    >
                        {/* Background Image */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: 'url(/assets/images/barber-bg.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                filter: 'brightness(0.35) saturate(0.8)',
                                zIndex: 0,
                            }}
                        />
                        {/* Gradient Overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,8,5,0.92) 100%)',
                                zIndex: 1,
                            }}
                        />

                        {/* Content */}
                        <div className="relative px-6 pt-6 pb-8 space-y-1" style={{ zIndex: 2 }}>
                            {/* Decorative top line */}
                            <div className="flex items-center gap-3 mb-5">
                                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6))' }} />
                                <span style={{ color: '#D4AF37', fontSize: '10px', letterSpacing: '0.3em', fontWeight: 600, textTransform: 'uppercase' }}>Menu</span>
                                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.6))' }} />
                            </div>

                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        if (link.href.includes('#')) {
                                            e.preventDefault();
                                            const id = link.href.split('#')[1];
                                            setIsOpen(false);
                                            
                                            // Handle scroll with a slight delay to allow menu animation to start
                                            // and DOM to stabilize for scrollIntoView
                                            setTimeout(() => {
                                                if (id) {
                                                    const element = document.getElementById(id);
                                                    if (element) {
                                                        element.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                } else {
                                                    // Home case '#'
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }
                                            }, 200);
                                        } else {
                                            setIsOpen(false);
                                        }
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07, duration: 0.3 }}
                                    className="block text-center py-3 text-base font-serif tracking-widest uppercase transition-all duration-300"
                                    style={{ color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                                    onMouseEnter={e => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.letterSpacing = '0.25em'; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.letterSpacing = '0.1em'; }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* Clock */}
                            <div className="flex justify-center pt-4 pb-2">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-white font-mono text-xl tracking-tighter leading-none font-medium">
                                        {formatTime(time).split(' ')[0]}
                                    </span>
                                    <span className="text-glam-gold text-xs uppercase tracking-[0.2em] font-medium leading-none mt-1">
                                        {formatTime(time).split(' ')[1]}
                                    </span>
                                </motion.div>
                            </div>

                            {/* Book Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                className="pt-3"
                            >
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-full py-3 font-bold tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #D4AF37 100%)',
                                        color: '#0a0a0a',
                                        fontSize: '13px',
                                        letterSpacing: '0.18em',
                                        boxShadow: '0 0 20px rgba(212,175,55,0.4)',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(212,175,55,0.7)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,55,0.4)'; }}
                                >
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                    </svg>
                                    BOOK YOUR APPOINTMENT
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
