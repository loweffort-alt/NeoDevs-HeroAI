"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { useTransition } from "react"
import { Loader2 } from "lucide-react"

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition()

  function handleClick() {
    // Llamada asíncrona fuera de startTransition
    signOut({ callbackUrl: "/login" })
      .then(() => {
        // Coloca las actualizaciones de estado dentro de startTransition
        startTransition(() => {
          // Aquí podrías actualizar el estado de la UI si es necesario
          console.log('User signed out, redirecting to login page');
        })
      })
      .catch((error) => {
        console.error('Error during sign out:', error);
      });
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
