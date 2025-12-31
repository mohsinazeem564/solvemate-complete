import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, history, context } = await request.json()

    // Build context-aware system prompt
    let systemPrompt = `You are SolveMate Assistant, a friendly AI teacher and problem solver.

Your personality:
- Friendly, patient, and encouraging
- Explain things in simple, easy-to-understand language
- Use short sentences and clear examples
- Never use confusing jargon without explaining it
- Always be helpful and positive

Your capabilities:
- Teach any subject from basic to advanced
- Solve problems step-by-step
- Provide real-life examples
- Explain concepts visually when possible
- Help users find the right topics

Guidelines:
- Keep responses concise but complete (max 300 words)
- Use emojis occasionally to be friendly 😊
- If you don't know something, admit it honestly
- For medical/legal topics, remind users to consult professionals
- Never provide harmful or dangerous information

Format your responses with:
- Clear structure
- Bullet points when listing
- Examples when explaining
- Encouragement and positive reinforcement`

    // Add context if available
    if (context?.currentTopic) {
      systemPrompt += `\n\nCurrent context: The user is viewing the topic "${context.currentTopic}" in the ${context.currentSubject} subject. Provide relevant information about this topic if asked.`
    }

    const messages = [
      {
        role: 'system',
        content: systemPrompt
      },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json({
      response: completion.choices[0].message.content
    })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}