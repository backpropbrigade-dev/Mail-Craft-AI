import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-email-generator-k0za.onrender.com/",
});

interface EmailRequest {
  purpose: string;
  recipientName: string;
  tone: string;
  length: string;
  keyPoints: string;
}

interface EmailResponse {
  success: boolean;
  email: string;
}

export const generateEmail = async (
  formData: EmailRequest
) => {
  const response = await API.post<EmailResponse>(
    "/generate-email",
    formData
  );

  const rawEmail = response.data.email || "";

  // Extract subject from the generated response
  const subjectMatch = rawEmail.match(
    /^\s*\*{0,2}Subject:\*{0,2}\s*(.+?)(?:\r?\n|$)/i
  );

  const subject = subjectMatch
    ? subjectMatch[1].trim()
    : "";

  // Remove the subject line from the email body
  const email = rawEmail
    .replace(
      /^\s*\*{0,2}Subject:\*{0,2}\s*.+?(?:\r?\n){1,2}/i,
      ""
    )
    .trim();

  return {
    subject,
    email,
  };
};