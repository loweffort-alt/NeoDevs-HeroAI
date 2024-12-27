"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { useTransition } from "react"
import { Loader2 } from "lucide-react"

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition()

  function handleClick() {
    // @ts-expect-error Async functions inside startTransition
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
    <Button type="submit" onClick={handleClick} disabled={isPending} variant="destructive">
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
