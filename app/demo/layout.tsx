import { ReactNode } from "react"

const DemoLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="h-screen">
      {children}
    </div>
  )
}

export default DemoLayout
