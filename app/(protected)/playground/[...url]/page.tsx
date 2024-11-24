"use client"

import { useEffect, useRef, useState } from 'react'
import '../styles.css'
import { createHandlersX, createHandlersY } from '@/components/handler-mouse'
import QuestionsSection from '@/components/sections/playground/questions'
import DocPreview from '@/components/doc-preview'
import ChatBot from '@/components/Chatbot'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Playground = () => {
  const [resume, setResume] = useState("")
  const [pressX, setPressX] = useState(false)
  const [pressY, setPressY] = useState(false)
  const [move, setMove] = useState(false)
  const [urlDoc, setUrlDoc] = useState("")

  function handleClickResume() {
    const resumen = localStorage.getItem("resume")
    setResume(resumen)
  }

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const resizerXRef = useRef<HTMLDivElement | null>(null);

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const resizerYRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter()

  useEffect(() => {
    const currentUrl = window.location.href
    const basePath = "/playground/"
    const path = currentUrl.split(basePath)[1] || ""
    setUrlDoc(path)
  }, [])


  const { handleMouseXDown, handleMouseXMove, handleMouseXUp } = createHandlersX(
    pressX,
    setPressX,
    setMove,
    leftRef,
    rightRef,
    resizerXRef
  )

  const { handleMouseYDown, handleMouseYMove, handleMouseYUp } = createHandlersY(
    pressY,
    setPressY,
    setMove,
    topRef,
    bottomRef,
    resizerYRef
  )

  function handleClickChangeDoc() {
    router.push("/playground")
  }

  return (
    <div id="app" className="p-5">
      <div className="resizable-y flex">
        <div ref={topRef} className="resizable-x" style={{ flex: '60%' }}>
          <div
            ref={leftRef}
            id='Questions'
            className="div0 overflow-hidden bg-[#0d0d0d] flex justify-center items-center rounded-xl"
            style={{ flex: '50%' }}
          >
            <QuestionsSection />
          </div>
          <div ref={resizerXRef} onMouseDown={handleMouseXDown} onMouseUp={handleMouseXUp} onMouseMove={handleMouseXMove} className="resizer-x"></div>
          <div
            ref={rightRef}
            id="DocPreview"
            className="relative bg-[#0d0d0d] flex justify-center rounded-xl overflow-y-auto overflow-x-hidden"
            style={{ flex: '50%' }}
          >
            <div className="flex flex-col relative gap-8 overflow-y-auto overflow-x-hidden">
              <Button variant="destructive" className='fixed right-5 top-5 z-40' onClick={handleClickChangeDoc}>
                Cargar Otro
              </Button>
              {urlDoc && <DocPreview url={urlDoc} />}
            </div>
          </div>
        </div>
        <div ref={resizerYRef} onMouseDown={handleMouseYDown} onMouseUp={handleMouseYUp} onMouseMove={handleMouseYMove} className="resizer-y"></div>
        <div
          ref={bottomRef}
          className="div1 overflow-hidden bg-[#0d0d0d] flex justify-center items-center rounded-xl"
          style={{ flex: '40%' }}
        >
          <div className='grid grid-cols-2 w-full h-full'>
            <div className='w-full h-full flex flex-col items-center justify-center p-10 gap-2'>
              <Button onClick={handleClickResume}>
                Show Resume
              </Button>
              <div>
                {resume}
              </div>
            </div>
            <div className='w-full h-full overflow-y-auto'>
              <ChatBot />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playground

