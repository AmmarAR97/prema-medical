import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
    {
        id: 1,
        title: "Medicines",
        desc: "All prescription & OTC medicines available.",
        image: "images/medicine_premium.png",
        color: "bg-blue-50"
    },
    {
        id: 2,
        title: "Baby Care",
        desc: "Sebamed, J&J, lotions & more for your little ones.",
        image: "images/baby_care_premium.png",
        color: "bg-pink-50"
    },
    {
        id: 3,
        title: "Skin Care",
        desc: "CeraVe, Cetaphil, Minimalist & clinical skincare.",
        image: "images/skin_care_premium.png",
        color: "bg-purple-50"
    },
    {
        id: 4,
        title: "Pet Foods",
        desc: "Pedigree, Whiskas, Drools combined nutrition.",
        image: "images/pet_food_premium.png",
        color: "bg-orange-50"
    },
    {
        id: 5,
        title: "Insulin Care",
        desc: "Mixtard, Basalog & diabetic care needs.",
        image: "images/insulin_premium.png",
        color: "bg-blue-50"
    },
    {
        id: 6,
        title: "Wellness & Vitamins",
        desc: "Premium supplements for your daily health boost.",
        image: "images/wellness_supplements_product.png",
        color: "bg-green-50"
    }
];

const Products = () => {
    return (
        <section id="products" className="py-16 bg-transparent relative overflow-hidden scroll-mt-20">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-white border border-primary/20 text-primary font-semibold text-sm mb-4 shadow-sm">
                        Our Products
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4 tracking-tight">
                        Comprehensive <span className="text-primary">Healthcare Solutions</span>
                    </h2>
                    <p className="text-charcoal/70 text-lg leading-relaxed">
                        Everything you need for your family's health under one roof. Curated for quality and effectiveness.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-[2rem] overflow-hidden border border-secondary/20 hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-[450px] flex flex-col cursor-pointer hover:scale-[1.02]"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image Area - Heavy & Dominant (75% height) */}
                            <div className="h-[75%] relative overflow-hidden bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-500">
                                {/* Default subtle overlay hint */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-20"></div>
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-75 opacity-20 group-hover:opacity-40 transition-all duration-500 z-10"></div>
                                <motion.img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 relative z-0"
                                />
                            </div>

                            {/* Text Area - Minimal (25% height) */}
                            <div className="h-[25%] p-6 relative z-10 flex flex-col justify-center bg-white/80 backdrop-blur-sm border-t border-secondary/20">
                                <h3 className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors mb-1">{product.title}</h3>
                                <p className="text-charcoal/60 text-sm leading-snug line-clamp-2">{product.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
