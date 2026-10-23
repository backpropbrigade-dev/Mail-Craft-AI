import Footer from "../components/layout/Footer";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Features from "../components/features/Features";
import EmailForm from "../components/email/EmailForm";
import EmailOutput from "../components/email/EmailOutput";

export default function Home() {
  const [generatedEmail, setGeneratedEmail] = useState({
    subject: "",
    email: "",
  });

  const [recipientEmail, setRecipientEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <Navbar />

      <Hero />

      <section
        id="generator"
        className="relative overflow-hidden bg-[#0b0b0b] py-32 text-[#f4f1ea]"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">

          {/* Workspace Header */}
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c46a3a]" />

                <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                  The Workspace
                </span>
              </div>

              <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-6xl">
                Turn a thought
                <br />

                <span className="text-white/30">
                  into an email.
                </span>
              </h2>
            </div>

            <div className="flex items-end justify-between border-t border-white/10 pt-5">
              <p className="max-w-md text-sm leading-7 text-white/40">
                Give MailCraft a few details. Choose how you want to sound.
                We'll take care of the blank page.
              </p>

              <div className="hidden text-right md:block">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Process
                </p>

                <p className="mt-2 text-xs text-white/50">
                  Compose → Generate → Review
                </p>
              </div>
            </div>
          </div>

          {/* Workspace */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            <EmailForm
              setGeneratedEmail={setGeneratedEmail}
              setRecipientEmail={setRecipientEmail}
              loading={loading}
              setLoading={setLoading}
              setError={setError}
            />

            <EmailOutput
              generatedEmail={generatedEmail}
              recipientEmail={recipientEmail}
              loading={loading}
              error={error}
            />

          </div>
        </div>
      </section>

      {/* How It Works */}
      <Features />

      {/* Footer */}
      <Footer />
    </>
  );
}