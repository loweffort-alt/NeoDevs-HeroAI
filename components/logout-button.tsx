"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const LogoutButton = () => {

  async function handleClick() {
    await signOut({
      // callbackUrl: "/login"
    })
  }

  return (
    <Button onClick={handleClick}>
      Logout
    </Button>
  )
}

export default LogoutButton
