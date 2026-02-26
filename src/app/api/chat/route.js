import Groq from "groq-sdk";
import { PERSONAS } from "@/lib/personas";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req) {
  try {
    const { message, mode } = await req.json();

    if (!message || !mode) {
      return Response.json({ error: "Missing message or mode" }, { status: 400 });
    }

    const persona = PERSONAS[mode];
    if (!persona) {
      return Response.json({ error: "Invalid mode" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: persona.systemPrompt },
        { role: "user",   content: message },
      ],
    });

    const text = completion.choices[0].message.content;

    if (mode === "mentor") {
      try {
        const cleaned = text.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(cleaned);
        return Response.json({ mode, type: "structured", data: parsed });
      } catch {
        return Response.json({ mode, type: "plain", data: text });
      }
    }

    return Response.json({ mode, type: "plain", data: text });

  } catch (error) {
    console.error("Error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
