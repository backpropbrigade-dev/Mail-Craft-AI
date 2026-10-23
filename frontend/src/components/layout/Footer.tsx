import { ArrowUpRight } from "lucide-react";

function Footer() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    document.getElementById("top")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b0b0b] text-[#f4f1ea]">

      {/* Top divider */}
      <div className="mx-6 border-t border-white/10 md:mx-10 lg:mx-14" />

      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-14">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-left"
            >
              <p className="text-sm font-semibold tracking-[0.2em]">
                MAILCRAFT
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/35">
                AI EMAIL WRITER
              </p>
            </button>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/40">
              Turn a few details into clear, polished emails
              without starting from a blank page.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-white/30">
              Navigate
            </p>

            <div className="flex flex-col items-start gap-4">

              <button
                type="button"
                onClick={scrollToTop}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Home
              </button>

              <button
                type="button"
                onClick={scrollToGenerator}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Workspace
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                How it works
              </button>

            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-white/30">
              Start writing
            </p>

            <button
              type="button"
              onClick={scrollToGenerator}
              className="group flex items-center gap-3 rounded-full bg-[#f4f1ea] px-5 py-3 text-sm font-medium text-[#0b0b0b] transition-all duration-300 hover:bg-white"
            >
              Write an email

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b0b0b] text-[#f4f1ea] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={13} />
              </span>
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/25 md:flex-row md:items-center md:justify-between">

          <span>
            MailCraft AI
          </span>

          <span>
            Thought → Email
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>

        </div>

        {/* Made with credit */}
        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-[9px] uppercase tracking-[0.22em] text-white/20">
            Made with{" "}
            <span className="text-[#c46a3a]">♥</span>{" "}
            by 0121
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;