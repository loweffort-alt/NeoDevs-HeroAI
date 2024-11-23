import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { resSchema } from '@/lib/zod'
import { Loader2 } from 'lucide-react'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const Question = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof resSchema>>({
    resolver: zodResolver(resSchema),
    defaultValues: {
      respuesta: "",
    }
  })

  function onSubmit(e) {
    console.log(e.target)
  }

  return (
    <div className="text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-72 m-auto flex flex-col justify-center">
          <FormField
            control={form.control}
            name="respuesta"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Respuesta</FormLabel>
                <FormControl>
                  <Input placeholder="Escribe aqui" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
    </div>
  )
}

export default Question
