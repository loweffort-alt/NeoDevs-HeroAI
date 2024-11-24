"use client"

import { Button } from '@/components/ui/button'
import { Loader2, RefreshCw } from 'lucide-react'
import React, { useState, useTransition } from 'react'


const Question = () => {
  // const [data, setData] = useState()
  const [language, setLanguage] = useState<{ originalText: string; translatedText: string }>({ originalText: "", translatedText: "" });
  const [inputData, setInputData] = useState<string>("")
  const [responseData, setResponseData] = useState<any>("")
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition()

  async function handlePostRequest() {
    setError(null)
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: inputData })
      })

      if (!response.ok) {
        throw new Error("Error al enviar los datos.");
      }

      const data = await response.json()
      setResponseData(data);
      setInputData("")
    } catch (err) {
      setError("Hubo un problema al enviar la solicitud")
    }
  }

  function getQuestions() {
    startTransition(async () => {
      try {
        const response = await fetch("/api/res", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }
        const result = await response.json()
        const originalText = result.res.text
        const translatedText = result.res.translation

        setLanguage({ originalText: originalText, translatedText: translatedText })
      } catch (error) {
        console.log("Falló hay un error en checkData")
      }
    })
  }

  return (
    <div className="text-white">
      <Button variant="outline" size="icon" onClick={getQuestions}>
        <RefreshCw />
      </Button>
      {
        isPending ?
          <p>loading</p> :
          <>
            <p>{language.originalText}</p>
            <p>{language.translatedText}</p>
          </>
      }
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Escribe un mensaje"
      />
      <button onClick={handlePostRequest}>
        Enviar
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {responseData && (
        <div>
          <h3>Respuesta del servidor:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div >
  )
}

export default Question
