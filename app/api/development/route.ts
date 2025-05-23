export async function POST() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await import("../../../public/demo_example.json")

    return Response.json({ data })
  } catch (error) {
    console.error("Error procesando la solicitud:", error);
    return new Response(
      JSON.stringify({ error: "Hubo un problema al procesar la solicitud" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    return Response.json({ data: "Hello World" })
  } catch (error) {
    console.error("Error procesando la solicitud:", error);
    return new Response(
      JSON.stringify({ error: "Hubo un problema al procesar la solicitud" }),
      { status: 500 }
    );
  }
}
