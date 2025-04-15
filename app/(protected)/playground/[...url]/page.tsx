"use client"

import { useEffect, useState } from 'react'
import '../styles.css'
import { QuestionsSection } from '@/components/sections/playground/questions'
import DocPreview from '@/components/doc-preview'
import ChatBot from '@/components/Chatbot'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const Playground = ({ demo = false }) => {
  const [urlDoc, setUrlDoc] = useState("")
  const router = useRouter()

  useEffect(() => {
    const url = "https://gavrt.lewiscenter.org/documents/Uranus_Intro.pdf"
    const path = localStorage.getItem("docUrl") || url
    setUrlDoc(path)
  }, [])

  function handleClickChangeDoc() {
    router.push("/playground")
  }

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}>
        <QuestionsSection />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={65}
            className="relative flex justify-center rounded-xl overflow-y-auto overflow-x-hidden"
          >
            <div className="flex flex-col relative gap-8 overflow-y-auto overflow-x-hidden">
              <Button variant="secondary" className='fixed right-5 top-5 z-40' onClick={handleClickChangeDoc}>
                {
                  demo ? "Siguiente Doc" : "Cargar Otro"
                }
              </Button>
              {urlDoc && <DocPreview url={urlDoc} />}
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <ChatBot />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Playground
