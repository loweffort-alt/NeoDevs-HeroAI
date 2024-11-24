import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch('https://dummyjson.com/comments/3', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  return Response.json({ data })
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
//     const target = "qu"; // Hindi
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






export async function POST() {
  const res = {
    "text": "you are an amazing writer!",
    "translation": "¡qanqa admirakuypaq qillqaqmi kanki!"
  }

  return Response.json({ res })
}
