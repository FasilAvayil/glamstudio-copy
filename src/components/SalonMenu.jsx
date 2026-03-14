import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

import AnimatedScissors from './AnimatedScissors';
import AnimatedBeard from './AnimatedBeard';
import AnimatedWash from './AnimatedWash';
import AnimatedFacial from './AnimatedFacial';
import AnimatedMassage from './AnimatedMassage';
import AnimatedColor from './AnimatedColor';



const MenuCategory = ({ title, items, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-2xl border border-white/10 hover:border-glam-gold/30 transition-all duration-500 h-full"
    >
        <h3 className="text-xl font-serif text-glam-gold mb-6 pb-2 border-b border-glam-gold/20 flex items-center justify-between">
            <span className="flex items-center gap-3">
                {Icon && <Icon className="w-6 h-6" />}
                {title}
            </span>
            <span className="w-8 h-[1px] bg-glam-gold/30 ml-4 hidden sm:block"></span>
        </h3>
        <div className="space-y-4">
            {items.map((item, index) => (
                <MenuItem key={index} name={item.name} price={item.price} />
            ))}
        </div>
    </motion.div>
);


const MenuItem = ({ name, price }) => (
    <div className="group flex justify-between items-end gap-4 pb-2 border-b border-white/5 hover:border-glam-gold/10 transition-colors">
        <span className="text-gray-300 group-hover:text-white transition-colors flex-1 leading-tight">
            {name}
        </span>
        <div className="flex items-center gap-1 mb-0.5">
            <span className="text-xs text-glam-gold/70">₹</span>
            <span className="text-glam-gold font-bold tracking-wider">{price}</span>
        </div>
    </div>
);

// A placeholder structure that the user can later edit
const SalonMenu = () => {
    return (
        <div id="salon-menu" className="min-h-screen bg-glam-dark selection:bg-glam-gold selection:text-black font-sans flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-glam-gold uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2">
                        <Sparkles size={16} /> Our Offerings
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4">
                        Salon Menu
                    </h1>
                    <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Hair Services */}
                    <MenuCategory
                        title="Haircut & Styling"
                        icon={AnimatedScissors}
                        items={[
                            { name: "Setting (Gel/Wax)", price: "100" },
                            { name: "Buzz Cut", price: "150" },
                            { name: "Crew Cut", price: "150" },
                            { name: "Stylish Haircut", price: "150" },
                            { name: "Undercut", price: "199" },
                            { name: "Wash + Blow Dry", price: "199" },
                            { name: "Low Fade / High Fade", price: "229" },
                            { name: "Layer Cut", price: "249" },
                            { name: "Stylish Haircut with Styling", price: "249" },
                            { name: "Ironing", price: "299" },
                            { name: "Curling", price: "399" },
                            { name: "Straightening", price: "999" },
                            { name: "Smoothing", price: "1499" },
                            { name: "Keratin Treatment", price: "2499" },
                        ]} />


                    {/* Shaving & Beard */}
                    <MenuCategory
                        title="Shaving & Beard"
                        icon={AnimatedBeard}
                        items={[
                            { name: "Sharp Razor Line Up", price: "120" },
                            { name: "Normal Shaving", price: "120" },
                            { name: "Beard Line Design", price: "120" },
                            { name: "After Shave Face Massage", price: "120" },
                            { name: "Foam Shaving", price: "120" },
                            { name: "Cold Towel Shaving", price: "129" },
                            { name: "Gel Shaving", price: "139" },
                            { name: "Basic Beard", price: "149" },
                            { name: "Hot Towel Shaving", price: "149" },
                            { name: "Beard Oil Massage", price: "149" },
                            { name: "Stylish Beard", price: "199" },
                            { name: "Signature Shaving", price: "249" },
                            { name: "Charcoal Beard Clean Up", price: "249" },
                            { name: "Beard Coloring (Black)", price: "299" },
                            { name: "Luxury Shaving (Premium Products)", price: "349" },
                            { name: "Beard Coloring (Fashion Shade)", price: "399" },
                            { name: "Beard Smoothening", price: "499" },
                        ]} />

                    {/* Hair Care & Wash */}
                    <MenuCategory
                        title="Hair Care & Wash"
                        icon={AnimatedWash}
                        items={[
                            { name: "Normal Hair Wash", price: "49" },
                            { name: "Spa Shampoo Wash", price: "99" },
                            { name: "Xtenso Shampoo", price: "149" },
                            { name: "Basic Hair Spa", price: "499" },
                            { name: "Anti-Dandruff Hair Spa", price: "799" },
                            { name: "Hair Fall Spa", price: "1199" },
                        ]} />


                    {/* Facial & Skin Care */}
                    <MenuCategory
                        title="Facial & Skin Care"
                        icon={AnimatedFacial}
                        items={[
                            { name: "D-Tan", price: "499" },
                            { name: "Bleach", price: "499" },
                            { name: "Aroma Clean Up", price: "599" },
                            { name: "Lotus Clean-Up", price: "799" },
                            { name: "Fruit Facial", price: "999" },
                            { name: "Tan Clear Facial", price: "1199" },
                            { name: "Chocolate Facial", price: "1299" },
                            { name: "Ozone Facial", price: "1399" },
                            { name: "VLCC Pearl Facial", price: "1599" },
                            { name: "Lotus Gold Facial", price: "1999" },
                            { name: "Lotus Platinum Facial", price: "2499" },
                            { name: "O’Plus Facial", price: "2999" },
                        ]} />


                    {/* Threading & Misc */}
                    <MenuCategory
                        title="Threading & Massage"
                        icon={AnimatedMassage}
                        items={[
                            { name: "Eyebrow", price: "49" },
                            { name: "Forehead", price: "49" },
                            { name: "Head Massage (Coconut Oil)", price: "149" },
                            { name: "Head Massage (Navaratna Oil)", price: "199" },
                            { name: "Head Massage (Almond Oil)", price: "249" },
                        ]} />

                    {/* Coloring & Packages */}
                    <MenuCategory
                        title="Coloring & Packages"
                        icon={AnimatedColor}
                        items={[
                            { name: "Natural Black", price: "699" },
                            { name: "Dark Brown", price: "699" },
                            { name: "Medium Brown", price: "699" },
                            { name: "Basic Groom Package", price: "3999" },
                            { name: "Standard Groom Package", price: "4999" },
                            { name: "Premium Groom Package", price: "5999" },
                        ]} />

                </div>

                {/* <div className="my-12 text-center">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 text-white/70 hover:text-glam-gold transition-colors uppercase tracking-widest text-sm font-medium"
                    >
                        <ChevronLeft size={16} /> Back
                    </button>
                </div> */}
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default SalonMenu;
