# AI-Powered Student Query Chatbot – Standout Hackathon Concept
## Core Concept
Build a **"Student Success Copilot"** – not just a generic Q&A bot, but a single-page web app where students can ask anything and choose *who* they want to answer: **Academic Mentor**, **Senior Buddy**, or **Counselor Mode** (three personas on top of the same AI engine). This framing feels fresh, is highly demo-able, and clearly student-focused.
## Why This Stands Out
- Everyone else will likely build a plain chat box with "Ask your doubts"; you will show **three distinct modes/personas** with different tone and behavior while using the same backend model.
- You will focus on **end-to-end student experience**: question templates, suggested follow-ups, and quick action cards ("Generate my study plan", "Explain this concept", "Draft an email to professor").
- Judges see a complete story: landing page explaining problem, live chatbot, plus a small "insights" section that shows trending doubts from students.
## High-Level Feature Set
### 1. Three AI Personas
- **Academic Mentor** – formal, syllabus-aware, structured answers (definition, example, practice question style).
- **Senior Buddy** – friendly, casual advice: how to manage time, what to do before exams, campus life tips.
- **Counselor Mode** – empathetic tone, focuses on stress, anxiety, motivation, and basic mental-wellbeing suggestions (with a clear disclaimer that it is not a medical professional).

Each persona is just a different system prompt / mode flag sent to the same API, so it is easy to implement but looks very powerful.
### 2. Smart Question Templates
On top of the chat input, pre-built chips like:

- "Explain this topic for my exam"
- "Make a 7‑day study plan"
- "Help me draft an email to my professor"
- "I am feeling stressed about exams"

Clicking a chip fills the input with a nice prompt pattern (student can edit and send).
### 3. Doubt-To-Concept Flow
For academic questions, structure the answer automatically into blocks:

- Short summary
- Step-by-step explanation
- Simple example
- "Test yourself" mini-question

This can just be one prompt template instructing the model to reply in this structure, but you render it with nice Tailwind cards so it feels like a proper learning flow.
### 4. Trending Doubts Snapshot
You do not need a real database if time is tight: store recent questions in-memory (array) on the server route and show the top 5 asked questions on a side panel or a separate tab called **"What others are asking"**.

This gives judges the sense of analytics/insights without heavy backend work.
### 5. Safety & Trust Layer
- Always show a small banner: "AI can be wrong – verify for high‑stakes decisions." 
- For mental-healthish queries, append a static box with helpline-style text: "If you are in crisis, please reach out to a trusted adult or professional."

This signals responsibility and product thinking.
## Scope That Fits 1.5 Hours
### Must-Have (focus here first)
- Single-page app (Next.js or plain React) with a **clean landing + chat interface**.
- 3 mode buttons/tabs at the top of chat: Mentor, Senior, Counselor.
- One API route that:
  - Accepts: mode, question text.
  - Calls an LLM API (or mocks a response if no internet) with different system prompt per mode.
  - Returns structured response text that front-end can render in sections.
- Render response in cards: Summary, Explanation, Example, Self‑test (for academic mode) and a simple single-block response for the other two modes.
### Nice-To-Have (add if time remains)
- Right-side panel listing last 5 questions (just from current session) as "Trending now" with timestamps.
- Small toggle for **"Exam mode"** that tells the Mentor persona to keep answers super concise and exam-oriented.
- LocalStorage to persist chat history for page refresh.
## Suggested Pages and Flow
### Landing + Chat (One Screen)
Keep it extremely simple: hero on the left, chat on the right (or stacked on mobile).

- Header: "Student Success Copilot" logo/title and one-line tagline: "Ask doubts, plan your study, manage exam stress – in one place."
- Short 3-column section above or beside the chat:
  - "Ask better questions" (smart templates)
  - "Learn with structure" (summary → explanation → examples → self test)
  - "Feel supported" (Senior and Counselor personas)
- Main chat area with:
  - Mode selector (buttons or pills)
  - Message list
  - Input + send button
  - Chips for templates.

This is all possible in a single Next.js page, which is perfect for hackathon speed.
## Technical Implementation Idea (Given Your Skills)
- **Frontend**: Next.js App Router, Tailwind CSS, single `/(app)` route.
- **Backend**: `/api/chat` route that:
  - Reads `mode` and `question` from body.
  - Maps mode to a system prompt string.
  - Hits your chosen LLM provider (OpenAI, Groq, etc.) or uses a mocked response if APIs are not allowed.

Example prompt idea for Mentor mode (pseudo):

> You are an academic mentor for college students. Answer the question with:
> 1. 2‑3 line summary
> 2. Step-by-step explanation
> 3. A simple example
> 4. One self‑test question

Senior and Counselor modes can have similar short prompt descriptions telling the AI to change tone and type of advice.
## Pitch Line For Judges
You can quickly pitch it like this:

- "Instead of yet another FAQ chatbot, this is a **Student Success Copilot** with three personas – Mentor, Senior, and Counselor – that helps students with academics, planning, and stress, all in one clean interface. It is designed so colleges can plug in their own syllabus and resources later, but even now you can see how it structures answers and surfaces trending doubts."

This framing plus a smooth small demo should help you stand out in a 1.5‑hour hackathon.