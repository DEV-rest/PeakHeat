import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-black/20 backdrop-blur-md border-b border-white/5">
        <Container>
          <div className="flex items-center justify-between py-4 h-20 text-white">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={() => setOpen(false)}
            >
              <img src="/images/logo.png" alt="Peak Heat" className="h-12 md:h-16 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-yellow-500">
              <Link to="/about" className="hover:text-red-500 transition-colors">
                About Us
              </Link>
              <a href="/#contact" className="hover:text-red-500 transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {/* Simple icon */}
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Panel */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
              open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="pb-4 pt-1 flex flex-col gap-3 text-sm font-medium uppercase tracking-widest text-yellow-500">
              <Link
                to="/about"
                className="px-2 py-3 rounded-lg hover:bg-white/5 hover:text-red-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
              <a
                href="/#contact"
                className="px-2 py-3 rounded-lg hover:bg-white/5 hover:text-red-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}