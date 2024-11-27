"use client"

import { createContext, useContext, useRef, useState } from 'react'
import './styles.css'
import { createHandlersX, createHandlersY } from '@/components/handler-mouse'
// import DocPreview from '@/components/doc-preview'
import DocumentSection from '@/components/sections/playground/document'
import QuestionsSection from '@/components/sections/playground/questions'
import ChatBot from '@/components/Chatbot'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type PlaygroundProps = {
  username: string
}

const AuthContext = createContext<string | null>(null)

export const useAuth = () => useContext(AuthContext)

const Playground: React.FC<PlaygroundProps> = ({ username }) => {
  const [pressX, setPressX] = useState(false)
  const [pressY, setPressY] = useState(false)
  const [move, setMove] = useState(false)

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const resizerXRef = useRef<HTMLDivElement | null>(null);

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const resizerYRef = useRef<HTMLDivElement | null>(null);

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

  function handleClickResume() {
    const resumen = localStorage.getItem("resume")
    setResume(resumen)
  }

  return (
    <AuthContext.Provider value={username}>
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
              <DocumentSection />
            </div>
          </div>
          <div ref={resizerYRef} onMouseDown={handleMouseYDown} onMouseUp={handleMouseYUp} onMouseMove={handleMouseYMove} className="resizer-y"></div>
          <div
            ref={bottomRef}
            className="div1 flex overflow-hidden bg-[#0d0d0d] rounded-xl"
            style={{ flex: '40%' }}
          >
            <div className='grid grid-cols-2 w-full h-full'>
              <div className='w-full h-full flex flex-col items-center justify-center p-10 gap-2'>
                <Button onClick={handleClickResume}>
                  Show Resume
                </Button>
              </div>
              <div className='w-full h-full overflow-y-auto'>
                <ChatBot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default Playground

