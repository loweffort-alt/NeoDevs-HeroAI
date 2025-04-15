import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import { EdgeStoreProvider } from "@/lib/edgestore";

export const metadata: Metadata = {
  title: "HeroAI",
  description: "App web que usa OpenAI y LangChain para convertir PDFs en quizzes educativos. Proyecto full-stack (Next.js + FastAPI) desarrollado en 48h.",
  authors: [{ name: "Darío Alexander Farfán Navarro" }],
  keywords: [
    "HeroAI",
    "IA educativa",
    "OpenAI",
    "Resumir PDFs",
    "LangChain",
    "educación con inteligencia artificial",
    "PDF a preguntas",
  ],
  robots: "index, follow",
  openGraph: {
    title: "HeroAI | Convierte PDFs en Quizzes Educativos",
    description:
      "Plataforma que transforma documentos PDF en cuestionarios usando IA. Ideal para estudiar más rápido y de forma inteligente.",
    url: "https://neo-devs-hero-ai.vercel.app/", // cámbialo por el real
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/nVd8PkN4/Captura-desde-2025-04-14-23-22-28.png", // reemplaza con imagen real del proyecto
        width: 1496,
        height: 802,
        alt: "HeroAI app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@loweffort-alt", // tu handle real
    title: "HeroAI: Convierte PDFs en Quizzes Educativos",
    description:
      "¿Tienes PDFs para estudiar? HeroAI los convierte en preguntas usando IA 🤖. Ideal para repasar antes de los exámenes. 🧠",
    images: ["https://i.postimg.cc/nVd8PkN4/Captura-desde-2025-04-14-23-22-28.png"], // reemplaza por imagen real
  },
  themeColor: "#040c0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <EdgeStoreProvider>
            {children}
          </EdgeStoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
