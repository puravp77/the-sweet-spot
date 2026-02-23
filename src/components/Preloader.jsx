import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";

function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-surface"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
        >
            <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img
                    src={logo}
                    alt="The Sweet Spot"
                    className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover shadow-2xl"
                />
                <div className="overflow-hidden">
                    <motion.h1
                        className="font-heading text-2xl tracking-[0.3em] text-primary uppercase"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    >
                        The Sweet Spot
                    </motion.h1>
                </div>
                <div className="w-32 h-[1px] bg-primary/10 overflow-hidden relative mt-2">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Preloader;
