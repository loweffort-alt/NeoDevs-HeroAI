import { useState, useRef, useEffect } from "react"
import axios from "axios";
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
      // Realiza la petición al endpoint del backend
      // const response = await axios.post("https://hero-ai-backend.onrender.com/chat/", {
      //   user_question: userMessage,
      // });
      const response = await axios.post("http://localhost:8000/chat-test/", {
        user_input: userMessage,
      });

      const formattedResponse = response.data.response.replace(/<think>(.*?)<\/think>/g, '').trim();

      // Añade la respuesta del bot al historial
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", content: formattedResponse },
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
