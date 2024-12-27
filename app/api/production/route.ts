const urlBackend = "https://hero-ai-backend.onrender.com/process-pdf/"

export async function POST(request: Request): Promise<Response> {
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

