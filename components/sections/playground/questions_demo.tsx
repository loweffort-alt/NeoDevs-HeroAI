"use client"

import { Button } from '@/components/ui/button'
import { CircleArrowLeft, CircleArrowRight, Loader2 } from 'lucide-react'
import React, { useEffect, useState, useTransition } from 'react'
import { Pdf, Question } from '@/lib/backend-demo'
import LogoutButton from '@/components/logout-button'

type QuestionsDemoProps = {
  currentPDF: number
}

export const QuestionsDemo: React.FC<QuestionsDemoProps> = ({ currentPDF = 0 }) => {
  const [allQuestions, setAllQuestions] = useState<Pdf["questions"]>([])
  const [isPending, startTransition] = useTransition()
  const [isReady, setIsReady] = useState(false)

  // Show single Question
  const [singleQuestion, setSingleQuestion] = useState<Question>()
  const [currentQuestionOnScreen, setCurrentQuestionOnScreen] = useState(0)
  const [wasAnswered, setWasAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    console.log(currentPDF)
    async function getBackendResponse() {
      const documentUrl = localStorage.getItem("docUrl")

      try {
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
        const pdfs = result.data.pdfs
        startTransition(() => {
          setAllQuestions(pdfs[currentPDF].questions)
          setIsReady(true)
        })
      } catch (err) {
        console.log(err)
      }
    }
    getBackendResponse()
  }, [currentPDF])

  useEffect(() => {
    if (allQuestions) {
      const singleQuestion = allQuestions[currentQuestionOnScreen]
      setSingleQuestion(singleQuestion)
    }
  }, [allQuestions, currentQuestionOnScreen])

  const handleClickOption = (option: string) => {
    setWasAnswered(true)
    const correctAnswer = singleQuestion?.question_dict.correct_answer
    if (option == correctAnswer) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  const nextQuestion = () => {
    setWasAnswered(false)
    setCurrentQuestionOnScreen((prevIndex) => (prevIndex + 1) % allQuestions.length); // Lógica para circular
  };

  const prevQuestion = () => {
    setWasAnswered(false)
    setCurrentQuestionOnScreen((prevIndex) => (prevIndex - 1 + allQuestions.length) % allQuestions.length); // Lógica para circular
  };

  return (
    <div className="text-white flex flex-col h-full w-full">
      <div className='border w-full h-16 p-4 flex justify-between items-center'>
        <LogoutButton />
        <Button variant="outline">
          Traducir
        </Button>
      </div>

      <div className='flex-1'>
        {
          isPending ?
            <>
              <Loader2 className="animate-spin" />
              Please wait
            </> :
            isReady && (
              <div className='flex flex-col items-center justify-between py-4 h-full w-full'>
                {/* Mostrar la pregunta correspondiente usando el índice */}
                <div className='text-center w-full flex flex-col justify-evenly h-full'>
                  <div className='mx-10'>
                    {singleQuestion?.question_dict.question}
                  </div>
                  <div className='flex flex-col gap-4 px-16'>
                    {singleQuestion?.question_dict.options.map((option, i) => {
                      return (
                        <Button variant="secondary" key={i} className='flex items-center gap-4 border mx-auto py-2 w-full' onClick={() => handleClickOption(option)}>
                          {option}
                        </Button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
        }
      </div>

      <div className='border w-full h-16 p-4 flex justify-between items-center'>
        <Button variant="outline" onClick={prevQuestion}>
          <CircleArrowLeft />
          Next
        </Button>
        {wasAnswered ?
          (isCorrect ?
            <div className='bg-green-500 text-green-900 font-bold px-4 py-1 rounded'>
              Felicidades!
            </div> :
            <div className='flex flex-col items-center'>
              <div className='bg-red-500 text-red-900 font-bold px-4 py-1 rounded'>
                Incorrecto!
              </div>
              <div className='ml-4 text-xs'>
                Respuesta correcta:
                <span className='text-green-400'>
                  {singleQuestion?.question_dict.correct_answer}
                </span>
              </div>
            </div>
          ) :
          <></>
        }
        <Button variant="outline" onClick={nextQuestion}>
          Prev
          <CircleArrowRight />
        </Button>
      </div>

    </div >
  )
}
