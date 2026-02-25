import Container from "../ui/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-950 text-white border-t border-white/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-12">

          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-widest text-yellow-500">
              Get in Touch
            </h2>
            <p className="text-red-500 text-lg md:text-xl">
              Collaborations, questions, or just to say hello.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:contacthasihasi@gmail.com"
              className="group flex flex-col items-center justify-center p-12 rounded-3xl bg-zinc-900 border border-white/5 hover:border-yellow-500/50 transition-colors duration-500"
            >
              <span className="text-zinc-400 group-hover:text-yellow-400 transition-colors uppercase tracking-widest text-sm mb-4">Email Us</span>
              <span className="text-2xl font-medium text-yellow-500">contacthasihasi@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/peak_heat_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-12 rounded-3xl bg-zinc-900 border border-white/5 hover:border-yellow-500/50 transition-colors duration-500"
            >
              <span className="text-zinc-400 group-hover:text-yellow-400 transition-colors uppercase tracking-widest text-sm mb-4">Instagram</span>
              <span className="text-2xl font-medium text-yellow-500">@peak_heat_</span>
            </a>
          </div>

          <div className="pt-20 text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Peak Heat. All rights reserved.
          </div>
        </div>
      </Container>
    </section>
  );
}
