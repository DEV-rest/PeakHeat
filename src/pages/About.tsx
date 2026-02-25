import Header from "../sections/Header";
import Container from "../ui/Container";

export default function About() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white">
            <Header />
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-stir.png"
                        alt="Making Peak Heat"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold tracking-tight mb-4">Our Story</h1>
                    <p className="text-xl text-zinc-300 max-w-lg mx-auto">
                        From our kitchen to your table.
                    </p>
                </div>
            </section>

            {/* Founders */}
            <section className="py-24">
                <Container>
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                        {/* Left - Image Placeholder */}
                        <div className="aspect-[3/4] bg-zinc-800 rounded-2xl animate-pulse flex items-center justify-center border border-white/5">
                            <span className="text-zinc-600 font-medium">Founder A</span>
                        </div>

                        {/* Middle - Text */}
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl font-semibold">The Creators</h2>
                            <div className="w-12 h-1 bg-red-600 mx-auto" />
                            <p className="text-zinc-400 leading-relaxed">
                                Peak Heat was born out of a desire for more than just spice. We wanted flavor. Depth. Character.
                                Every jar is a labor of love, crafted with patience and precision to bring you the ultimate chili oil experience.
                            </p>
                            <p className="text-zinc-400 font-serif italic">
                                "It's not just heat, it's a lifestyle."
                            </p>
                        </div>

                        {/* Right - Image Placeholder */}
                        <div className="aspect-[3/4] bg-zinc-800 rounded-2xl animate-pulse flex items-center justify-center border border-white/5">
                            <span className="text-zinc-600 font-medium">Founder B</span>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
