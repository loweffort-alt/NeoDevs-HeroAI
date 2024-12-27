import { useState, useRef, useEffect } from "react"
import axios from "axios";
import { Button } from "@/components/ui/button"

const ChatBot: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>(""); // Mensaje del usuario
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]); // Historial de mensajes
  const chatRef = useRef<HTMLDivElement>(null);

  async function sendMessage() {
    if (!userMessage.trim()) return; // Evitar mensajes vacíos
    // Añade el mensaje del usuario al historial
    setChatHistory((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      // Realiza la petición al endpoint del backend
      const response = await axios.post("https://hero-ai-backend.onrender.com/chat/", {
        user_question: userMessage,
      });

      // Añade la respuesta del bot al historial
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", content: response.data.bot_response },
      ]);
    } catch (error) {
      console.error("Error al comunicarse con el chatbot:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", content: "Lo siento, ocurrió un error al procesar tu mensaje." },
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
            {message.content}
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
