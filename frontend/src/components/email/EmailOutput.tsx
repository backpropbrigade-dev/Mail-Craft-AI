import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Loader2,
  Mail,
} from "lucide-react";

import { useState } from "react";

import jsPDF from "jspdf";

interface EmailOutputProps {
  generatedEmail: {
    subject: string;
    email: string;
  };
  recipientEmail: string;
  loading: boolean;
  error: string;
}

export default function EmailOutput({
  generatedEmail,
  recipientEmail,
  loading,
  error,
}: EmailOutputProps) {
  const hasEmail =
    generatedEmail.subject.trim() !== "" ||
    generatedEmail.email.trim() !== "";

  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = `Subject: ${generatedEmail.subject}

${generatedEmail.email}`;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  function handleDownloadPDF() {
    const doc = new jsPDF();

    const subject = String(generatedEmail.subject ?? "");
    const email = String(generatedEmail.email ?? "");

    doc.setFontSize(20);
    doc.text("MailCraft AI", 20, 20);

    doc.setFontSize(14);

    doc.text("Subject:", 20, 40);

    const subjectLines = doc.splitTextToSize(subject, 170);
    doc.text(subjectLines, 20, 50);

    doc.text("Email:", 20, 70);

    const emailLines = doc.splitTextToSize(email, 170);
    doc.text(emailLines, 20, 80);

    doc.save("MailCraft_Email.pdf");
  }

  function handleSendWithGmail() {
    const emailAddress = recipientEmail.trim();
    if (!hasEmail || !emailAddress || loading) {
      return;
    }

    const subject = encodeURIComponent(generatedEmail.subject.trim());
    const body = encodeURIComponent(generatedEmail.email.trim());
    const recipient = encodeURIComponent(emailAddress);

    const webGmailUrl = 
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${recipient}` +
    `&su=${subject}` +
    `&body=${body}`;

    const userAgent = navigator.userAgent || "";

    const isIOS = 
    /iphone|ipad|ipod/i.test(userAgent);

    const isAndroid = /android/i.test(userAgent);


    if (isIOS) {
      const gmailAppUrl =
      `googlegmail:///co` +
      `?to=${recipient}` +
      `&subject=${subject}` +
      `&body=${body}`;
      
      window.location.href = gmailAppUrl;
      return;
    }


    if (isAndroid) {
      const mailtoUrl =
      `mailto:${emailAddress}` +
      `?subject=${subject}` +
      `&body=${body}`; 
      

      window.location.href = mailtoUrl;
      return;
    }

    window.open(
      webGmailUrl,
      "_blank",
      "noopener,noreferrer"
      
    );

  }

  return (
    <div className="relative h-full">

      {/* Header */}
      <div className="mb-10 border-b border-white/10 pb-6">
        <div className="flex items-start justify-between gap-6">

          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-white/30">
              Result
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.035em] text-[#f4f1ea] sm:text-4xl">
              Your email.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
              Review the message below, then copy it, save it as a PDF,
              or open it directly in Gmail.
            </p>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
            02
          </span>

        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 border-l border-[#c46a3a] bg-[#c46a3a]/5 px-5 py-4">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#c46a3a]">
            Generation error
          </p>

          <p className="mt-2 text-sm leading-6 text-white/60">
            {error}
          </p>
        </div>
      )}

      {/* Email document */}
      <div className="relative min-h-[520px]">

        {loading ? (

          /* Loading state */
          <div className="flex min-h-[520px] flex-col items-center justify-center border border-white/10 bg-[#11110f] px-8 text-center">

            <Loader2
              size={24}
              className="mb-6 animate-spin text-[#c46a3a]"
            />

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
              Writing your email
            </p>

            <p className="mt-3 text-sm text-white/40">
              Turning your details into a message...
            </p>

          </div>

        ) : hasEmail ? (

          /* Generated email */
          <div className="relative min-h-[520px] overflow-hidden bg-[#eee9df] px-7 py-8 text-[#171717] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-10 sm:py-10">

            {/* Paper header */}
            <div className="flex items-start justify-between border-b border-black/10 pb-6">

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-black/35">
                  MailCraft AI
                </p>

                <p className="mt-2 text-sm font-medium">
                  New message
                </p>
              </div>

              <div className="h-7 w-7 rounded-full border border-black/10" />

            </div>

            {/* Subject */}
            <div className="mt-8 border-b border-black/10 pb-6">

              <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.2em] text-black/35">
                Subject
              </p>

              <p className="text-base font-medium leading-6 text-black/80">
                {generatedEmail.subject}
              </p>

            </div>

            {/* Email body */}
            <div className="mt-8">

              <p className="mb-6 text-[8px] font-medium uppercase tracking-[0.2em] text-black/30">
                Message
              </p>

              <div className="max-h-[330px] overflow-y-auto pr-2">
                <p className="whitespace-pre-line text-[13px] leading-7 text-black/70">
                  {generatedEmail.email}
                </p>
              </div>

            </div>

            {/* Accent */}
            <div className="absolute bottom-7 right-7 h-3 w-3 rounded-full bg-[#c46a3a]" />

          </div>

        ) : (

          /* Empty state */
          <div className="flex min-h-[520px] flex-col justify-between border-t border-white/10 bg-[#11110f] p-7 sm:p-10">

            <div className="flex justify-end">
              <span className="text-[9px] tracking-[0.25em] text-white/15">
                WAITING
              </span>
            </div>

            <div className="max-w-md">

              <div className="mb-7 h-px w-12 bg-[#c46a3a]" />

              <p className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white/25 sm:text-5xl">
                Your words,
                <br />

                <span className="text-white/10">
                  refined.
                </span>
              </p>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/30">
                Complete the details on the left and your finished email
                will appear here.
              </p>

            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-5">

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                Thought → Email
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                02 / 03
              </span>

            </div>

          </div>
        )}

      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-5">

        {/* Status */}
        <div className="flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            {hasEmail ? "Ready to use" : "No message yet"}
          </p>

          {hasEmail && recipientEmail?.trim() && (
            <p className="max-w-[55%] truncate text-[9px] tracking-wide text-white/20">
              To: {recipientEmail}
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3">

          {/* Copy */}
          <button
            type="button"
            onClick={handleCopy}
            disabled={!hasEmail || loading}
            className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
              !hasEmail || loading
                ? "cursor-not-allowed border border-white/10 text-white/20"
                : "border border-white/15 text-white/60 hover:border-white/30 hover:text-white"
            }`}
          >
            {copied ? (
              <>
                <Check size={14} />
                Copied
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy
              </>
            )}
          </button>

          {/* Download PDF */}
          <button
            type="button"
            onClick={handleDownloadPDF}
            disabled={!hasEmail || loading}
            className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
              !hasEmail || loading
                ? "cursor-not-allowed bg-white/10 text-white/20"
                : "bg-[#f4f1ea] text-[#0b0b0b] hover:bg-white"
            }`}
          >
            <Download size={14} />

            Download PDF

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

          {/* Send with Gmail */}
          <button
            type="button"
            onClick={handleSendWithGmail}
            disabled={!hasEmail || !recipientEmail?.trim() || loading}
            className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
              !hasEmail || !recipientEmail?.trim() || loading
                ? "cursor-not-allowed border border-white/10 text-white/20"
                : "border border-[#c46a3a]/40 bg-[#c46a3a]/10 text-[#c46a3a] hover:border-[#c46a3a] hover:bg-[#c46a3a]/15"
            }`}
          >
            <Mail size={14} />

            Send with Gmail

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

        </div>
      </div>

    </div>
  );
}