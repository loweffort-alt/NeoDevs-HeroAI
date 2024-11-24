// import { NextResponse } from "next/server";
const urlBackend = "https://hero-ai-backend.onrender.com/process-pdf/"

export async function POST(request) {
  try {
    const { url } = await request.json()

    if (!url) {
      return new Response(
        JSON.stringify({ error: "El campo 'pdf_url' es requerido" }),
        { status: 400 }
      );
    }

    const res = await fetch(urlBackend, {
      method: "POST", // Método POST
      headers: {
        "Content-Type": "application/json", // Define el tipo de contenido como JSON
      },
      body: JSON.stringify({
        pdf_url: url, // Envía la URL del PDF en el cuerpo
      }),
    });

    // Manejo de la respuesta
    if (!res.ok) {
      throw new Error(`Error en la solicitud: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json()

    return Response.json({ data })
  } catch (error) {
    console.error("Error procesando la solicitud:", error);
    return new Response(
      JSON.stringify({ error: "Hubo un problema al procesar la solicitud" }),
      { status: 500 }
    );
  }
}

// export async function POST() {
//   const wea = await import("@google-cloud/translate");
//   const { Translate } = wea.v2;
//
//   const projectId = "brave-frame-442617-i0";
//   const translate = new Translate({ projectId });
//
//   const res = await fetch('https://dummyjson.com/comments/3', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//
//   const data = await res.json()
//
//   // data devuelve
//   // {
//   //   "id": 1,
//   //   "body": "This is some awesome thinking!",
//   //   "postId": 242,
//   //   "likes": 3,
//   //   "user": {
//   //     "id": 105,
//   //     "username": "emmac",
//   //     "fullName": "Emma Wilson"
//   //   }
//   // }
//
//   try {
//     // Traduce texto usando Google Cloud Translation
//     const text = data.body
//     const target = "qu"; // Quechua
//
//     // Traducción
//     const [translation] = await translate.translate(text, target);
//
//     console.log(`Text: ${text}`);
//     console.log(`Translation: ${translation}`);
//
//     // Retorna la traducción como respuesta
//     return NextResponse.json({ text, translation });
//   } catch (error) {
//     console.error("Error during translation:", error);
//     return NextResponse.json({ error: "Translation failed" }, { status: 500 });
//   }
// }

// Esto devuelve:
// {
//     "text": "you are an amazing writer!",
//     "translation": "¡qanqa admirakuypaq qillqaqmi kanki!"
// }






// export async function POST() {
//   const res = {
//     "text": "you are an amazing writer!",
//     "translation": "¡qanqa admirakuypaq qillqaqmi kanki!"
//   }
//
//   return Response.json({ res })
// }
