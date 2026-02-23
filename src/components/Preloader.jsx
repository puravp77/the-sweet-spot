import { useEffect, useRef } from "react";
import logo from "../assets/Logo.png";
import { gsap } from "gsap";

function Preloader() {
    const loaderRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (loaderRef.current) loaderRef.current.style.display = "none";
            }
        });

        tl.to(".loader-logo", {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out"
        })
            .to(".loader-text", {
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.2")
            .to(".loader-bar", {
                width: "100%",
                duration: 1.2,
                ease: "expo.inOut"
            }, "-=0.4")
            .to(loaderRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: "expo.inOut",
                delay: 0.2
            });
    }, []);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white"
        >
            <div
                ref={contentRef}
                className="flex flex-col items-center gap-6"
            >
                <img
                    src={logo}
                    alt="The Sweet Spot"
                    className="loader-logo opacity-0 scale-90 h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover shadow-2xl"
                />
                <div className="overflow-hidden">
                    <h1 className="loader-text translate-y-full font-heading text-2xl tracking-[0.3em] text-primary uppercase">
                        The Sweet Spot
                    </h1>
                </div>
                <div className="w-32 h-[1px] bg-primary/10 overflow-hidden relative mt-2">
                    <div className="loader-bar absolute top-0 left-0 h-full w-0 bg-accent" />
                </div>
            </div>
        </div>
    );
}

export default Preloader;
