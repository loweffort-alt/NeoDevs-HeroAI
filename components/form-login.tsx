"use client"

import { z } from "zod"
import { loginSchema } from "@/lib/zod"
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
import { loginAction } from "@/actions/auth-action"
import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

const FormLogin = () => {
  // const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // setError(null)
    startTransition(() => {
      loginAction(values).then(response => {
        if (response.error) {
          console.error(response.error);
          console.error(response.error.digest);
          // setError(response.error);
        } else {
          router.push("/playground");
        }
      }).catch(error => {
        console.log({ error });
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-72 m-auto flex flex-col justify-center">
        <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold mb-6">Sign In</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
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
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* { */}
        {/*   error && <FormMessage> {error} </FormMessage> */}
        {/* } */}
        <Button type="submit" disabled={isPending}>
          {
            isPending ?
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </> :
              <>
                Submit
              </>
          }
        </Button>
      </form>
    </Form>
  )
}

export default FormLogin
