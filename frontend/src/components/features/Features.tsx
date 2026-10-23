function Features() {
  const steps = [
    {
      number: "01",
      title: "Think",
      description:
        "Start with what you want to say. You don't need the perfect words.",
    },
    {
      number: "02",
      title: "Shape",
      description:
        "Choose the recipient, tone, length, and details that matter.",
    },
    {
      number: "03",
      title: "Send",
      description:
        "Review your finished message, then copy it or save it as a PDF.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#0b0b0b] py-20 text-[#f4f1ea] md:py-24"
    >
      {/* Subtle atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#c46a3a]/[0.035] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">

        {/* Section heading */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c46a3a]" />

              <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                How it works
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              From a blank page
              <br />
              <span className="text-white/30">
                to something worth sending.
              </span>
            </h2>
          </div>

          <div className="max-w-md border-t border-white/10 pt-5 lg:ml-auto">
            <p className="text-sm leading-7 text-white/40">
              MailCraft keeps the process simple. Bring the idea,
              give it some direction, and let the writing take shape.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 border-t border-white/10">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group grid grid-cols-[60px_1fr] gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.015] md:grid-cols-[100px_0.8fr_1.2fr] md:gap-10 md:py-14"
            >
              {/* Number */}
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#c46a3a]">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-4xl font-medium tracking-[-0.04em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-start-2 md:col-start-auto">
                <p className="max-w-sm text-sm leading-7 text-white/35 transition-colors duration-500 group-hover:text-white/55">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Closing statement */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/20">
              The idea
            </p>

            <div className="mt-5 h-px w-16 bg-[#c46a3a]" />
          </div>

          <div>
            <p className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] text-white/20 sm:text-6xl lg:text-7xl">
              Less typing.
              <br />
              <span className="text-white/50">
                More saying.
              </span>
            </p>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/30">
              MailCraft handles the blank page so you can focus on
              what you actually want to communicate.
            </p>
          </div>

        </div>

        {/* Bottom marker */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
            MailCraft AI
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
            03 / 03
          </span>
        </div>

      </div>
    </section>
  );
}

export default Features;