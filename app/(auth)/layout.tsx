import Header from "@/components/sections/home/header"
import { ReactNode } from "react"

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AuthLayout

