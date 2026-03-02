import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import AnimatedScissors from './AnimatedScissors';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <AnimatedScissors className="h-6 w-6" />
                            <span className="text-xl font-serif font-bold tracking-wider">
                                GLAMZ <span className="text-glam-gold">STUDIO</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Elevating beauty standards with premium services and luxurious experiences.
                            Your beauty is our masterpiece.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon={<Facebook size={22} className="text-white" />} href="#" className="bg-[#1877F2] border-[#1877F2]" />
                            <SocialIcon icon={<Instagram size={22} className="text-white" />} href="#" className="bg-[#E1306C] border-[#E1306C]" />
                            <SocialIcon icon={
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                            } href="https://wa.me/919567848426" className="bg-white border-white" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-glam-gold">Explore</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <FooterLink text="Home" />
                            <FooterLink text="Salon Menu" />
                            <FooterLink text="About Us" />

                            <FooterLink text="Contact" />
                        </ul>
                    </div>

                    {/* Salon Menu */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-glam-gold">Salon Menu</h4>

                        <ul className="space-y-4 text-gray-400 text-sm">
                            <FooterLink text="Hair Cutting" />
                            <FooterLink text="Hair Coloring" />
                            <FooterLink text="Makeup" />
                            <FooterLink text="Facials" />
                            <FooterLink text="Manicure & Pedicure" />
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-glam-gold">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-red-500 shrink-0" />
                                <span>Lagoon Mall,Near Kanachur Hospital/Medical College, Deralakatte, Mangalore.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                                <span>+91 9567848426</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                                <span>example@email.com</span>
                            </li>
                        </ul>


                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Glamz Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href, className }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border ${className} hover:opacity-90 hover:brightness-110`}
    >
        {icon}
    </a>
);

const FooterLink = ({ text }) => (

    <li>
        <a href={`#${text.toLowerCase()}`} className="hover:text-glam-gold transition-colors duration-300">
            {text}
        </a>
    </li>
);

export default Footer;
