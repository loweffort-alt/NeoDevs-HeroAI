import { useState, useTransition } from "react"
import axios from "axios";
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { chatbotSchema, loginSchema } from "@/lib/zod";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const ChatBot: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>(""); // Mensaje del usuario
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]); // Historial de mensajes

  const form = useForm<z.infer<typeof chatbotSchema>>({
    resolver: zodResolver(chatbotSchema),
    defaultValues: {
      chat: "",
    }
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
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

  return (
    <div className="w-full h-full flex flex-col">
      <div className="chatHistory flex-1">
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
      <div className="chatInputContainer">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex item-center justify-center gap-10">
            <FormField
              control={form.control}
              name="chat"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Chatea con tu archivo pdf aquí"
                      {...field}
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ChatBot;
