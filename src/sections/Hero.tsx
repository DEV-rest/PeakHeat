import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const DYNAMIC_WORDS = ["Spice", "Depth", "Flavor", "Heat"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] md:min-h-screen overflow-hidden bg-black">
      {/* Background (Premium “contain + blurred fill” layering) */}
      <div className="absolute inset-0">
        {/* Blurred fill layer (covers entire hero) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero_poster.jpg"
          className="absolute inset-0 h-full w-full object-cover blur-xl scale-110 opacity-70"
        >
          <source src="/videos/hero_combined.mp4" type="video/mp4" />
        </video>

        {/* Foreground layer (shows full video, no crop) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero_poster.jpg"
          className="absolute inset-0 h-full w-full object-contain"
        >
          <source src="/videos/hero_combined.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] md:min-h-screen items-center justify-center md:justify-end px-4 pt-24 md:pt-32 text-center md:text-right">
        <Container>
          <div className="space-y-6 max-w-xl md:max-w-4xl md:ml-auto text-white">
            <span className="font-glitch inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm uppercase tracking-wider text-yellow-500 backdrop-blur-sm transition-transform hover:scale-105 hover:bg-yellow-500/20 duration-300 animate-fade-in-up">
              Experience the Heat
            </span>

            <p className="font-glitch text-xl sm:text-2xl md:text-4xl text-yellow-500 font-medium animate-fade-in-up [animation-delay:200ms]">
              The finish line of{" "}
              <span className="font-glitch text-red-500 text-5xl sm:text-6xl md:text-8xl transition-opacity duration-300 inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px] mt-4 sm:mt-6 md:mt-10">
                {DYNAMIC_WORDS[index]}
              </span>
            </p>

            <div className="pt-6 md:pt-8">
              <Button
                href="#product"
                intent="primary"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 shadow-lg shadow-yellow-500/20 animate-fade-in-up [animation-delay:400ms]"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}