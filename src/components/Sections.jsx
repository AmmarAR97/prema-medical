import { motion } from "framer-motion";
import { CheckCircle, MapPin, Phone, Clock, Facebook, Instagram, Wallet, HeartHandshake, Map, Heart, FileText, Stethoscope, Pill, Activity, Ambulance, ShieldCheck, Calendar, MessageCircle } from "lucide-react";

export const Features = () => {
    const features = [
        { icon: <Wallet size={28} aria-hidden="true" />, title: "Affordable Prices", desc: "Best value for healthcare needs without compromising quality." },
        { icon: <HeartHandshake size={28} aria-hidden="true" />, title: "Friendly Service", desc: "Expert guidance with a personal touch you can trust." },
        { icon: <MapPin size={28} aria-hidden="true" />, title: "Easy Access", desc: "Conveniently on Pulkeri Bypass with ample parking." },
        { icon: <Heart size={28} aria-hidden="true" />, title: "Community Trust", desc: "Serving Karkala families with care and dedication." },
    ];

    return (
        <section id="features" className="py-20 bg-white relative overflow-hidden scroll-mt-20">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mt-4 tracking-tight">Karkala's Most Trusted Pharmacy</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group text-center p-8 rounded-2xl bg-white border border-secondary/20 shadow-md hover:border-primary/30 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 border border-secondary/30 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 text-primary">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">{f.title}</h3>
                            <p className="text-charcoal/70 leading-relaxed text-sm group-hover:text-charcoal/90 transition-colors">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Services = () => {
    return (
        <section id="services" className="py-16 bg-secondary/10 text-charcoal overflow-hidden relative border-t border-secondary/20 scroll-mt-20">
            {/* Premium Ambient Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">Our Services</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 leading-[1.1] tracking-tight text-charcoal">More Than Just <br /> <span className="text-primary">Medicines</span></h2>
                        <p className="text-charcoal/70 text-lg mb-12 leading-relaxed max-w-xl">We go the extra mile to ensure your well-being with our comprehensive range of pharmaceutical services tailored for the Karkala community.</p>

                        <div className="space-y-10">
                            {[
                                { icon: FileText, title: "Prescription Fulfillment", desc: "Quick and accurate dispensing of all your prescribed medications." },
                                { icon: Stethoscope, title: "Expert Pharmacist Consultation", desc: "Professional advice on medication usage and health management." },
                                { icon: Pill, title: "Generic Medicine Advice", desc: "Cost-effective alternatives without compromising on quality." },
                                { icon: Activity, title: "Health Supplements", desc: "Wide range of vitamins and supplements for your daily wellness." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group cursor-default"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-secondary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <item.icon size={24} className="text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-charcoal/70 text-base leading-relaxed max-w-md">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-50"></div>
                        <div className="bg-white p-6 md:p-8 rounded-[3rem] border border-secondary/20 shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="text-center mb-6 relative z-10">
                                <h3 className="text-2xl font-bold mb-2 text-charcoal">Visit Us Today</h3>
                                <p className="text-primary font-medium text-sm">Experience the difference in care.</p>
                            </div>

                            {/* Map - Responsive height */}
                            <div className="relative z-10 h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-secondary/20 mb-6 shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.938!2d74.9947972!3d13.194398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb570001d241f5%3A0x5f7aa9684de368e8!2sPrema%20medicals!5e0!3m2!1sen!2sin!4v1736376665000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Prema Medicals Location on Google Maps"
                                    className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                ></iframe>
                            </div>

                            {/* Hours */}
                            <div className="relative z-10 bg-secondary/10 p-4 rounded-2xl text-center border border-secondary/20 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-500">
                                <div className="flex items-center justify-center gap-3">
                                    <Clock className="text-primary w-6 h-6" aria-hidden="true" />
                                    <div>
                                        <span className="font-bold text-charcoal">Open Everyday</span>
                                        <span className="text-charcoal/70 ml-2">8 AM - 10 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer id="location" className="py-12 bg-white relative overflow-hidden scroll-mt-20 border-t border-secondary/20">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-8">
                    {/* Desktop: Flex with space-between for edge alignment and equal gaps */}
                    <div className="hidden lg:flex lg:justify-between lg:items-start mb-8">

                        {/* Brand Column */}
                        <div className="flex-shrink-0 max-w-[240px]">
                            <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                                PREMA <span className="text-charcoal">MEDICALS</span>
                            </h3>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                                We remember your name, your story, your needs. Where every customer becomes family. Because good health begins with someone who truly cares.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary/30 text-xs text-primary font-semibold border border-secondary/50">
                                    <ShieldCheck size={12} aria-hidden="true" /> Licensed
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary/30 text-xs text-primary font-semibold border border-secondary/50">
                                    <Calendar size={12} aria-hidden="true" /> Est. 2025
                                </span>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="flex-shrink-0">
                            <h4 className="text-charcoal font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
                            <nav className="space-y-2.5">
                                <a href="#" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Home</a>
                                <a href="#products" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Products</a>
                                <a href="#features" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Why Choose Us</a>
                                <a href="#services" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Services</a>
                                <a href="#location" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Location</a>
                            </nav>
                        </div>

                        {/* Contact Column */}
                        <div className="flex-shrink-0">
                            <h4 className="text-charcoal font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2.5">
                                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <p className="text-charcoal/70 text-sm leading-relaxed">Karkala Inn Building, Pulkeri Bypass</p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Phone size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <a href="tel:9611341740" className="text-primary font-semibold hover:text-primary-dark transition-colors text-sm">9611341740</a>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Clock size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <p className="text-charcoal/70 text-sm">8 AM - 10 PM Everyday</p>
                                </div>
                            </div>
                        </div>

                        {/* Connect Column */}
                        <div className="flex-shrink-0">
                            <h4 className="text-charcoal font-bold text-sm mb-4 uppercase tracking-wider">Connect</h4>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">Follow us for health tips and updates</p>
                            <div className="flex gap-2.5">
                                <a href="https://www.instagram.com/premamedical/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-9 h-9 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-primary">
                                    <Instagram size={16} aria-hidden="true" />
                                </a>
                                <a href="https://wa.me/919611341740" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="w-9 h-9 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-primary">
                                    <MessageCircle size={16} aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile/Tablet: Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-y-10 gap-x-8 mb-8">

                        {/* Brand Column */}
                        <div>
                            <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                                PREMA <span className="text-charcoal">MEDICALS</span>
                            </h3>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                                We remember your name, your story, your needs. Where every customer becomes family. Because good health begins with someone who truly cares.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary/30 text-xs text-primary font-semibold border border-secondary/50">
                                    <ShieldCheck size={12} aria-hidden="true" /> Licensed
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary/30 text-xs text-primary font-semibold border border-secondary/50">
                                    <Calendar size={12} aria-hidden="true" /> Est. 2025
                                </span>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 className="text-charcoal font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
                            <nav className="space-y-2.5">
                                <a href="#" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Home</a>
                                <a href="#products" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Products</a>
                                <a href="#features" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Why Choose Us</a>
                                <a href="#services" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Services</a>
                                <a href="#location" className="block text-charcoal/70 hover:text-primary transition-colors text-sm">Location</a>
                            </nav>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h4 className="text-charcoal font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2.5">
                                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <p className="text-charcoal/70 text-sm leading-relaxed">Karkala Inn Building, Pulkeri Bypass</p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Phone size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <a href="tel:9611341740" className="text-primary font-semibold hover:text-primary-dark transition-colors text-sm">9611341740</a>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Clock size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <p className="text-charcoal/70 text-sm">8 AM - 10 PM Everyday</p>
                                </div>
                            </div>
                        </div>

                        {/* Connect Column */}
                        <div>
                            <h4 className="text-charcoal font-bold text-sm mb-4 uppercase tracking-wider">Connect</h4>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">Follow us for health tips and updates</p>
                            <div className="flex gap-2.5">
                                <a href="https://www.instagram.com/premamedical/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-9 h-9 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-primary">
                                    <Instagram size={16} aria-hidden="true" />
                                </a>
                                <a href="https://wa.me/919611341740" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="w-9 h-9 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-primary">
                                    <MessageCircle size={16} aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-6 border-t border-secondary/20">
                        <p className="text-center text-charcoal/50 text-xs">&copy; 2026 Prema Medicals. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
