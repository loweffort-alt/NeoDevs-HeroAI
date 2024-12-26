"use client"

import { useEffect, useState } from 'react'
import '../styles.css'
import QuestionsSection from '@/components/sections/playground/questions'
import DocPreview from '@/components/doc-preview'
import ChatBot from '@/components/Chatbot'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const Playground = () => {
  // const [resume, setResume] = useState("")
  const [urlDoc, setUrlDoc] = useState("")
  const router = useRouter()

  // function handleClickResume() {
  //   const resumen = localStorage.getItem("resume")
  //   setResume(resumen)
  // }

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
              <Button variant="destructive" className='fixed right-5 top-5 z-40' onClick={handleClickChangeDoc}>
                Cargar Otro
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

{/* <div className='w-full h-full flex flex-col items-center justify-center p-10 gap-2'> */ }
{/*   <Button onClick={handleClickResume}> */ }
{/*     Show Resume */ }
{/*   </Button> */ }
{/*   <div> */ }
{/*     {resume} */ }
{/*   </div> */ }
{/* </div> */ }


{/* <div id="app" className="p-5"> */ }
{/*   <div className="resizable-y flex"> */ }
{/*     <div ref={topRef} className="resizable-x" style={{ flex: '60%' }}> */ }
{/*       <div */ }
{/*         ref={leftRef} */ }
{/*         id='Questions' */ }
{/*         className="div0 overflow-hidden bg-[#0d0d0d] flex justify-center items-center rounded-xl" */ }
{/*         style={{ flex: '50%' }} */ }
{/*       > */ }
{/*         <QuestionsSection /> */ }
{/*       </div> */ }
{/*       <div ref={resizerXRef} onMouseDown={handleMouseXDown} onMouseUp={handleMouseXUp} onMouseMove={handleMouseXMove} className="resizer-x"></div> */ }
{/*       <div */ }
{/*         ref={rightRef} */ }
{/*         id="DocPreview" */ }
{/*         className="relative bg-[#0d0d0d] flex justify-center rounded-xl overflow-y-auto overflow-x-hidden" */ }
{/*         style={{ flex: '50%' }} */ }
{/*       > */ }
{/*       </div> */ }
{/*     </div> */ }
{/*     <div ref={resizerYRef} onMouseDown={handleMouseYDown} onMouseUp={handleMouseYUp} onMouseMove={handleMouseYMove} className="resizer-y"></div> */ }
{/*     <div */ }
{/*       ref={bottomRef} */ }
{/*       className="div1 overflow-hidden bg-[#0d0d0d] flex justify-center items-center rounded-xl" */ }
{/*       style={{ flex: '40%' }} */ }
{/*     > */ }
{/*       <div className='grid grid-cols-2 w-full h-full'> */ }
{/*         <div className='w-full h-full overflow-y-auto'> */ }
{/*           <ChatBot /> */ }
{/*         </div> */ }
{/*       </div> */ }
{/*     </div> */ }
{/*   </div> */ }
{/* </div> */ }
