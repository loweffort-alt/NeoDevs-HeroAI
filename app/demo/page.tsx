"use client"

import './styles.css'
import { QuestionsDemo } from '@/components/sections/playground/questions_demo'
// import { SummarySection } from '@/components/sections/playground/summarize'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from '@/components/ui/button'
import DocPreview from '@/components/doc-preview'
import { useState } from 'react'
import ChatBot from '@/components/Chatbot_demo'

const DemoPlayground = () => {
  const [doc, setDoc] = useState(0)

  const urlDoc = [
    "https://files.edgestore.dev/zp6ys9qv1uxk4ywu/myPublicFiles/_public/heroai/9bead34a-4b0a-4724-9d1f-c729ab322e9f.pdf",
    "https://files.edgestore.dev/zp6ys9qv1uxk4ywu/myPublicFiles/_public/heroai/3524b5c2-90b6-4e5a-be57-9551723df536.pdf",
    "https://files.edgestore.dev/zp6ys9qv1uxk4ywu/myPublicFiles/_public/heroai/91c34a97-fa17-4504-a931-22929d3dade4.pdf",
    "https://files.edgestore.dev/zp6ys9qv1uxk4ywu/myPublicFiles/_public/heroai/118f8859-972b-4f1a-b0bd-88faddb97fc3.pdf",
    "https://files.edgestore.dev/zp6ys9qv1uxk4ywu/myPublicFiles/_public/heroai/7711ff11-de59-4dcb-b6a1-48f92d221878.pdf",
  ]

  function handleClickNextDoc() {
    if (doc === urlDoc.length - 1) {
      setDoc(0)
      return
    } else {
      setDoc(doc + 1)
    }
  }

  function handleClickPrevDoc() {
    if (doc === 0) {
      setDoc(urlDoc.length - 1)
      return
    } else {
      setDoc(doc - 1)
    }
  }

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={35}>
        <QuestionsDemo currentPDF={doc} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={65}
            className="rounded-xl"
          >
            <div className="flex h-full justify-center items-center flex-col relative overflow-y-auto overflow-x-hidden">
              <div className='sticky top-2 p-5 w-full flex justify-between items-center'>
                <Button variant="secondary" onClick={handleClickPrevDoc}>
                  Anterior Doc
                </Button>
                <Button variant="secondary" onClick={handleClickNextDoc}>
                  Siguiente Doc
                </Button>
              </div>
              {urlDoc && <DocPreview url={urlDoc[doc]} />}
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <ChatBot />
            {/* <SummarySection currentPDF={doc} /> */}
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default DemoPlayground

