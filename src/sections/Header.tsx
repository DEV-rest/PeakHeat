import { Link } from "react-router-dom";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-black/20 backdrop-blur-md border-b border-white/5">
        <Container>
          <div className="relative flex items-center justify-between py-4 h-20 text-white">

            {/* Left Spacer (for balance) or potentially a small social icon later */}
            <div className="flex-1" />

            {/* Center Logo */}
            <div className="flex-shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link to="/" className="block hover:opacity-80 transition-opacity">
                <img src="/images/logo.png" alt="Peak Heat" className="h-16 w-auto" />
              </Link>
            </div>

            {/* Right Navigation */}
            <nav className="flex-1 flex justify-end gap-6 text-sm font-medium uppercase tracking-widest text-yellow-500">
              <Link to="/about" className="hover:text-red-500 transition-colors">
                About Us
              </Link>
              <a href="/#contact" className="hover:text-red-500 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
