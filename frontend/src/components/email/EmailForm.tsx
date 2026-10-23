import { ArrowUpRight, Loader2 } from "lucide-react";
import { generateEmail } from "../../services/emailService";
import React, { useState } from "react";

interface EmailFormProps {
  setGeneratedEmail: React.Dispatch<
    React.SetStateAction<{
      subject: string;
      email: string;
    }>
  >;
  setRecipientEmail: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export default function EmailForm({
  setGeneratedEmail,
  setRecipientEmail,
  loading,
  setLoading,
  setError,
}: EmailFormProps) {
  const [formData, setFormData] = useState({
    purpose: "",
    recipientName: "",
    recipientEmail: "",
    tone: "Professional",
    length: "Short",
    keyPoints: "",
  });

  const isFormValid =
    formData.purpose.trim() !== "" &&
    formData.recipientName.trim() !== "";

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      setError("");

      const response = await generateEmail(formData);

       setGeneratedEmail(response);
       setRecipientEmail(formData.recipientEmail);
    } catch (error) {
      console.error(error);
      setError("Failed to generate email. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClassName =
    "w-full border-0 border-b border-white/15 bg-transparent py-3 text-sm text-[#f4f1ea] outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-[#c46a3a]";

  const selectClassName =
    "w-full appearance-none border-0 border-b border-white/15 bg-transparent py-3 text-sm text-[#f4f1ea] outline-none transition-colors duration-300 focus:border-[#c46a3a]";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-transparent"
    >
      {/* Form heading */}
      <div className="mb-12 border-b border-white/10 pb-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-white/30">
              Compose
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.035em] text-[#f4f1ea] sm:text-4xl">
              Start with a thought.
            </h2>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
            01
          </span>
        </div>

        <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
          Give us a little context and we'll turn it into a clear,
          natural-sounding email.
        </p>
      </div>

      <div className="space-y-10">

        {/* Purpose */}
        <div>
          <label
            htmlFor="purpose"
            className="mb-2 block text-[9px] uppercase tracking-[0.22em] text-white/35"
          >
            Purpose
          </label>

          <input
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="e.g. Job application"
            className={fieldClassName}
          />
        </div>

        {/* Recipient */}
        <div>
          <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-white/35">
            Recipient
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* Name */}
            <div>
              <label
                htmlFor="recipientName"
                className="mb-2 block text-[10px] text-white/30"
              >
                Name
              </label>

              <input
                id="recipientName"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                placeholder="John Doe"
                className={fieldClassName}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="recipientEmail"
                className="mb-2 block text-[10px] text-white/30"
              >
                Email
              </label>

              <input
                id="recipientEmail"
                name="recipientEmail"
                type="email"
                value={formData.recipientEmail}
                onChange={handleChange}
                placeholder="john@example.com"
                className={fieldClassName}
              />
            </div>

          </div>
        </div>

        {/* Tone + Length */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Tone */}
          <div className="relative">
            <label
              htmlFor="tone"
              className="mb-2 block text-[9px] uppercase tracking-[0.22em] text-white/35"
            >
              Tone
            </label>

            <select
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className={selectClassName}
            >
              <option className="bg-[#11110f]">
                Professional
              </option>

              <option className="bg-[#11110f]">
                Friendly
              </option>

              <option className="bg-[#11110f]">
                Formal
              </option>

              <option className="bg-[#11110f]">
                Persuasive
              </option>
            </select>
          </div>

          {/* Length */}
          <div>
            <label
              htmlFor="length"
              className="mb-2 block text-[9px] uppercase tracking-[0.22em] text-white/35"
            >
              Length
            </label>

            <select
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              className={selectClassName}
            >
              <option className="bg-[#11110f]">
                Short
              </option>

              <option className="bg-[#11110f]">
                Medium
              </option>

              <option className="bg-[#11110f]">
                Long
              </option>
            </select>
          </div>

        </div>

        {/* Key Points */}
        <div>
          <label
            htmlFor="keyPoints"
            className="mb-2 block text-[9px] uppercase tracking-[0.22em] text-white/35"
          >
            Key Points
          </label>

          <textarea
            id="keyPoints"
            name="keyPoints"
            value={formData.keyPoints}
            onChange={handleChange}
            placeholder="What should the email say?"
            rows={5}
            className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm leading-7 text-[#f4f1ea] outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-[#c46a3a]"
          />
        </div>

        {/* Generate */}
        <div className="flex items-center justify-between gap-6 border-t border-white/10 pt-6">

          <p className="hidden max-w-xs text-[10px] leading-5 text-white/25 sm:block">
            Your details stay focused on the message you're trying to
            communicate.
          </p>

          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`group ml-auto flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
              !isFormValid || loading
                ? "cursor-not-allowed bg-white/10 text-white/25"
                : "bg-[#f4f1ea] text-[#0b0b0b] hover:bg-white"
            }`}
          >
            {loading ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />

                Generating...
              </>
            ) : !isFormValid ? (
              "Complete the fields"
            ) : (
              <>
                Generate Email

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0b0b0b] text-[#f4f1ea] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </>
            )}
          </button>

        </div>
      </div>
    </form>
  );
}