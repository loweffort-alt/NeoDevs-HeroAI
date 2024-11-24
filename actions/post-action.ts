"use server"

export const checkServer = async () => {
  try {
    console.log("Hola desde el server")
    return { success: true }
  } catch (error) {
    return { error: error }
  }
}
