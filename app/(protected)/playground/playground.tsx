"use client"

import { createContext, useContext } from 'react'
import './styles.css'
import DocumentSection from '@/components/sections/playground/document'
import { NoQuestion } from '@/components/sections/playground/questions'
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
          <NoQuestion />
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

