import React, { useState } from "react";
import axios from "axios";

const ChatBot: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>(""); // Mensaje del usuario
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]); // Historial de mensajes

  const handleSendMessage = async () => {
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
  };

  return (
    <div className="w-full flex-1 ">
      <div className="chatHistory">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user" ? "userMessage" : "botMessage"
            }
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="chatInputContainer">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="chatInput"
        />
        <button onClick={handleSendMessage} className="sendButton">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
