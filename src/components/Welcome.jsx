import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const fontSettings = {
    title: { min: 400, max: 900 },
    subtitle: { min: 100, max: 400 },
};

const renderText = (text, className) => {
    return text.split("").map((char, i) => (
        <span key={i} className={className}>
      {char === " " ? "\u00A0" : char}
    </span>
    ));
};

const Welcome = () => {
    const containerRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const containers = [containerRef.current, subtitleRef.current];

        containers.forEach((wrapper, index) => {
            if (!wrapper) return;

            const spans = wrapper.querySelectorAll("span");
            const type = index === 0 ? "title" : "subtitle";
            const { min, max } = fontSettings[type];

            const animate = (el, weight) => {
                gsap.to(el, {
                    duration: 0.25,
                    ease: "power2.out",
                    fontVariationSettings: `'wght' ${weight}`,
                });
            };

            const onMove = (e) => {
                const rect = wrapper.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;

                spans.forEach((span) => {
                    const spanRect = span.getBoundingClientRect();
                    const center =
                        spanRect.left - rect.left + spanRect.width / 2;

                    const dist = Math.abs(mouseX - center);
                    const strength = Math.exp(-(dist * dist) / 2000);

                    animate(span, min + (max - min) * strength);
                });
            };

            wrapper.addEventListener("mousemove", onMove);
            wrapper.addEventListener("mouseleave", () => {
                spans.forEach((span) => animate(span, min));
            });
        });
    });

    return (
        <section id="welcome">
            <p ref={subtitleRef} className="text-3xl font-georama">
                {renderText("Hej, jestem Kuba! Witaj w moim", "")}
            </p>

            <h1 ref={containerRef} className="mt-7 text-9xl italic font-georama">
                {renderText("portfolio", "")}
            </h1>

            <div className="small-screen">
                <p>To portfolio jest zaprojektowane tylko na PC/tablety</p>
            </div>
        </section>
    );
};

export default Welcome;
