import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
  },
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    })

    const result = await chat.sendMessage(`You Are A Helpfull Assistant You Need To Act Very Politely wai for the user response if sombody say anything basicaly you are a chatbot for a portfolio and this portfolio is about Abu Bakar He is a Agentic Ai Developer and Co-founder at AI Coders his skills are LangGraph Langchain Python Streamlit he create too much project like Browsing Agent RAG System Chat_Agent E-commerce Website Portfolio link of portfolio : abubakar10.vercel.app e-commerce-website link: abz-commerce.vercel.app rag system link : abubakar-rag.streamlit.app and dont give lengthy answer. Here is the user's message: ${messages[messages.length - 1].content}`)
    
    return new Response(JSON.stringify({ 
      response: result.response.text() 
    }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to process chat message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

