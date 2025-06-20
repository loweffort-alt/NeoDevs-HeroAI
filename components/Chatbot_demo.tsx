import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown'

const ChatBot: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>(""); // Mensaje del usuario
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]); // Historial de mensajes
  const chatRef = useRef<HTMLDivElement>(null);

  async function sendMessage() {
    if (!userMessage.trim()) return;
    // Añade el mensaje del usuario al historial
    setChatHistory((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      const response = "<think> Okay, the user just asked me about the model I'm based on. They previously asked who I am, and I introduced myself as a teaching and pedagogy assistant. Now they're digging deeper into my technical background. I should explain that I'm based on Llama, developed by Meta. It's important to mention that while I'm knowledgeable, I don't have consciousness or emotions. I need to keep it clear and concise, as per my previous responses. I'll make sure to highlight how my design focuses on understanding and generating human-like text, which is perfect for educational purposes. Also, I'll offer further assistance in case they have more questions. Keeping it friendly and approachable is key here. </think> Estoy basado en el modelo **LLaMA (Large Language Model Application)**, desarrollado por **Meta AI**. Aunque tengo una gran capacidad para entender y generar texto similar al de un ser humano, no poseo conciencia ni emociones. Mi función es ayudarte proporcionando información útil y precisa. ¿Te gustaría saber más sobre cómo funciono o cómo puedo ayudarte en específico? 😊"

      const responseFormated = response.replace(/<think>(.*?)<\/think>/g, '').trim();
      // Añade la respuesta del bot al historial
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", content: responseFormated },
      ]);
    } catch (error) {
      console.error("Error al comunicarse con el chatbot:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", content: "Lo siento, en la versión Demo no se puede chatear" },
      ]);
    }

    // Limpia el mensaje del usuario
    setUserMessage("");
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // TODO: Pintar de rojo el mensaje del bot si hay un error y desactivar el input

  return (
    <div className="w-full h-full flex flex-col">
      <div className="chatHistory flex-1" ref={chatRef}>
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user" ? "userMessage border-2" : "botMessage bg-foreground text-background"
            }
          >
            <ReactMarkdown>
              {message.content}
            </ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <input
          className="flex-1 px-3 mr-3 rounded focus:outline-none bg-[rgb(18,18,18)]"
          placeholder="Chatea con tu archivo pdf aquí"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage}>
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default ChatBot;
