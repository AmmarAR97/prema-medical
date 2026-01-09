import { motion } from "framer-motion";

const brands = [
    "Sebamed", "Johnson & Johnson", "CeraVe", "Cetaphil", "Minimalist", "Venusia",
    "Pedigree", "Whiskas", "Drools", "Mixtard", "Basalog", "Accu-Chek"
];

const Brands = () => {
    return (
        <section className="py-20 bg-white border-y border-secondary/20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <p className="text-center text-primary font-bold text-xs mb-12 uppercase tracking-[0.3em]">Authorized Premium Partners</p>

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 opacity-60 hover:opacity-100 transition-opacity duration-700">
                    {brands.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-default"
                        >
                            <span className="text-xl md:text-2xl font-heading font-bold text-charcoal/50 group-hover:text-primary transition-all duration-300">
                                {brand}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Brands;
