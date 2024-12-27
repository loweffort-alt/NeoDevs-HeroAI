"use client"

import { z } from "zod"
import { registerSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerAction } from "@/actions/auth-action"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

const FormRegister = () => {
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    }
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setError(null)
    // @ts-expect-error Async functions inside startTransition
    startTransition(async () => {
      try {
        await registerAction(values)
        router.push("/playground")
      } catch (error) {
        setError("User Doesn't Exist")
        console.error(error)
      }
    })
  }

  return (
    <div className="grid items-center h-screen font-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-72 m-auto flex flex-col justify-center">
          <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold mb-6">Register</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {
            error && <FormMessage> {error} </FormMessage>
          }
          <Button type="submit" disabled={isPending}>Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default FormRegister
