import Header from "../sections/Header";
import Hero from "../sections/Hero";
import ProductShowcase from "../sections/ProductShowcase";
import Contact from "../sections/Contact";

export default function Landing() {
  return (
    <div className="bg-white text-zinc-900 overflow-x-hidden">
      <Header />

      {/* Hero Section - Sticky & Pinned */}
      {/* Stays fixed at the top while the next section scrolls over it */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <Hero />
      </div>

      {/* Next Content - Covers the Hero */}
      {/* Must have a background color (bg-white) and higher z-index */}
      <div className="relative z-10 bg-white">
        <ProductShowcase />
        <Contact />
      </div>
    </div>
  );
}
