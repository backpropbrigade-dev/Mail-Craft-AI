import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="absolute left-0 right-0 top-0 z-50 px-6 py-6 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">

          {/* Logo / Wordmark */}
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="group text-left"
          >
            <span className="block text-[15px] font-semibold tracking-[0.18em] text-white transition-opacity duration-300 group-hover:opacity-70">
              MAILCRAFT
            </span>

            <span className="mt-0.5 block text-[8px] tracking-[0.28em] text-white/40">
              AI EMAIL WRITER
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <button
              type="button"
              onClick={() => scrollToSection("generator")}
              className="text-[13px] tracking-wide text-white/60 transition-colors duration-300 hover:text-white"
            >
              Workspace
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("how-it-works")}
              className="text-[13px] tracking-wide text-white/60 transition-colors duration-300 hover:text-white"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("generator")}
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-[12px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              Start Writing

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] md:hidden"
          >
            {isOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-[#0b0b0b] px-8 transition-all duration-500 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >

        <div className="space-y-2">

          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="block text-left text-5xl font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-60"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("generator")}
            className="block text-left text-5xl font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-60"
          >
            Workspace
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("how-it-works")}
            className="block text-left text-5xl font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-60"
          >
            About
          </button>

        </div>

        <button
          type="button"
          onClick={() => scrollToSection("generator")}
          className="mt-12 flex w-fit items-center gap-2 rounded-full bg-[#f4f1ea] px-5 py-3 text-sm font-medium text-[#0b0b0b] transition-transform duration-300 hover:scale-[1.02]"
        >
          Start Writing

          <ArrowUpRight size={16} />
        </button>

        <div className="absolute bottom-8 left-8 text-[9px] tracking-[0.25em] text-white/30">
          MAILCRAFT AI
        </div>

      </div>
    </>
  );
}

export default Navbar;