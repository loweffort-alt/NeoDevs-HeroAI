"use client"

import { Button } from '@/components/ui/button'
import { BadgeCheck, CircleArrowLeft, CircleArrowRight, Divide, Loader2, RefreshCw } from 'lucide-react'
import React, { useEffect, useRef, useState, useTransition } from 'react'
import { BackendData, Question, QuestionDict } from '@/lib/backend-types'


const QuestionsSection = () => {
  // const [data, setData] = useState()
  const [language, setLanguage] = useState<{ originalText: string; translatedText: string }>({ originalText: "", translatedText: "" });
  const [inputData, setInputData] = useState<string>("")
  const [question, setQuestion] = useState<any>()
  const [questions, setQuestions] = useState<any>()
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition()
  const [isReady, setIsReady] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const optionsRefs = useRef([])
  const [hasResponse, setHasResponse] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [correctRespuesta, setCorrectRespuesta] = useState("")

  function saveDataOnLocalStorage(questions: Question[]) {
    questions.forEach((question, index) => {
      const questionId = question.question_id; // Usamos el question_id como clave
      const questionData = JSON.stringify(question); // Convertimos el objeto a JSON
      localStorage.setItem(index, questionData); // Guardamos en LocalStorage con la clave única
      // console.log(question)
    });
    setIsReady(true)
  }

  useEffect(() => {
    if (isReady) {
      const firstQuestion = localStorage.getItem("1")
      const question1 = JSON.parse(firstQuestion)
      setQuestion(question1.question_dict.question)
    }
  }, [isReady])

  function getBackendResponse() {
    startTransition(async () => {
      try {
        const response = await fetch("/api/res")
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }
        const result = await response.json()
        const questions = result.data.questions

        console.log(questions)
        setQuestions(questions)

        saveDataOnLocalStorage(questions)
      } catch (err) {
        console.log(err)
        setError("Hubo un problema al enviar la solicitud")
      }
    })
  }

  const letras = ["A", "B", "C", "D"]

  const handleClickOption = (index) => {
    setHasResponse(true)
    const selectedOption = optionsRefs.current[index]; // Accede al elemento específico
    const opt = selectedOption.innerHTML
    const correctAnswer = questions[currentIndex].question_dict.correct_answer
    if (opt == correctAnswer) {
      setCorrectRespuesta("")
      setIsCorrect(true)
    } else {
      setCorrectRespuesta(correctAnswer)
      setIsCorrect(false)
    }
  }

  // Función para pasar a la siguiente pregunta
  const nextQuestion = () => {
    setHasResponse(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length); // Lógica para circular
  };

  // Función para regresar a la pregunta anterior
  const prevQuestion = () => {
    setHasResponse(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length); // Lógica para circular
  };

  function getTranslate() {
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
    <div className="text-white flex flex-col h-full w-full">
      <div className='border w-full h-16 p-4 flex justify-between items-center'>
        <Button disabled={isPending} onClick={getBackendResponse}>
          {
            isPending ?
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </> :
              <>
                Get Questions
              </>
          }
        </Button>
        <Button variant="outline" onClick={getTranslate}>
          Traducir
        </Button>
      </div>

      <div className='flex-1'>
        {questions && (
          <div className='flex flex-col items-center justify-between py-4 h-full w-full'>
            {/* Mostrar la pregunta correspondiente usando el índice */}
            <div className='text-center w-full flex flex-col justify-evenly h-full'>
              <div className='mx-10'>
                {questions[currentIndex].question_dict.question}
              </div>
              <div className='flex flex-col gap-4 px-16'>
                {questions[currentIndex].question_dict.options.map((option, i) => {

                  return (
                    <Button variant="secondary" key={i} className='flex items-center gap-4 border mx-auto py-2 w-full' onClick={() => handleClickOption(i)}>
                      <div>{letras[i]}</div>
                      <div ref={(el) => { optionsRefs.current[i] = el }}>
                        {option}
                      </div>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='border w-full h-16 p-4 flex justify-between items-center'>
        <Button variant="outline" onClick={prevQuestion}>
          <CircleArrowLeft />
          Next
        </Button>
        {hasResponse ?
          (isCorrect ?
            <div className='bg-green-500 text-green-900 font-bold px-4 py-1 rounded'>Felicidades!</div> :
            <div className='flex flex-col items-center'>
              <div className='bg-red-500 text-red-900 font-bold px-4 py-1 rounded'>Incorrecto!</div>
              <div className='ml-4 text-xs'>
                Respuesta correcta: <span className='text-green-400'>{correctRespuesta}</span>
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

export default QuestionsSection
