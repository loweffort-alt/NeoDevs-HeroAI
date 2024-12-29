import { ReactNode } from "react"

const ProtectedLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="h-screen">
      {children}
    </div>
  )
}

export default ProtectedLayout

