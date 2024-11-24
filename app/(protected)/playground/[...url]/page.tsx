"use client"

import { useEffect, useRef, useState } from 'react'
import '../styles.css'
import { createHandlersX, createHandlersY } from '@/components/handler-mouse'
import QuestionsSection from '@/components/sections/playground/questions'
import DocPreview from '@/components/doc-preview'
import ChatBot from '@/components/Chatbot'

const Playground = () => {

  const [pressX, setPressX] = useState(false)
  const [pressY, setPressY] = useState(false)
  const [move, setMove] = useState(false)
  const [urlDoc, setUrlDoc] = useState("")

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const resizerXRef = useRef<HTMLDivElement | null>(null);

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const resizerYRef = useRef<HTMLDivElement | null>(null);

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
            <div className="flex flex-col gap-8 overflow-y-auto overflow-x-hidden">
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
          <ChatBot />
        </div>
      </div>
    </div>
  )
}

export default Playground

