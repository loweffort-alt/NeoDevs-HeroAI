"use client"

import { Button } from '@/components/ui/button'
import { CircleArrowLeft, CircleArrowRight, Loader2 } from 'lucide-react'
import React, { useEffect, useState, useTransition } from 'react'
import { BackendData, Question } from '@/lib/backend-types'
import LogoutButton from '@/components/logout-button'


export const QuestionsSection = () => {
  // const [data, setData] = useState()
  // const [language, setLanguage] = useState<{ originalText: string; translatedText: string }>({ originalText: "", translatedText: "" });
  // const [inputData, setInputData] = useState<string>("")
  // Loading Questions
  const [allQuestions, setAllQuestions] = useState<BackendData["questions"]>([])
  // TODO: Hacer un Resumen
  // const [resume, setResume] = useState<BackendData["summary"]>("")
  const [isPending, startTransition] = useTransition()
  const [isReady, setIsReady] = useState(false)

  // Show single Question
  const [singleQuestion, setSingleQuestion] = useState<Question>()
  const [currentQuestionOnScreen, setCurrentQuestionOnScreen] = useState(0)
  const [wasAnswered, setWasAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // TODO: Este comportamiento es el correcto pero hay error de tipado
  // useEffect(() => {
  //   function getBackendResponse() {
  //     const documentUrl = localStorage.getItem("docUrl")
  //
  //     startTransition(async () => {
  //       try {
  //         // NOTE: Elegir Backend
  //         // const backendURL = "/api/production"
  //         const backendURL = "/api/development"
  //
  //         const response = await fetch(backendURL, {
  //           method: "POST", // Cambiado a POST para enviar datos
  //           headers: {
  //             "Content-Type": "application/json", // Encabezado necesario para JSON
  //           },
  //           body: JSON.stringify({
  //             url: documentUrl, // Envía el docUrl como pdf_url
  //           }),
  //         });
  //
  //         if (!response.ok) {
  //           throw new Error(`Error: ${response.statusText}`)
  //         }
  //
  //         const result = await response.json()
  //         const questions = result.data.questions
  //         setAllQuestions(questions)
  //         // const summary = result.data.summary
  //         // setResume(summary)
  //         setIsReady(true)
  //       } catch (err) {
  //         console.log(err)
  //       }
  //     })
  //   }
  //   getBackendResponse()
  // }, [])

  useEffect(() => {
    async function getBackendResponse() {
      const documentUrl = localStorage.getItem("docUrl")

      try {
        // NOTE: Elegir Backend
        // const backendURL = "/api/production"
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
        const questions = result.data.questions
        startTransition(() => {
          setAllQuestions(questions)
          // const summary = result.data.summary
          // setResume(summary)
          setIsReady(true)
        })
      } catch (err) {
        console.log(err)
      }
    }
    getBackendResponse()
  }, [])

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

  // TODO: Implementar traducción
  // function getTranslate() {
  //   startTransition(async () => {
  //     try {
  //       const response = await fetch("/api/res", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       })
  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.statusText}`)
  //       }
  //       const result = await response.json()
  //       const originalText = result.res.text
  //       const translatedText = result.res.translation
  //
  //       setLanguage({ originalText: originalText, translatedText: translatedText })
  //     } catch (error) {
  //       console.log("Falló hay un error en checkData")
  //     }
  //   })
  // }

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

export const NoQuestion = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className='border-b dark:border-border shadow w-full h-16 p-4 flex justify-between items-center'>
        <LogoutButton />
        <Button variant="outline">
          Traducir
        </Button>
      </div>

      <div className='flex-1'>
      </div>

      <div className='border-t border-neutral-400 shadow dark:border-border w-full h-16 p-4 flex justify-between items-center'>
        <Button variant="outline">
          <CircleArrowLeft />
          Next
        </Button>
        <Button variant="outline">
          Prev
          <CircleArrowRight />
        </Button>
      </div>
    </div >
  )
}

export const QuestionsDemo = () => {
  const [allQuestions, setAllQuestions] = useState<BackendData["questions"]>([])
  // TODO: Hacer un Resumen
  // const [resume, setResume] = useState<BackendData["summary"]>("")
  const [isPending, startTransition] = useTransition()
  const [isReady, setIsReady] = useState(false)

  // Show single Question
  const [singleQuestion, setSingleQuestion] = useState<Question>()
  const [currentQuestionOnScreen, setCurrentQuestionOnScreen] = useState(0)
  const [wasAnswered, setWasAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    async function getBackendResponse() {
      const documentUrl = localStorage.getItem("docUrl")

      try {
        // NOTE: Elegir Backend
        // const backendURL = "/api/production"
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
        const questions = result.data.questions
        startTransition(() => {
          setAllQuestions(questions)
          setIsReady(true)
        })
      } catch (err) {
        console.log(err)
      }
    }
    getBackendResponse()
  }, [])

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
