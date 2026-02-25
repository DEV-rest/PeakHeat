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
    <section className="relative h-screen overflow-hidden">
      {/* Background (Video) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero_poster.jpg"
        >
          <source src="/videos/hero_combined.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end text-right pt-32">
        <Container>
          <div className="space-y-6 max-w-4xl ml-auto mr-auto md:ml-[800px] text-white">
            <span className="font-glitch inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-sm uppercase tracking-wider text-yellow-500 backdrop-blur-sm transition-transform hover:scale-105 hover:bg-yellow-500/20 duration-300 animate-fade-in-up">
              Experience the Heat
            </span>



            <p className="font-glitch text-2xl md:text-4xl text-yellow-500 font-medium animate-fade-in-up [animation-delay:200ms]">
              The finish line of{" "}
              <span className="font-glitch text-red-500 text-8xl transition-opacity duration-300 inline-block min-w-[200px] mt-12">
                {DYNAMIC_WORDS[index]}
              </span>
            </p>

            <div className="pt-8">
              <Button href="#product" intent="primary" className="text-lg px-8 py-3 shadow-lg shadow-yellow-500/20 animate-fade-in-up [animation-delay:400ms]">
                Shop Now
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
