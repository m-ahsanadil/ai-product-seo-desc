import { generateText } from "ai"
import { groq } from "@ai-sdk/groq" // Import groq instead of openai
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { productName } = await req.json()

    if (!productName) {
      return NextResponse.json({ error: "Product name is required." }, { status: 400 })
    }

    // Check if the Groq API key is set
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Groq API key is missing. Please set the GROQ_API_KEY environment variable in your Vercel project settings.",
        },
        { status: 500 },
      )
    }

    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"), // Use a Llama model from Groq
      prompt: `Generate a catchy product description and relevant SEO tags for a product named '${productName}'.
    The description should be engaging and highlight key benefits.
    The SEO tags should be comma-separated keywords.

    Format:
    Description: [Your catchy description here]
    SEO Tags: [tag1, tag2, tag3]`,
    })

    return NextResponse.json({ description: text })
  } catch (error: any) {
    console.error("Error generating description:", error)
    // Provide a more user-friendly error message for common issues
    if (error.message.includes("API key is missing")) {
      return NextResponse.json(
        {
          error:
            "Groq API key is missing. Please set the GROQ_API_KEY environment variable in your Vercel project settings.",
        },
        { status: 500 },
      )
    }
    return NextResponse.json(
      { error: "Failed to generate description. Please check your API key and try again." },
      { status: 500 },
    )
  }
}
