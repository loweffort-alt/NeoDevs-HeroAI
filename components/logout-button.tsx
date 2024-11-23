"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { useTransition } from "react"
import { Loader2 } from "lucide-react"

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition()

  function handleClick() {
    startTransition(async () => {
      try {
        await signOut({
          callbackUrl: "/login"
        })
      } catch (error) {
        console.error("Error during sign out:", error);
      }
    })
  }

  return (
    <Button type="submit" onClick={handleClick} disabled={isPending}>
      {
        isPending ?
          <>
            <Loader2 className="animate-spin" />
            Bye!!
          </> :
          <>
            Logout
          </>
      }
    </Button>
  )
}

export default LogoutButton
