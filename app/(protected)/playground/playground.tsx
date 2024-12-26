"use client"

import { createContext, useContext, useRef, useState } from 'react'
import './styles.css'
// import DocPreview from '@/components/doc-preview'
import DocumentSection from '@/components/sections/playground/document'
import QuestionsSection from '@/components/sections/playground/questions'
import ChatBot from '@/components/Chatbot'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

type PlaygroundProps = {
  username: string
}

const AuthContext = createContext<string | null>(null)

export const useAuth = () => useContext(AuthContext)

const Playground: React.FC<PlaygroundProps> = ({ username }) => {

  return (
    <AuthContext.Provider value={username}>
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
              <DocumentSection />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <ChatBot />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </AuthContext.Provider>
  )
}

export default Playground

//   <div id="app" className="p-5">
//   <div className="resizable-y flex">
//     <div ref={topRef} className="resizable-x" style={{ flex: '60%' }}>
//       <div
//         ref={leftRef}
//         id='Questions'
//         className="div0 overflow-hidden border-2 flex justify-center items-center rounded-xl"
//         style={{ flex: '50%' }}
//       >
//         <QuestionsSection />
//       </div>
//       <div ref={resizerXRef} onMouseDown={handleMouseXDown} onMouseUp={handleMouseXUp} onMouseMove={handleMouseXMove} className="resizer-x bg-tra"></div>
//       <div
//         ref={rightRef}
//         id="DocPreview"
//         className="relative border-2 flex justify-center rounded-xl overflow-y-auto overflow-x-hidden"
//         style={{ flex: '50%' }}
//       >
//         <DocumentSection />
//       </div>
//     </div>
//     <div ref={resizerYRef} onMouseDown={handleMouseYDown} onMouseUp={handleMouseYUp} onMouseMove={handleMouseYMove} className="resizer-y"></div>
//     <div
//       ref={bottomRef}
//       className="div1 flex overflow-hidden border-2 rounded-xl"
//       style={{ flex: '40%' }}
//     >
//       <div className='grid grid-cols-2 w-full h-full'>
//         <div className='w-full h-full flex flex-col items-center justify-center p-10 gap-2'>
//           <Button onClick={handleClickResume}>
//             Show Resume
//           </Button>
//         </div>
//         <div className='w-full h-full overflow-y-auto'>
//           <ChatBot />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

