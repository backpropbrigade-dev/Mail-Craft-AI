import { ArrowUpRight, MoveDownRight } from "lucide-react";

function Hero() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0b] text-[#f4f1ea]"
    >
      {/* Subtle background structure */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(191,92,45,0.12),transparent_30%)]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main composition */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-16 pt-32 md:px-10 lg:px-14">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">

          {/* LEFT — Editorial introduction */}
          <div className="relative z-20 max-w-2xl">

            {/* Small label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c46a3a]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                AI Email Studio
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-[720px] text-[4.5rem] font-medium leading-[0.88] tracking-[-0.055em] text-[#f4f1ea] sm:text-[5.5rem] lg:text-[6.7rem]">
              Write emails
              <br />
              <span className="text-white/35">that sound</span>
              <br />
              like you.
            </h1>

            {/* Description */}
            <p className="mt-9 max-w-md text-[15px] leading-7 text-white/50 md:text-base">
              Turn a few details into a clear, polished email without
              starting from a blank page.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={scrollToGenerator}
                className="group flex items-center gap-3 rounded-full bg-[#f4f1ea] px-6 py-3.5 text-sm font-medium text-[#0b0b0b] transition-all duration-300 hover:scale-[1.02] hover:bg-white"
              >
                Start Writing

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0b0b0b] text-[#f4f1ea] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 hover:text-white"
              >
                Explore
                <MoveDownRight size={14} />
              </button>
            </div>

            {/* Small product information */}
            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Built for
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Everyday communication
                </p>
              </div>

              <div className="h-7 w-px bg-white/10" />

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Output
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Copy · PDF · Ready
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Original 3D-inspired MailCraft visual */}
          <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[680px]">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[#c46a3a]/10 blur-[110px]" />

            {/* Perspective stage */}
            <div className="relative h-[430px] w-[340px] [perspective:1400px] sm:h-[500px] sm:w-[400px] lg:h-[570px] lg:w-[470px]">

              {/* Back document */}
              <div className="absolute left-[13%] top-[8%] h-[76%] w-[70%] rotate-[-9deg] rounded-[2px] border border-white/10 bg-[#171614] shadow-[0_40px_100px_rgba(0,0,0,0.55)]" />

              {/* Middle document */}
              <div className="absolute left-[18%] top-[12%] h-[76%] w-[70%] rotate-[5deg] rounded-[2px] border border-white/10 bg-[#211f1b] shadow-[0_40px_100px_rgba(0,0,0,0.55)]" />

              {/* Main email sheet */}
              <div className="absolute left-[11%] top-[4%] h-[78%] w-[76%] rotate-[-2deg] border border-black/10 bg-[#eee9df] p-7 text-[#171717] shadow-[0_50px_120px_rgba(0,0,0,0.65)] transition-transform duration-700 hover:rotate-0">

                {/* Email header */}
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/40">
                      MailCraft
                    </p>

                    <p className="mt-2 text-sm font-medium">
                      New message
                    </p>
                  </div>

                  <div className="h-7 w-7 rounded-full border border-black/10" />
                </div>

                {/* Recipient */}
                <div className="mt-7 space-y-2 text-[10px]">
                  <div className="flex gap-3">
                    <span className="w-12 text-black/35">TO</span>
                    <span className="font-medium">recipient@email.com</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="w-12 text-black/35">SUBJECT</span>
                    <span className="font-medium">
                      A thoughtful message
                    </span>
                  </div>
                </div>

                {/* Email body */}
                <div className="mt-9 space-y-4 text-[11px] leading-6 text-black/65">
                  <p>Dear Alex,</p>

                  <p>
                    I wanted to reach out regarding the details we discussed
                    earlier.
                  </p>

                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-black/10" />
                    <div className="h-2 w-[92%] rounded-full bg-black/10" />
                    <div className="h-2 w-[82%] rounded-full bg-black/10" />
                    <div className="h-2 w-[88%] rounded-full bg-black/10" />
                  </div>

                  <p>Thank you for your time.</p>

                  <p>Best regards,</p>
                </div>

                {/* Accent mark */}
                <div className="absolute bottom-7 right-7 h-3 w-3 rounded-full bg-[#c46a3a]" />
              </div>

              {/* Floating metadata */}
              <div className="absolute -bottom-1 -left-2 rotate-[-3deg] border border-white/10 bg-[#11110f]/90 px-5 py-4 backdrop-blur-md">
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/30">
                  Process
                </p>

                <p className="mt-1 text-xs text-white/70">
                  Thought → Email
                </p>
              </div>

              {/* Floating number */}
              <div className="absolute -right-4 top-[25%] rotate-[3deg]">
                <span className="text-[9px] tracking-[0.3em] text-white/25">
                  01 / 03
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-4 md:left-10 md:right-10 lg:left-14 lg:right-14">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
          MailCraft AI
        </span>

        <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
          Scroll to create
        </span>
      </div>
    </section>
  );
}

export default Hero;