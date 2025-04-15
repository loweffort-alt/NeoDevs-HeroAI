"use client"

import { Loader2 } from 'lucide-react'
import React, { useEffect, useState, useTransition } from 'react'
import { BackendData } from '@/lib/backend-types'

type SummarySectionProps = {
  currentPDF: number
}

export const SummarySection: React.FC<SummarySectionProps> = ({ currentPDF }) => {
  const [resume, setResume] = useState<BackendData["summary"]>("")
  const [isPending, startTransition] = useTransition()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function getBackendResponse() {
      const documentUrl = localStorage.getItem("docUrl")

      try {
        // NOTE: Elegir Backend
        const backendURL = "/api/development"

        const response = await fetch(backendURL, {
          method: "POST", // Cambiado a POST para enviar datos
          headers: {
            "Content-Type": "application/json", // Encabezado necesario para JSON
          },
          body: JSON.stringify({
            url: documentUrl, // Envía el docUrl como pdf_url
          }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }

        const result = await response.json()
        startTransition(() => {
          const summary = result.data.pdfs[currentPDF].summary
          setResume(summary)
          setIsReady(true)
        })
      } catch (err) {
        console.log(err)
      }
    }
    getBackendResponse()
  }, [currentPDF])

  return (
    <div className="text-white flex flex-col h-full w-full">
      <div className='flex-1'>
        {
          isPending ?
            <>
              <Loader2 className="animate-spin" />
              Please wait
            </> :
            isReady && (
              <div className='flex flex-col items-center justify-between py-4 h-full w-full'>
                <h1 className='font-bold text-white text-xl'>Resumen</h1>
                <div className='text-left w-full h-full my-4'>
                  <div className='mx-10'>
                    {resume}
                  </div>
                </div>
              </div>
            )
        }
      </div>

    </div >
  )
}
