import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ProductShowcase() {
    return (
        <section id="product" className="py-24 bg-zinc-900 text-white overflow-hidden">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT: Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold tracking-widest text-red-500">
                            The Ultimate Heat
                        </h2>
                        <p className="text-lg text-yellow-500 leading-relaxed">
                            Hand-crafted with a blend of premium chilies and aromatics, Peak Heat isn't just about the burn—it's about elevating every bite.
                            Our small-batch chili oil delivers a complex flavor profile that starts with a savory crunch and finishes with a lingering, addictive heat.
                        </p>
                        <ul className="space-y-3 text-yellow-500">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                Small-batch craftsmanship
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                No artificial preservatives
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                Perfect for dumplings, noodles, and eggs
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Button href="#contact" intent="primary" className="w-full md:w-auto justify-center">
                                Order Your Bottle
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT: Product Image */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-3xl transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-square md:aspect-[4/5]">
                            <img
                                src="/images/product.jpg"
                                alt="Bottle of Peak Heat Chili Oil"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
