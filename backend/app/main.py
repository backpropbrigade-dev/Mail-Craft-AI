import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI


# Load environment variables
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

print("API KEY FOUND:", bool(api_key))
print("API KEY LENGTH:", len(api_key) if api_key else 0)

if not api_key:
    raise ValueError("GROQ_API_KEY environment variable is not set.")


# Groq client
client = OpenAI(
    api_key=api_key,
    base_url="https://api.groq.com/openai/v1"
)


# FastAPI app
app = FastAPI(
    title="AI Email Generator API",
    version="1.0.0",
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-email-generator-wine.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes
@app.get("/")
def root():
    return {
        "message": "AI Email Generator Backend is Running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# Request model
class EmailRequest(BaseModel):
    purpose: str
    recipientName: str
    tone: str
    length: str
    keyPoints: str


# Generate email
@app.post("/generate-email")
def generate_email(data: EmailRequest):

    print("=" * 50)
    print(data)
    print("=" * 50)

    prompt = f"""
You are MailCraft AI, an intelligent email-writing assistant.

Your job is to transform the user's information into a polished, natural,
human-sounding email.

USER INPUT

Purpose:
{data.purpose}

Recipient Name:
{data.recipientName}

Tone:
{data.tone}

Requested Length:
{data.length}

Key Points:
{data.keyPoints}


WRITING INSTRUCTIONS

1. Understand the purpose and intent before writing.
2. Write as if a real person is sending the email.
3. Match the requested tone:
   - Professional: clear, respectful, polished, and natural.
   - Friendly: warm, conversational, and approachable.
   - Formal: respectful, structured, and more traditional.
   - Persuasive: confident, convincing, and focused on the desired outcome.
4. Follow the requested length:
   - Short: approximately 80–120 words.
   - Medium: approximately 120–180 words.
   - Long: approximately 180–260 words.
5. Use the recipient's name naturally in the greeting.
6. Include the important information from Key Points without simply copying
   the user's wording.
7. If Key Points are empty, infer a reasonable structure from the Purpose,
   Recipient Name, Tone, and Length.
8. Do not invent specific facts, dates, names, companies, qualifications,
   attachments, promises, or other information that the user did not provide.
9. Do not mention that you are an AI.
10. Do not explain the email or describe what you wrote.
11. Do not repeat the user's instructions.
12. Do not use Markdown formatting, bullet points, or headings inside the
    email body unless they are genuinely necessary for the email.
13. Use natural paragraph spacing.
14. Include an appropriate greeting and closing.
15. Do not create a fake email address.
16. Do not include "[Your Name]", "[Your Email]", "[Phone Number]" or similar
    placeholders in the email body.
17. Do not include the recipient's email address.
18. If the sender's name is not provided, use a neutral closing such as
    "Best regards," without inventing a sender name.
19. Avoid unnecessary phrases, excessive politeness, repetition, and generic
    filler.
20. The final result should be immediately usable with minimal editing.


OUTPUT FORMAT

Return ONLY the email.

The first line MUST be:

Subject: <appropriate subject>

Then leave exactly one blank line.

After that, write the complete email body.

Do not write anything before the Subject line or after the email.
"""

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    email_response = response.choices[0].message.content or ""

    return {
        "success": True,
        "email": email_response,
    }