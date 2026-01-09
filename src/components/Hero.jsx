import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Activity } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-b from-white via-secondary/30 to-white flex items-center pt-0 overflow-hidden scroll-mt-20">
            {/* Dynamic Liquid Background - User Requested Style */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Mint Green Blob - Top Left */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] opacity-60 mix-blend-multiply"
                />

                {/* Soft Blue Blob - Top Right */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-secondary/40 rounded-full blur-[120px] opacity-70 mix-blend-multiply"
                />

                {/* Teal Blob - Bottom Left */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 40, 0],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-teal-200/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply"
                />

                {/* Center/Right Accent Blob */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[80px] opacity-50 mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Mobile Background Heartbeat - Subtle & Centered behind text */}
                    <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] z-[-1] opacity-20 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Mobile ECG Line */}
                            <motion.path
                                d="M 0 300 L 320 300 L 360 160 L 400 440 L 440 300 L 600 300"
                                stroke="#2E7D32"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: [0, 1, 1, 0],
                                    opacity: [0, 0.5, 0.5, 0]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    times: [0, 0.4, 0.6, 1]
                                }}
                            />
                            {/* Mobile Heart Shape */}
                            <motion.path
                                d="M 280 230 C 280 170, 330 140, 380 140 C 410 140, 440 155, 450 180 C 460 155, 490 140, 520 140 C 570 140, 620 170, 620 230 C 620 300, 560 380, 450 460 C 340 380, 280 300, 280 230 Z"
                                stroke="#2E7D32"
                                strokeWidth="6"
                                fill="none"
                                transform="translate(-20, 0)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {/* Text Content */}
                    <div className="text-charcoal space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-secondary/50 shadow-sm w-fit"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-sm font-medium text-charcoal/80">Open Everyday: 8 AM - 10 PM</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold leading-tight"
                        >
                            Your Trusted <br />
                            <span className="text-primary">Pharmacy</span> in <br />
                            Karkala
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg text-charcoal/70 max-w-lg leading-relaxed"
                        >
                            Complete healthcare solutions for your family. From prescription medicines to baby care, we ensure quality and care in every package.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="tel:+919876543210" className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group">
                                <Phone size={20} className="text-white/90 group-hover:scale-110 transition-transform" aria-hidden="true" />
                                Call Now
                            </a>
                            <a href="#location" className="px-8 py-4 bg-transparent border border-gray-200 text-charcoal rounded-2xl font-semibold hover:bg-secondary/20 hover:border-secondary transition-all flex items-center gap-2 group">
                                Get Directions
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side - Heartbeat Graphic (Desktop) - FINAL ADJUSTMENT */}
                    <motion.div
                        className="hidden md:block absolute right-[5%] top[10%] -translate-y-1/2 w-[65%] h-[140%]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Location Badge - Top Right of Heart - Adjusted for perfect placement */}
                        <motion.div
                            className="absolute top-[28%] right-[2%] z-30 px-5 py-3 rounded-full bg-white/90 backdrop-blur-md border border-secondary/20 shadow-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <div className="flex items-center gap-2.5">
                                <MapPin size={22} className="text-primary" aria-hidden="true" />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase tracking-wider text-primary font-bold">Located At</p>
                                    <p className="text-base font-semibold text-charcoal">Pulkeri Bypass</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Heart with Enhanced ECG Line - MAXIMIZED & CENTERED */}
                        <svg className="w-full h-full opacity-20" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* ECG Line - PERFECTLY BALANCED & INSIDE HEART */}
                            <motion.path
                                d="M 50 300 L 350 300 L 390 160 L 430 440 L 470 300 L 600 300"
                                stroke="#2E7D32"
                                strokeWidth="5"
                                fill="none"
                                filter="url(#glow)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: [0, 1, 1, 0],
                                    opacity: [0, 0.9, 0.9, 0]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    times: [0, 0.4, 0.6, 1]
                                }}
                            />

                            {/* Heart Shape - LARGER & CENTERED at cursor position */}
                            <motion.path
                                d="M 280 230 C 280 170, 330 140, 380 140 C 410 140, 440 155, 450 180 C 460 155, 490 140, 520 140 C 570 140, 620 170, 620 230 C 620 300, 560 380, 450 460 C 340 380, 280 300, 280 230 Z"
                                stroke="#2E7D32"
                                strokeWidth="4"
                                fill="none"
                                transform="translate(-20, 0)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
